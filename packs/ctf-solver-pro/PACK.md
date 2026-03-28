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

## Outcome
By using this pack, users can:
- Systematically approach unknown or complex challenges.
- Reduce guesswork by following domain-expert methodologies.
- Solve modern "Anti-AI" challenges designed to thwart simple automated tools.
