---
name: HEA-097-icu-monitoring-dashboard
description: "Generated Analytical skill for Healthcare. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# ICU Monitoring Dashboard

 Field | Value |
|-------|-------|
| **Domain** | Healthcare |
| **Skill ID** | `HEA-097` |
| **Difficulty** | Beginner |
| **Exec Time** | 1–2s |
| **Skill Type** | Analytical |
| **Reasoning** | Chain-of-Thought (CoT) |
| **Output Format** | JSON |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL`
- **Intent:** Detect user intent related to *icu monitoring dashboard*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Chain-of-Thought (CoT)
- **Sub-tasks:**
  1. Parse and validate the input for *icu monitoring dashboard* context
  2. `Construct enterprise DAG strategy matching ICU Monitoring Dashboard`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Epic FHIR API` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `HL7 Parser` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Epic FHIR API output → AST & Schema normalizer → HL7 Parser input`

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
  id: HEA-097
  name: "ICU Monitoring Dashboard"
  domain: Healthcare
  version: 1.0.0
  difficulty: Beginner
  type: Analytical
  enabled: true
  pipeline:
    input_types: [ ]
    reasoning: Chain-of-Thought (CoT)
    tools:
      primary: Epic FHIR API
      secondary: HL7 Parser
    knowledge_source: Vector DB (Pinecone)
    output_format: JSON
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 2
    memory_write_back: true
    personalization_level: user
```

---


