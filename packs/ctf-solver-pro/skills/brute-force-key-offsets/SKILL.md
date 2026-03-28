---
name: brute-force-key-offsets
description: "Iteratively brute-force common encryption keys, Caesar rotation offsets, and XOR sliding windows for ciphertext decryption."
category: ctf-crypto
tags: ["bruteforce", "xor", "caesar", "rot", "decoding", "ctf"]
---

# Brute Force Key Offsets

## Purpose
A high-level brute-force strategy designed for ciphertexts that appear simple (XOR, ROT) but have an unknown single-byte key or a fixed offset.

## Protocol
1. **Identify Cipher Type**:
   - `XOR`: Single-byte XOR brute-force (0-255).
   - `ROT`: Caesar cipher rotation (1-25), ROT13, etc.
   - `Baconian`: 5-character binary-based substitution.
   - `BaseN`: Custom Base64/32/58 variants (if possible).
2. **Setup Brute Force Strategy**:
   - Define the keyspace (e.g., all 256 bytes for XOR).
   - Define a success condition: search for the flag prefix (e.g., `flag{`, `CTF{`, `{`).
3. **Execute and Scan**:
   - Iterate through the keyspace.
   - For each iteration, apply the decryption logic.
   - Scan the result for the flag prefix.
4. **Iterative Padding/Sliding**:
   - If a direct brute-force fails, try a sliding window (e.g., skip 1 byte, then decrypt) or a bit-shift.

## Usage Guidelines
- Essential for crypto challenges that look like simple garbage.
- Use when `cipher-identifier` suggests a symmetric cipher but the key is unknown.
