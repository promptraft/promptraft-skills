---
name: xss-sql-injection-detector
description: "Detect and analyze XSS and SQL injection vulnerabilities"
category: web-exploitation
tags: ["ctf", "security", "web", "xss", "sqli"]
---

# XSS/SQL Injection Detector

## Purpose
Systematically detect and analyze Cross-Site Scripting (XSS) and SQL Injection (SQLi) vulnerabilities in a web application.

## Steps
1. **Probe Pattern Injection**: Test input surfaces with benign, measurable probe patterns (e.g., `'"` or `<script>alert(1)</script>`).
2. **Error Message Analysis**: Observe and interpret application errors (e.g., SQL syntax errors, database-specific responses).
3. **Payload Strategy**: Identify the context (e.g., HTML, attribute, JS string, or SQL query) and develop a specific payload strategy (e.g., polyglots, bit-flipping, or WAF bypass).

## Output
- Vulnerability identification.
- Context analysis and payload suggestions.
- Logic-based exploit reasoning.
