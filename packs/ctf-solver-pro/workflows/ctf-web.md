---
name: ctf-web
description: "High-level systematic workflow for solving Web Exploitation CTF challenges"
steps:
  - web-recon-analyzer
  - input-surface-mapper
  - xss-sql-injection-detector
  - auth-bypass-analyzer
  - exploit-validation
  - flag-extractor
---

# 🕸️ CTF Web Exploitation Workflow

This workflow provides a structured reasoning chain for identifying, analyzing, and exploiting web-based vulnerabilities in a competition environment.

## 🎯 Intent
Transform raw URL or source code into a validated exploit path and flag extraction.

## 🧠 Reasoning Chain
1. **Recon**: Identify the tech stack and entry points.
2. **Mapping**: Enumerate the input surface and WAF/filter constraints.
3. **Detection**: Test for common injection or logic flaws.
4. **Bypass**: Analyze auth mechanisms for weak spots.
5. **Validation**: Refine the payload for the specific environment.
6. **Capture**: Extract the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-web
```
