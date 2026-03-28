---
name: frequency-analyzer
description: "Perform character and word frequency analysis"
category: cryptography
tags: ["ctf", "security", "crypto", "frequency-analysis"]
---

# Frequency Analyzer

## Purpose
Systematically analyze the frequency of characters, bigrams, and trigrams in a ciphertext to identify and crack substitution ciphers in a CTF or educational context.

## Steps
1. **Character Counting**: Count the occurrences of each unique character in the ciphertext.
2. **Probability Mapping**: Compare the ciphertext frequencies with the standard frequencies for the target language (e.g., `e`, `t`, `a` in English).
3. **Decryption Strategy**: Use the frequency map to perform trial-and-error substitutions and refine the plaintext based on linguistic context.

## Output
- Frequency counts and heatmaps.
- Initial substitution candidates.
- Logic-based decryption steps.
