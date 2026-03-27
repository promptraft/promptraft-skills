---
name: DAT-025-survival-analyzer
description: "Generated Transformative skill for Data Science. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Survival Analyzer

 Field | Value |
|-------|-------|
| **Domain** | Data Science |
| **Skill ID** | `DAT-025` |
| **Difficulty** | Beginner |
| **Exec Time** | 1–2s |
| **Skill Type** | Transformative |
| **Reasoning** | Chain-of-Thought (CoT) |
| **Output Format** | JSON |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *survival analyzer*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Chain-of-Thought (CoT)
- **Sub-tasks:**
  1. Parse and validate the input for *survival analyzer* context
  2. `Construct enterprise DAG strategy matching Survival Analyzer`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Pandas` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Scikit-learn` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Pandas output → AST & Schema normalizer → Scikit-learn input`

### [4] Knowledge & Memory

- **Primary Source:** Vector DB (Pinecone)
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
  id: DAT-025
  name: "Survival Analyzer"
  domain: Data Science
  version: 1.0.0
  difficulty: Beginner
  type: Transformative
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Chain-of-Thought (CoT)
    tools:
      primary: Pandas
      secondary: Scikit-learn
    knowledge_source: Vector DB (Pinecone)
    output_format: JSON
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 2
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


