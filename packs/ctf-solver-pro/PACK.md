# CTF Solver Pro Pack

## Overview
A structured, professional-grade framework for solving Capture The Flag (CTF) challenges systematically across all major technical domains.

## Supported Domains & Workflows
- **🕸️ Web Exploitation**: `ctf-web` (Recon, Input Mapping, Payload Discovery)
- **🔐 Cryptography**: `ctf-crypto` (Identification, Encoding, Attack Strategy)
- **🤖 Anti-AI & LLM Security**: `ctf-anti-ai` (Prompt Injection, Jailbreak Logic, Adversarial Analysis)
- **⚙️ Reverse Engineering**: `ctf-reversing` (Static/Dynamic Analysis, String Extraction)
- **🧨 Pwn & Binary Exploitation**: `ctf-pwn` (Overflow Detection, ROP Chains, Shellcode)
- **🔍 Forensics**: `ctf-forensics` (PCAP, Steganography, File Signatures)
- **📡 OSINT**: `ctf-osint` (Footprinting, Metadata, Social Graphs)

## Strategy

1. **Identify**: Determine the challenge type and constraints.
2. **Recon**: Perform domain-specific reconnaissance (e.g., scan endpoints, check magic bytes).
3. **Analyze**: Use expert skills to find weaknesses (e.g., bit-flipping, ROP gadgets, prompt injection entry points).
4. **Validate**: Develop and verify a local exploit or decoding logic.
5. **Extract**: Final proof of work and flag retrieval.

## Example Usage

**Input:**
"Analyze this login page for vulnerabilities. It seems to have a WAF that blocks typical SQL payloads."

**Workflow Selection:**
`skilloai workflow run ctf-web`

**Execution Logic:**
- **Step 1**: `web-recon-analyzer` identifies the login form and endpoints.
- **Step 2**: `input-surface-mapper` maps the WAF's character blacklists.
- **Step 3**: `xss-sql-injection-detector` suggests polyglot or encoding bypasses.
- **Step 4**: `exploit-validation` provides a structured reasoning for the bypass.

## Features

- **7 Specialist Categories**: Web, Crypto, Pwn, Reversing, Forensics, OSINT, and Anti-AI.
- **Automated Decoding Scripts**: Internal Python hooks for CyberChef-style chaining and XOR brute-forcing.
- **Anti-AI Bypass**: Specialized techniques to neutralize LLM-based security guards and delimiter blocks.
- **High-Precision Skills**: 40+ atomic skills using advanced prompt engineering for deterministic solving.

## Inventory

### 🛠️ Atomic Skills
[web-recon-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/web-recon-analyzer), [input-surface-mapper](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/input-surface-mapper), [xss-sql-injection-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/xss-sql-injection-detector), [cipher-identifier](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/cipher-identifier), [encoding-decoder](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/encoding-decoder), [frequency-analyzer](file:///e:/ai%20skill/skilloai-content-repo/skills/frequency-analyzer), [known-plaintext-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/known-plaintext-analyzer), [crypto-weakness-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/crypto-weakness-detector), [prompt-injection-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/prompt-injection-detector), [llm-jailbreak-advocate](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/llm-jailbreak-advocate), [prompt-injection-payload-crafter](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/prompt-injection-payload-crafter), [exploit-validation](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/exploit-validation), [flag-extractor](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/flag-extractor), [hex-reversal-decoder](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/hex-reversal-decoder), [base64-padding-fixer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/base64-padding-fixer), [cross-xor-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/cross-xor-analyzer), [noise-pattern-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/noise-pattern-detector), [brute-force-key-offsets](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/brute-force-key-offsets), [buffer-overflow-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/buffer-overflow-detector), [rop-chain-planner](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/rop-chain-planner), [shellcode-generator-logic](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/shellcode-generator-logic), [binary-assembler-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/binary-assembler-analyzer), [string-extractor](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/string-extractor), [control-flow-mapper](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/control-flow-mapper), [dynamic-binary-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/dynamic-binary-analyzer), [pcap-traffic-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/pcap-traffic-analyzer), [steganography-detector](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/steganography-detector), [file-signature-verifier](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/file-signature-verifier), [domain-footprint-mapper](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/domain-footprint-mapper), [metadata-exif-extractor](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/metadata-exif-extractor), [social-graph-analyzer](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/social-graph-analyzer), [flag-recovery](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/skills/flag-recovery)

### 📈 Workflows
[ctf-web](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-web.md), [ctf-crypto](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-crypto.md), [ctf-reversing](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-reversing.md), [ctf-pwn](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-pwn.md), [ctf-forensics](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-forensics.md), [ctf-osint](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-osint.md), [ctf-anti-ai](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-anti-ai.md), [ctf-multi-layer-crypto](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-multi-layer-crypto.md), [ctf-anti-ai-bypass](file:///e:/ai%20skill/skilloai-content-repo/packs/ctf-solver-pro/workflows/ctf-anti-ai-bypass.md)

## Outcome
By using this pack, users can:
- Systematically approach unknown or complex challenges.
- Reduce guesswork by following domain-expert methodologies.
- Solve modern "Anti-AI" challenges designed to thwart simple automated tools.
