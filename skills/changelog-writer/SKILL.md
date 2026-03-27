---
name: MAR-062-changelog-writer
description: "Generated Analytical skill for Marketing. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Changelog Writer

 Field | Value |
|-------|-------|
| **Domain** | Marketing |
| **Skill ID** | `MAR-062` |
| **Difficulty** | Intermediate |
| **Exec Time** | 2–5s |
| **Skill Type** | Analytical |
| **Reasoning** | ReAct (Reason + Act) |
| **Output Format** | Plain Text |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *changelog writer*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** ReAct (Reason + Act)
- **Sub-tasks:**
  1. Parse and validate the input for *changelog writer* context
  2. `Construct enterprise DAG strategy matching Changelog Writer`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Mailchimp API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `SEMrush API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Mailchimp API output → AST & Schema normalizer → SEMrush API input`

### [4] Knowledge & Memory

- **Primary Source:** RAG (LlamaIndex)
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** Plain Text
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
  id: MAR-062
  name: "Changelog Writer"
  domain: Marketing
  version: 1.0.0
  difficulty: Intermediate
  type: Analytical
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: ReAct (Reason + Act)
    tools:
      primary: Mailchimp API
      secondary: SEMrush API
    knowledge_source: RAG (LlamaIndex)
    output_format: Plain Text
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 5
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


