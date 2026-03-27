---
name: EDU-042-academic-integrity-policy
description: "Generated Analytical skill for Education. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Academic Integrity Policy

 Field | Value |
|-------|-------|
| **Domain** | Education |
| **Skill ID** | `EDU-042` |
| **Difficulty** | Intermediate |
| **Exec Time** | 2–5s |
| **Skill Type** | Analytical |
| **Reasoning** | Self-consistency |
| **Output Format** | Markdown |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *academic integrity policy*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Self-consistency
- **Sub-tasks:**
  1. Parse and validate the input for *academic integrity policy* context
  2. `Construct enterprise DAG strategy matching Academic Integrity Policy`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Canvas LMS API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Khan Academy API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Canvas LMS API output → AST & Schema normalizer → Khan Academy API input`

### [4] Knowledge & Memory

- **Primary Source:** SQL Database
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** Markdown
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
  id: EDU-042
  name: "Academic Integrity Policy"
  domain: Education
  version: 1.0.0
  difficulty: Intermediate
  type: Analytical
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Self-consistency
    tools:
      primary: Canvas LMS API
      secondary: Khan Academy API
    knowledge_source: SQL Database
    output_format: Markdown
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 5
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


