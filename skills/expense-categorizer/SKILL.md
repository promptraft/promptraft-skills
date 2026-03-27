---
name: FIN-015-expense-categorizer
description: "Generated Transformative skill for Finance. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Expense Categorizer

 Field | Value |
|-------|-------|
| **Domain** | Finance |
| **Skill ID** | `FIN-015` |
| **Difficulty** | Advanced |
| **Exec Time** | 5–10s |
| **Skill Type** | Transformative |
| **Reasoning** | Tree-of-Thought (ToT) |
| **Output Format** | Code Block |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *expense categorizer*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Tree-of-Thought (ToT)
- **Sub-tasks:**
  1. Parse and validate the input for *expense categorizer* context
  2. `Construct enterprise DAG strategy matching Expense Categorizer`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Yahoo Finance API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `CoinGecko API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Yahoo Finance API output → AST & Schema normalizer → CoinGecko API input`

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
  id: FIN-015
  name: "Expense Categorizer"
  domain: Finance
  version: 1.0.0
  difficulty: Advanced
  type: Transformative
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Tree-of-Thought (ToT)
    tools:
      primary: Yahoo Finance API
      secondary: CoinGecko API
    knowledge_source: Web Search (Tavily)
    output_format: Code Block
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 10
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


