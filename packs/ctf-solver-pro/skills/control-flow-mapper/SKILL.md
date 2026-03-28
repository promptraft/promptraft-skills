---
name: control-flow-mapper
description: "Map and analyze the control flow of a binary file"
category: reverse-engineering
tags: ["ctf", "security", "re", "control-flow"]
---

# Control Flow Mapper

## Purpose
Systematically map and analyze the control flow of a binary file (e.g., function calls, loops, and conditional branches) in a CTF or educational context.

## Steps
1. **Function Call Graph**: Enumerate all function calls and their targets (e.g., library calls, internal functions).
2. **Logic Path Analysis**: Identify the main logic paths and any conditional checks (e.g., `if`, `switch`, or `while` statements).
3. **Security Check Detection**: Look for security-relevant logic (e.g., anti-debugging checks, stack canaries, or NX/ASLR protections).

## Output
- Control flow graph.
- Analysis of main logic paths.
- Identified security checks.
