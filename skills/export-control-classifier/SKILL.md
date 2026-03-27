---
name: LEG-101-export-control-classifier
description: "Generated Generative skill for Legal. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Export Control Classifier

 Field | Value |
|-------|-------|
| **Domain** | Legal |
| **Skill ID** | `LEG-101` |
| **Difficulty** | Beginner |
| **Exec Time** | 1–2s |
| **Skill Type** | Generative |
| **Reasoning** | Reflexion |
| **Output Format** | CSV |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL`
- **Intent:** Detect user intent related to *export control classifier*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Reflexion
- **Sub-tasks:**
  1. Parse and validate the input for *export control classifier* context
  2. `Construct enterprise DAG strategy matching Export Control Classifier`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `ContractSafe API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Ironclad API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `ContractSafe API output → AST & Schema normalizer → Ironclad API input`

### [4] Knowledge & Memory

- **Primary Source:** User History (Redis)
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** CSV
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
  id: LEG-101
  name: "Export Control Classifier"
  domain: Legal
  version: 1.0.0
  difficulty: Beginner
  type: Generative
  enabled: true
  pipeline:
    input_types: [ ]
    reasoning: Reflexion
    tools:
      primary: ContractSafe API
      secondary: Ironclad API
    knowledge_source: User History (Redis)
    output_format: CSV
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 2
    memory_write_back: true
    personalization_level: user
```

---


