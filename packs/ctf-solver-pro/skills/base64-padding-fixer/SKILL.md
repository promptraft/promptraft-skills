---
name: base64-padding-fixer
description: "Automatically repair and decode corrupted or incomplete Base64 strings by calculating missing padding characters."
category: ctf-crypto
tags: ["base64", "padding", "decoding", "repair", "ctf"]
---

# Base64 Padding Fixer

## Purpose
A specialized utility for repairing Base64 strings that are missing their necessary `=` padding characters, a common challenge in CTFs where strings are clipped or manually truncated.

## Protocol
1. **Analyze String Length**:
   - Base64 strings (without padding) must be a multiple of 4.
   - Calculate `length % 4`.
2. **Determine Padding**:
   - If `length % 4 == 0`, no padding is needed.
   - If `length % 4 == 2`, add `==`.
   - If `length % 4 == 3`, add `=`.
   - If `length % 4 == 1`, the string is likely corrupted or clipped mid-character.
3. **Repair and Decode**:
   - Append the required `=` signs to the string.
   - Attempt a standard Base64 decode.
4. **Iterative Repair**:
   - If decoding fails with the calculated padding, try removing trailing non-B64 characters or stripping whitespace/newlines.

## Usage Guidelines
- Essential for challenges where Base64 is used as a medium for noisy binary data.
- Use after `cipher-identifier` confirms Base64 but standard tools throw a `binascii.Error: Incorrect padding`.
