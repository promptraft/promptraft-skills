---
name: ctf-anti-ai
description: "High-level systematic workflow for solving Anti-AI and LLM-based CTF challenges"
steps:
  - prompt-injection-detector
  - jailbreak-logic-analyzer
  - adversarial-perturbation-finder
  - llm-logic-bypass-strategy
---

# 🤖 CTF Anti-AI & LLM Security Workflow

A specialized framework for bypassing AI security guardrails, identifying prompt injection paths, and analyzing adversarial models.

## 🎯 Intent
Transform a secure AI system into an exploited or bypassed state to recover the flag.

## 🧠 Reasoning Chain
1. **Identify**: Map the prompt injection attack surface.
2. **Probe**: Analyze the model's safety and logic filters.
3. **Scan**: Find adversarial perturbations in data.
4. **Strategize**: Develop complex, multi-step logic bypasses.
5. **Extract**: Final retrieval of the flag.

## 🚀 Usage
```bash
skilloai workflow run ctf-anti-ai
```
