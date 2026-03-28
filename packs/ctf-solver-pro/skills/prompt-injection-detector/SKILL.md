---
name: prompt-injection-detector
description: "Identify attack surface of a web application for prompt injection"
category: anti-ai
tags: ["ctf", "security", "ai", "llm", "injection"]
---

# Prompt Injection Detector

## Purpose
Identify and analyze potential prompt injection surfaces in AI-integrated applications.

## Steps
1. **Analyze Endpoints**: Scan the application for any form of user-provided text input (e.g., chat boxes, system prompts, form fields).
2. **Detect Parameters**: Map out how user input is integrated into the model's prompt (e.g., direct concatenation, JSON mapping, or API call).
3. **Identify Input Vectors**: Check for indirect injection points like webpage metadata, database entries, or file uploads.

## Output
- List of exploitable surfaces.
- Analysis of how user input reaches the model's reasoning engine.
