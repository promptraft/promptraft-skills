---
name: DEV-028-dns-manager
description: "Generated Agentic skill for DevOps. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# DNS Manager

 Field | Value |
|-------|-------|
| **Domain** | DevOps |
| **Skill ID** | `DEV-028` |
| **Difficulty** | Expert |
| **Exec Time** | 10–30s |
| **Skill Type** | Agentic |
| **Reasoning** | Plan-and-Execute |
| **Output Format** | YAML |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *dns manager*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Plan-and-Execute
- **Sub-tasks:**
  1. Parse and validate the input for *dns manager* context
  2. `Construct enterprise DAG strategy matching DNS Manager`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `Prometheus` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Grafana` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `Prometheus output → AST & Schema normalizer → Grafana input`

### [4] Knowledge & Memory

- **Primary Source:** Static Knowledge Base
- **Context Injected At:** Stage 2 (Reasoning) + Stage 3 (Tool Execution)
- **Write-back:** Store `execution latency, failure rates, context compression metrics` after each run
- **Freshness Policy:** `Real-time execution memory`
- **Personalization:** `User-level context isolation`

### [5] Output Optimization

- **Format:** YAML
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
  id: DEV-028
  name: "DNS Manager"
  domain: DevOps
  version: 1.0.0
  difficulty: Expert
  type: Agentic
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Plan-and-Execute
    tools:
      primary: Prometheus
      secondary: Grafana
    knowledge_source: Static Knowledge Base
    output_format: YAML
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 30
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


