---
name: DEV-051-serverless-architect
description: "Generated Generative skill for DevOps. Focuses on execution and intent intelligence."
risk: unknown
source: auto-generation
date_added: "2026-03-27"
---

# Serverless Architect

 Field | Value |
|-------|-------|
| **Domain** | DevOps |
| **Skill ID** | `DEV-051` |
| **Difficulty** | Advanced |
| **Exec Time** | 5–10s |
| **Skill Type** | Generative |
| **Reasoning** | Tree-of-Thought (ToT) |
| **Output Format** | HTML Report |

### [1] Input Intelligence

- **Accepts:** `text, JSON context, workspace files, web documentation URL` *(fill in for your implementation)*
- **Intent:** Detect user intent related to *serverless architect*
- **Entities to Extract:** `Code Logic, Security Dependencies, User Configurations`
- **Validation:** `Validates JSON structure, verifies execution endpoints exist, asserts parameter typing`
- **Ambiguity Handler:** Ask clarifying question if confidence < 70%

### [2] Reasoning Engine

- **Strategy:** Tree-of-Thought (ToT)
- **Sub-tasks:**
  1. Parse and validate the input for *serverless architect* context
  2. `Construct enterprise DAG strategy matching Serverless Architect`
  3. `Evaluate sub-task dependencies using static analysis`
  4. `Render verified components mapping strictly to SkilloAI architecture`
  5. Synthesize results and prepare output
- **Domain Rules:** `- Must eliminate unnecessary abstractions
- Enforce strict typing
- Verify API boundary safety`
- **Fallback:** If reasoning fails → return partial result + ask user
- **Confidence Threshold:** 75% minimum to auto-proceed

### [3] Tool Execution

- **Primary Tool:** `kubectl` — `Executes the primary heavy-lifting specific to the domain logic`
- **Secondary Tool:** `Prometheus` — `Provides validation, fallback, or post-processing security checks`
- **Execution Order:** `Parallel (unless specifically blocked)`
- **Error Handling:** Retry × 2 → fallback tool → graceful error message
- **Data Flow:** `kubectl output → AST & Schema normalizer → Prometheus input`

### [4] Knowledge & Memory

- **Primary Source:** Web Search (Tavily)
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
  id: DEV-051
  name: "Serverless Architect"
  domain: DevOps
  version: 1.0.0
  difficulty: Advanced
  type: Generative
  enabled: true
  pipeline:
    input_types: [ ]  # fill: text, file, json, url, image
    reasoning: Tree-of-Thought (ToT)
    tools:
      primary: kubectl
      secondary: Prometheus
    knowledge_source: Web Search (Tavily)
    output_format: HTML Report
  config:
    confidence_threshold: 0.75
    max_retries: 2
    timeout_seconds: 10
    memory_write_back: true
    personalization_level: user  # user | team | global
```

---


