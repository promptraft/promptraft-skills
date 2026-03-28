---
name: input-surface-mapper
description: "Map all input surfaces and data types in a web application"
category: web-exploitation
tags: ["ctf", "security", "web", "input-mapping"]
---

# Input Surface Mapper

## Purpose
Enumerate and analyze every point where user-provided data enters a web application.

## Steps
1. **Form Discovery**: Find all HTML forms, including hidden fields and dynamically generated inputs.
2. **HTTP Header Audit**: Identify headers that the application processes (e.g., `User-Agent`, `Referer`, `X-Forwarded-For`).
3. **URL Parameter Analysis**: Map out query strings and path parameters.
4. **Data Type Validation**: Determine the expected data types and any client-side or server-side restrictions (e.g., regex checks, length limits).

## Output
- Comprehensive map of input surfaces.
- Data type and constraint identification.
- Potential injection point analysis.
