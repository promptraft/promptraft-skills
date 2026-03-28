---
name: ctf-pwn
description: "High-level systematic workflow for solving Binary Exploitation (Pwn) CTF challenges"
steps:
  - binary-assembler-analyzer
  - buffer-overflow-detector
  - rop-chain-planner
  - shellcode-generator-logic
  - flag-extractor
---

# 🧨 CTF Binary Exploitation (Pwn) Workflow

A professional exploit development framework for detecting overflows and building control-flow hijacks.

## 🎯 Intent
Transform vulnerable binary state into remote code execution (RCE) and flag access.

## 🧠 Reasoning Chain
1. **Analyze**: Identify architecture, ASLR, NX, and Canary.
2. **Detect**: Find the exact offset or vulnerability.
3. **Plan**: Design the ROP chain or logic to bypass NX.
4. **Generate**: Create the specific shellcode or payload.
5. **Execute**: Trigger the vulnerability and extract the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-pwn
```
