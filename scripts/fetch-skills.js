const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

// ─── Config ────────────────────────────────────────────────────────────────
const RAW_REPO = (process.env.SKILLO_DATA_REPO || 'https://github.com/skilloai/skilloai-content')
  .replace(/\.git$/, '');

// Convert https://github.com/<owner>/<repo>  →  owner/repo
const match = RAW_REPO.match(/github\.com\/([^/]+)\/([^/]+)/);
if (!match) {
  console.error('❌ Invalid SKILLO_DATA_REPO URL. Must be https://github.com/<owner>/<repo>');
  process.exit(1);
}
const [, REPO_OWNER, REPO_NAME] = match;

const DEST_DIR   = path.join(process.cwd(), 'data', 'skills');
const DATA_DIR   = path.join(process.cwd(), 'data');
const TEMP_TAR   = path.join(process.cwd(), 'temp_skills.tar.gz');
const TEMP_EXTR  = path.join(process.cwd(), 'temp_skills_extract');

// ─── Download helper (follows redirects, no auth) ──────────────────────────
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'SkilloAI-Build-Script' } };

    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage} — ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// ─── Count SKILL.md files ──────────────────────────────────────────────────
function countSkills(dir) {
  if (!fs.existsSync(dir)) return 0;
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'SKILL.md')))
    .length;
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function fetchSkills() {
  const isCI = process.env.CI || process.env.NODE_ENV === 'production' || process.env.VERCEL;

  // In local dev: skip if data already exists
  if (!isCI && fs.existsSync(DEST_DIR)) {
    const count = countSkills(DEST_DIR);
    console.log(`✅ Dataset already exists locally (${count} skills). Skipping fetch.`);
    return;
  }

  console.log('🌍 Fetching public skills dataset...');
  console.log(`📦 Repository: ${REPO_OWNER}/${REPO_NAME}`);

  try {
    // 1. Clean up old data
    if (fs.existsSync(TEMP_TAR))  fs.unlinkSync(TEMP_TAR);
    if (fs.existsSync(TEMP_EXTR)) fs.rmSync(TEMP_EXTR, { recursive: true, force: true });
    if (fs.existsSync(DEST_DIR))  fs.rmSync(DEST_DIR,  { recursive: true, force: true });
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

    // 2. Download public tarball
    const tarUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/tarball/main`;
    console.log(`📥 Downloading tarball...`);
    await downloadFile(tarUrl, TEMP_TAR);

    // 3. Extract
    console.log('📂 Extracting dataset...');
    fs.mkdirSync(TEMP_EXTR, { recursive: true });
    execSync(`tar -xzf "${TEMP_TAR}" -C "${TEMP_EXTR}"`, { stdio: 'inherit' });

    // 4. Locate extracted folder (e.g. skilloai-skilloai-content-abc1234/)
    const extractedFolders = fs.readdirSync(TEMP_EXTR);
    if (!extractedFolders.length) throw new Error('Tarball extracted to empty directory.');
    const rootFolder = extractedFolders[0];

    // 5. Move /skills subfolder → /data/skills
    const innerSkills = path.join(TEMP_EXTR, rootFolder, 'skills');
    if (fs.existsSync(innerSkills)) {
      fs.renameSync(innerSkills, DEST_DIR);
    } else {
      // Fallback: no 'skills' subfolder — use the root itself
      fs.renameSync(path.join(TEMP_EXTR, rootFolder), DEST_DIR);
    }

    // 6. Cleanup temps
    console.log('🧹 Cleaning up temporary files...');
    fs.unlinkSync(TEMP_TAR);
    fs.rmSync(TEMP_EXTR, { recursive: true, force: true });

    // 7. Validate
    const count = countSkills(DEST_DIR);
    if (count === 0) {
      throw new Error('No valid skills found after extraction. Check repo structure.');
    }

    console.log(`✅ Dataset ready. Loaded ${count} skills.`);
  } catch (err) {
    console.error('❌ Error fetching dataset:', err.message);
    // Only hard-fail in production/CI so local dev is not blocked
    if (isCI) process.exit(1);
  }
}

fetchSkills();
