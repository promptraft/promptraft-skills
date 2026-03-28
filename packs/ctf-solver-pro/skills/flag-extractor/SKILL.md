---
name: flag-extractor
description: "Systematically find and extract the flag in a CTF challenge"
category: web-exploitation
tags: ["ctf", "security", "web", "flag-extraction"]
---

# Flag Extractor

## Purpose
Enumerate and extract the flag (e.g., `flag{...}`, `CTF{...}`) from a web application or file during a CTF challenge.

## Steps
1. **Search Keywords**: Use common flag prefixes (e.g., `grep -i "flag"` or `find / -name "*flag*"`) across the application's source code, filesystem, or database.
2. **Metadata Audit**: Inspect common hidden locations like `.git/`, `robots.txt`, and file metadata (EXIF data, headers).
3. **Extraction Payload**: Develop a specific payload (e.g., `SELECT flag FROM secrets;` or `{{ config.items() }}`) to retrieve the flag from the target system.

## Output
- Extracted flag.
- Evidence of extraction method.
- Logic-based retrieval strategy.
