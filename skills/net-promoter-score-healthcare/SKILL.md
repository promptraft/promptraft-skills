---
name: HEA-091-net-promoter-score-healthcare
description: "Generated Generative skill for Healthcare. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Net Promoter Score Healthcare

 Field | Value |
|-------|-------|
| **Domain** | Healthcare |
| **Skill ID** | `HEA-091` |
| **Difficulty** | Advanced |
| **Exec Time** | 5–10s |
| **Skill Type** | Generative |
| **Reasoning** | Chain-of-Thought (CoT) |
| **Output Format** | HTML Report |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *net promoter score healthcare*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Chain-of-Thought (CoT)
- **Sub-tasks:**
  1. Parse and validate the input for *net promoter score healthcare* context
  2. `Construct enterprise DAG strategy matching Net Promoter Score Healthcare`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `AWS HealthLake` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Nuance Dragon API` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `AWS HealthLake output → AST & Schema normalizer → Nuance Dragon API input`

### [4] Knowledge & Memory

- **Primary Source:** Vector DB (Pinecone)
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** HTML Report
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
  id: HEA-091
  name: "Net Promoter Score Healthcare"
  domain: Healthcare
  version: 1.0.0
  difficulty: Advanced
  type: Generative
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Chain-of-Thought (CoT)
    tools:
      primary: AWS HealthLake
      secondary: Nuance Dragon API
    knowledge_source: Vector DB (Pinecone)
    output_format: HTML Report
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 10
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


