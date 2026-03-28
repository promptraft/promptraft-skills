---
name: ctf-crypto
description: "High-level systematic workflow for solving Cryptography CTF challenges"
steps:
  - cipher-identifier
  - encoding-decoder
  - frequency-analyzer
  - known-plaintext-analyzer
  - crypto-weakness-detector
  - flag-recovery
---

# 🔐 CTF Cryptography Workflow

A specialized reasoner for identifying, analyzing, and cracking cryptographic challenges in CTF competitions.

## 🎯 Intent
Transform unknown ciphertext into plaintext and recover the final flag.

## 🧠 Reasoning Chain
1. **Identify**: Determine encoding or cipher type.
2. **Decode**: Remove any transport encodings.
3. **Analyze**: Use frequency or statistical analysis.
4. **Pivot**: Identify known fragments of the flag.
5. **Detect**: Find mathematical or implementation flaws.
6. **Recover**: Extract the flag string.

## 🚀 Usage
```bash
skilloai workflow run ctf-crypto
```
