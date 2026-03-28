---
name: string-extractor
description: "Extract and analyze printable strings from a binary"
category: reverse-engineering
tags: ["ctf", "security", "re", "strings"]
---

# String Extractor

## Purpose
Systematically extract and analyze printable strings from a compiled binary to identify hardcoded credentials, flags, API endpoints, or hints.

## Steps
1. **Extraction**: Run string extraction tools (e.g., `strings` utility) on the target binary, checking multiple encodings (ASCII, UTF-16/32).
2. **Filtering & Prioritization**: Filter the output for known CTF formats (e.g., `flag{`, `CTF_`) or interesting keywords (e.g., `password`, `key`, `http`, `admin`).
3. **Contextualization**: Map the discovered strings back to the disassembly or memory addresses where they are referenced to understand how they are used.

## Output
- List of high-value strings.
- Identification of encoding types.
- Contextual usage of strings within the binary's logic.
