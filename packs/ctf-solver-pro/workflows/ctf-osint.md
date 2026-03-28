---
name: ctf-osint
description: "High-level systematic workflow for solving OSINT CTF challenges"
steps:
  - domain-footprint-mapper
  - metadata-exif-extractor
  - social-graph-analyzer
  - flag-extractor
---

# 🕵️ CTF OSINT Investigation Workflow

A specialized framework for passive reconnaissance, identity attribution, and metadata correlation.

## 🎯 Intent
Transform a single piece of seed information into a complete target footprint and flag.

## 🧠 Reasoning Chain
1. **Map**: Discover infrastructure and subdomains.
2. **Extract**: Find hidden geolocation and author data.
3. **Analyze**: Trace identities across social and professional networks.
4. **Correlate**: Identify common traits or exposed credentials.
5. **Extract**: Final retrieval of the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-osint
```
