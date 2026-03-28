---
name: ctf-reversing
description: "High-level systematic workflow for solving Reverse Engineering CTF challenges"
steps:
  - binary-assembler-analyzer
  - string-extractor
  - control-flow-mapper
  - dynamic-binary-analyzer
  - flag-extractor
---

# 🕹️ CTF Reverse Engineering Workflow

A specialized binary analysis framework for decompiling, tracing, and identifying hidden flag logic in compiled applications.

## 🎯 Intent
Transform a binary executable into clear flag-revealing logic and state.

## 🧠 Reasoning Chain
1. **Analyze**: Identify binary architecture and protections.
2. **Extract**: Search for embedded strings or constants.
3. **Map**: Explore branches and logic paths.
4. **Trace**: Execute and monitor binary behavior.
5. **Reconstruct**: Map memory or register states to the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-reversing
```
