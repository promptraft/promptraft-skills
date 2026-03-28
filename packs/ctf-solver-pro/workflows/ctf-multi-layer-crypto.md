# Workflow: Multi-Layer Crypto Solver

## Purpose
This workflow is designed for CTF challenges where flags are hidden behind multiple layers of encoding, encryption, and noise. Use it when standard decoders return non-plaintext results.

## Reasoning Strategy
1. **Layer Identification**: Use `cipher-identifier` to map the outermost encoding (e.g., Hex).
2. **First-Layer Decoding**: Apply `hex-reversal-decoder` or `base64-padding-fixer` to normalize the data.
3. **Key Derivation**: Use `cross-xor-analyzer` if multiple related files are available.
4. **Pattern Brute-Force**: Run `brute-force-key-offsets` to scan for high-frequency flag markers like `flag{`.
5. **Noise Filtering**: Use `noise-pattern-detector` to strip garbage bytes and extract the final flag.

## Key Skills
- `hex-reversal-decoder`
- `base64-padding-fixer`
- `cross-xor-analyzer`
- `noise-pattern-detector`
- `brute-force-key-offsets`
