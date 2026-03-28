---
name: crypto-weakness-detector
description: "Identify and analyze weak cryptographic implementations"
category: cryptography
tags: ["ctf", "security", "crypto", "weakness-detector"]
---

# Crypto Weakness Detector

## Purpose
Systematically detect and analyze common weaknesses in cryptographic implementations (e.g., small prime numbers, predictable nonces, or weak random number generators) in a CTF or educational context.

## Steps
1. **Implementation Audit**: Inspect the source code or challenge description for known weak algorithms (e.g., md5, sha1, or custom XOR).
2. **Mathematical Analysis**: Identify and exploit small prime numbers (e.g., in RSA), linear congruential generators (LCGs), or common bit-flipping vulnerabilities.
3. **Attack Strategy**: Use known attack patterns (e.g., birthday attacks, meet-in-the-middle, or chosen-plaintext attacks) to bypass or crack the implementation.

## Output
- Identified weaknesses.
- Attack strategy and payload.
- Logic-based exploit reasoning.
