---
name: cross-xor-analyzer
description: "Perform XOR analysis by comparing two known plaintexts, ciphertexts, or binaries to derive common keys or differences."
category: ctf-crypto
tags: ["xor", "comparison", "key-derivation", "analysis", "ctf"]
---

# Cross XOR Analyzer

## Purpose
A high-level analytic skill designed to compare two related files or buffers (e.g., `flag.enc` and `other.enc`) using the XOR operation to identify common encryption keys or repeating patterns.

## Protocol
1. **Identify Related Buffers**: 
   - Two ciphertexts encrypted with the same key.
   - A ciphertext and its known header (e.g., `PDF`, `PNG`, `GIF`).
   - A binary and its original version (e.g., patched vs. unpatched).
2. **Perform Align-and-XOR**:
   - Align the two buffers byte-by-byte.
   - XOR each corresponding byte.
3. **Analyze Result (XOR Diff)**:
   - **Static Result**: Key is constant.
   - **Repeating Pattern**: Key is cyclic.
   - **Structured Plaintext**: The XOR result reveals the underlying plaintext structure.
4. **Derive Key**:
   - If one of the buffers was a known plaintext (e.g., `flag{`), the result *is* the key.

## Usage Guidelines
- Highly effective for XOR challenges where multiple files are provided.
- Use when the encryption key is reuse across different payloads.
