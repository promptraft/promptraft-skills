---
name: SEC-087-pen-test-report-generator
description: "Generated Analytical skill for Cybersecurity. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Pen Test Report Generator

 Field | Value |
|-------|-------|
| **Domain** | Cybersecurity |
| **Skill ID** | `SEC-087` |
| **Difficulty** | Advanced |
| **Exec Time** | 5–10s |
| **Skill Type** | Analytical |
| **Reasoning** | Tree-of-Thought (ToT) |
| **Output Format** | Code Block |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL`
- **Intent:** Detect user intent related to *pen test report generator*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Tree-of-Thought (ToT)
- **Sub-tasks:**
  1. Parse and validate the input for *pen test report generator* context
  2. `Construct enterprise DAG strategy matching Pen Test Report Generator`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Tenable API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Qualys API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Tenable API output → AST & Schema normalizer → Qualys API input`

### [4] Knowledge & Memory

- **Primary Source:** Web Search (Tavily)
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** Code Block
- **Quality Checks:** `Strict Schema JSON validation + Halucination bounds`
- **Tone:** `Technical & Direct`
- **Follow-up Suggestions:**
  - `Deploy workflow to execution environment`
  - `Deploy workflow to execution environment`
  - `Deploy workflow to execution environment`
- **Confidence Score:** Append `confidence: 96%` to output

### ⚙️ YAML Config

```yaml
skill:
  id: SEC-087
  name: "Pen Test Report Generator"
  domain: Cybersecurity
  version: 1.0.0
  difficulty: Advanced
  type: Analytical
  enabled: true
  pipeline:
    input_types: [ ]
    reasoning: Tree-of-Thought (ToT)
    tools:
      primary: Tenable API
      secondary: Qualys API
    knowledge_source: Web Search (Tavily)
    output_format: Code Block
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 10
    memory_write_back: true
    personalization_level: user
```

---


