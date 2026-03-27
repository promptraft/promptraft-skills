---
name: FIN-017-accounts-receivable-manager
description: "Generated Analytical skill for Finance. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Accounts Receivable Manager

 Field | Value |
|-------|-------|
| **Domain** | Finance |
| **Skill ID** | `FIN-017` |
| **Difficulty** | Beginner |
| **Exec Time** | 1–2s |
| **Skill Type** | Analytical |
| **Reasoning** | Reflexion |
| **Output Format** | JSON |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *accounts receivable manager*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Reflexion
- **Sub-tasks:**
  1. Parse and validate the input for *accounts receivable manager* context
  2. `Construct enterprise DAG strategy matching Accounts Receivable Manager`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Bloomberg API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Plaid API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Bloomberg API output → AST & Schema normalizer → Plaid API input`

### [4] Knowledge & Memory

- **Primary Source:** User History (Redis)
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** JSON
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
  id: FIN-017
  name: "Accounts Receivable Manager"
  domain: Finance
  version: 1.0.0
  difficulty: Beginner
  type: Analytical
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Reflexion
    tools:
      primary: Bloomberg API
      secondary: Plaid API
    knowledge_source: User History (Redis)
    output_format: JSON
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 2
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


