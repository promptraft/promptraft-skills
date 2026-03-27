const fs = require('fs');
const path = require('path');

const DATA_DIR = 'e:\\ai skill\\data\\skills';

function migrateAndValidate() {
  console.log('🏁 Starting dataset migration & validation...');

  const folders = fs.readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let totalFolders = folders.length;
  let migrated = 0;
  let valid = 0;
  let skipped = 0;
  const invalidSkills = [];

  for (const slug of folders) {
    const folderPath = path.join(DATA_DIR, slug);
    const mdPath = path.join(folderPath, 'SKILL.md');
    const jsonPath = path.join(folderPath, 'skill.json');

    try {
      // 1. Convert JSON to MD if MD is missing
      if (fs.existsSync(jsonPath) && !fs.existsSync(mdPath)) {
        console.log(`📡 Migrating folder: ${slug}`);
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        const name = jsonData.name || slug;
        const description = jsonData.description || '';
        const tags = Array.isArray(jsonData.tags) ? jsonData.tags : [];
        const author = jsonData.author || '';
        const prompt = jsonData.prompt || jsonData.content || '';

        const mdContent = `---
name: ${name}
description: ${description}
tags: [${tags.join(', ')}]
author: ${author}
---------------------------------

${prompt}`;
        
        fs.writeFileSync(mdPath, mdContent);
        migrated++;
      }

      // 2. Strict Validation
      if (fs.existsSync(mdPath)) {
        const raw = fs.readFileSync(mdPath, 'utf8');
        // Simple frontmatter extraction to check requirements
        const lines = raw.split('\n');
        let hasName = false;
        let hasDesc = false;
        let hasTags = false;
        let contentStart = -1;

        for (let i = 0; i < lines.length; i++) {
          const l = lines[i].toLowerCase();
          if (l.startsWith('name:')) hasName = true;
          if (l.startsWith('description:')) hasDesc = true;
          if (l.startsWith('tags:')) hasTags = true;
          if (l.trim().match(/^---+$|^----------------+$/)) {
            contentStart = i;
            break;
          }
        }

        const promptContent = lines.slice(contentStart + 1).join('\n').trim();
        const hasPrompt = promptContent.length > 10;

        if (hasName && hasDesc && hasTags && hasPrompt) {
          valid++;
        } else {
          skipped++;
          invalidSkills.push({ slug, missing: { name: !hasName, desc: !hasDesc, tags: !hasTags, prompt: !hasPrompt } });
        }
      } else {
        skipped++;
        invalidSkills.push({ slug, error: 'SKILL.md missing' });
      }

    } catch (err) {
      console.error(`❌ Error in folder ${slug}:`, err.message);
      skipped++;
    }
  }

  console.log('\n📊 Migration Summary:');
  console.log(`- Total Folders: ${totalFolders}`);
  console.log(`- Migrated from JSON: ${migrated}`);
  console.log(`- Validated SKILL.md: ${valid}`);
  console.log(`- Skipped (Invalid): ${skipped}`);

  if (invalidSkills.length > 0) {
    console.log('\n⚠️ Invalid Skills Log:');
    invalidSkills.forEach(s => console.log(`  - [${s.slug}] ${s.error || 'Missing properties'}`));
  }
}

migrateAndValidate();
