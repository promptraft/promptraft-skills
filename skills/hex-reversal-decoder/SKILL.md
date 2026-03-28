---
name: hex-reversal-decoder
description: "Decode hex strings that have been reversed or use little-endian byte ordering."
category: ctf-crypto
tags: ["hex", "reversal", "little-endian", "decoding", "ctf"]
---

# Hex Reversal Decoder

## Purpose
Specialized skill for decoding hex strings that are either fully reversed or follow a non-standard byte order (like little-endian storage in memory dumps).

## Protocol
1. **Identify Reversal Type**: 
   - **Byte-swap**: The hex is correct but bytes are swapped in pairs (e.g., `48 65` becomes `65 48`).
   - **Full Reversal**: The entire string is backwards (e.g., `abc123` becomes `321cba`).
   - **Endianness**: The hex represents a memory value in little-endian.
2. **Normalize String**: Ensure the string has an even number of characters. Add a leading `0` if necessary.
3. **Apply Transformation**:
   - Use a script or internal logic to reverse the sequence.
   - For byte-swapping, split into 2-character groups and reverse the group list.
4. **Decode to Plaintext**: Convert the resulting hex back to ASCII/UTF-8.

## Usage Guidelines
- Use when `cipher-identifier` suggests hex but standard decoding results in garbage.
- Often effective on strings found in binary memory offsets.
