---
name: ctf-forensics
description: "High-level systematic workflow for solving Digital Forensics CTF challenges"
steps:
  - file-signature-verifier
  - pcap-traffic-analyzer
  - steganography-detector
  - encoding-decoder
  - flag-extractor
---

# 🔍 CTF Digital Forensics Workflow

A specialized investigative framework for traffic analysis, file carving, and steganographic data recovery.

## 🎯 Intent
Transform corrupted, hidden, or large data captures into a clear flag.

## 🧠 Reasoning Chain
1. **Verify**: Check magic bytes and file integrity.
2. **Analyze**: Explore network traffic for exfiltration or hidden streams.
3. **Detect**: Find hidden LSB or metadata steganography.
4. **Decode**: Resolve any discovered encoding or ciphers.
5. **Extract**: Final retrieval of the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-forensics
```
