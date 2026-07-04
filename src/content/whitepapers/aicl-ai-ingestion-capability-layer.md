---
title: "AICL: AI Ingestion & Capability Layer"
---

# AICL: AI Ingestion & Capability Layer

## A Next-Generation Website Publication Layer for AI, Agents, and Machine Readers

**Author**: Neo.K / EVEMISSLAB  
**Version**: v0.1 Draft  
**Type**: Technical White Paper / General-Purpose Markdown Paper / Agent Implementation Guidance  
**Positioning**: A converged naming framework and implementable specification for AI-native publication and execution architecture

***

## Abstract

Traditional websites are designed primarily for human browsing. In the search-engine era, websites acquired an additional SEO layer so that crawlers could index pages more effectively. In the age of AI and agents, however, website readers are no longer limited to humans and search engines. They also include large language models, AI crawlers, autonomous agents, tool-calling systems, future model-training pipelines, and machine reasoning processes.

This paper proposes **AICL: AI Ingestion & Capability Layer**. AICL is a new layer within websites and digital systems. It does not replace the human-facing UI, nor is it merely SEO, AIO, GEO, `robots.txt`, or `/llms.txt`. Its core objective is to enable AI systems not only to “see a website,” but to:

1. read it correctly;
2. understand it correctly;
3. cite it correctly;
4. trace it correctly;
5. invoke it correctly;
6. verify it correctly; and
7. continue using the knowledge and capabilities provided by the site within declared permissions, specifications, and boundaries.

AICL can therefore be understood as an intermediary layer for the AI era:

```text
Human UI Layer
Machine Ingestion Layer
Agent Capability Layer
Governance / Provenance Layer
```

The **Machine Ingestion Layer** enables AI systems to consume data. The **Agent Capability Layer** enables agents to invoke tools. The **Governance / Provenance Layer** manages source information, licensing, versions, boundaries, and auditability.

***

## 1. The Naming Problem: Why Not Simply Call It “AI-Native Publication and Execution Architecture”?

The phrase **AI-native publication and execution architecture** is accurate, but too broad. It functions more like a civilization-scale or industry-scale umbrella term encompassing:

- AI-native websites;
- AI-native publishing;
- AI-native documents;
- agent tool layers;
- machine-readable corpora;
- APIs / MCP / OpenAPI;
- copyright, licensing, and governance;
- search and recommendation;
- knowledge bases, databases, and toolchains;
- future modes by which AI autonomously operates across the web.

This phrase is suitable as an umbrella term, but not as the formal name of an initial implementable specification. Engineering requires a more precise unit.

This paper therefore proposes:

```text
AICL = AI Ingestion & Capability Layer
```

This term is narrower than “AI-native publication and execution architecture” and easier to implement.

***

## 2. Core Definition of AICL

**AICL is the data-ingestion and capability-invocation layer within a website or digital system that is specifically designed for AI systems, agents, crawlers, and machine reasoning processes.**

It exposes two primary surfaces:

```text
Ingestion Surface
Capability Surface
```

### 2.1 Ingestion Surface

The Ingestion Surface enables AI systems to read data.

It does not optimize for human UI or visual design. Instead, it prioritizes:

- plain text;
- Markdown;
- JSON;
- JSONL;
- schemas;
- EBNF;
- manifests;
- changelogs;
- canonical documents;
- provenance metadata;
- machine-readable examples.

It answers questions such as:

```text
What should the AI read?
Which document is canonical?
Which documents are historical?
Which concepts are deprecated?
Which concepts have been engineered into implementations?
Which materials may be cited?
Which materials should not be over-interpreted?
```

### 2.2 Capability Surface

The Capability Surface enables agents to invoke tools.

It does not allow AI systems to execute arbitrary operations. Instead, it exposes bounded, explicit, and traceable tool endpoints.

It answers questions such as:

```text
What can the AI do?
Which tools may be invoked?
What is the input format?
What is the output format?
What is the error format?
What are the limitations?
What are the permission boundaries?
How can invocation results be verified?
```

***

## 3. How AICL Differs from Existing Concepts

### 3.1 AICL Is Not `robots.txt`

`robots.txt` belongs to the Robots Exclusion Protocol and is used to express crawler access rules for URIs. RFC 9309 also makes clear that these rules are not an access-authorization mechanism.

Thus, `robots.txt` can answer:

```text
May this crawler access these paths?
```

But it cannot answer:

```text
How should AI understand this website?
Which materials are canonical?
Which tools may be invoked?
How should outputs be verified?
How should concept genealogy be preserved?
```

Therefore, `robots.txt` is useful and often necessary, but it is not AICL.

### 3.2 AICL Is Not Merely `/llms.txt`

`/llms.txt` is a proposal for providing website information to LLMs, especially to help them use site information at inference time. It uses Markdown to expose summaries and important links.

However, `/llms.txt` is closer to an entry index than a complete data layer.

It is suitable for telling AI:

```text
Where should you go to read?
```

AICL goes further:

```text
What may you read?
How should you read it?
How should you cite it?
How may you invoke capabilities?
What may you not do?
How should results be verified?
```

Thus, `/llms.txt` can serve as an entry point into AICL, but it is not the whole of AICL.

### 3.3 AICL Is Not AIO / GEO

AIO / GEO primarily asks:

```text
How can AI search, AI summaries, or generative search results mention me?
```

AICL asks:

```text
How can AI correctly understand me, cite me, invoke me, verify me, and continue from me?
```

AIO / GEO primarily concerns visibility.

AICL concerns structure, readability, invocability, and governability.

### 3.4 AICL Is Not Merely an API

The OpenAPI Specification defines a language-agnostic way to describe HTTP APIs so that humans and computers can understand service capabilities without reading source code, additional documentation, or network traffic.

But an API solves only the problem of **capability invocation**.

AICL also addresses:

- corpus ingestion;
- concept genealogy;
- canonical documentation;
- version governance;
- AI reading paths.

Therefore, OpenAPI can be part of AICL, but AICL is not equivalent to OpenAPI.

### 3.5 Relationship Between AICL and MCP

Model Context Protocol servers can expose capabilities including Resources, Prompts, and Tools. Resources allow a server to share contextual data such as files, database schemas, or application information. Tools allow models to interact with external systems, such as querying databases, calling APIs, or executing computations.

AICL and MCP can complement one another:

```text
AICL:
the AI-native publication layer of a website or system

MCP:
the protocol layer connecting AI applications to external data and tools
```

AICL can begin with static documents, JSON, and OpenAPI. As the system matures, the Ingestion Surface can be mapped to MCP Resources, while the Capability Surface can be mapped to MCP Tools.

***

## 4. The Four Sublayers of AICL

AICL can be decomposed into four sublayers:

```text
1. Manifest Layer
2. Corpus Layer
3. Capability Layer
4. Governance Layer
```

***

## 5. Manifest Layer: Machine Entry Layer

The Manifest Layer enables AI systems to understand the overall system quickly.

Recommended routes:

```text
/llms.txt
/ai/index.md
/ai/manifest.json
/ai/version.json
/ai/sitemap.json
```

### 5.1 `/llms.txt`

`/llms.txt` serves as an entry summary.

It should not be excessively long. It should primarily state:

- what the website is;
- the canonical domain;
- where AI-readable documents are located;
- the recommended reading order;
- where the tool catalog is located;
- the current status;
- licensing or usage boundaries.

### 5.2 `/ai/index.md`

`/ai/index.md` is the AI-facing entry page.

It does not require a UI, CSS, or animation.

It should state directly:

```text
This is the machine-readable entry point for
AI / agents / crawlers / future model ingestion.
```

### 5.3 `/ai/manifest.json`

`manifest.json` is the programmatic entry point.

It should contain structures such as:

```json
{
  "project": {},
  "canonical": {},
  "reading_order": [],
  "corpus": [],
  "specs": [],
  "tools": [],
  "licenses": [],
  "versions": []
}
```

This file is intended for automated agent reading and decision-making.

***

## 6. Corpus Layer: Machine Corpus Layer

The Corpus Layer is the core of AICL.

It organizes the knowledge of a website or project into forms that are easy for AI systems to read, cite, and trace.

Recommended routes:

```text
/ai/corpus/origin.md
/ai/corpus/current.md
/ai/corpus/design-history.md
/ai/corpus/concept-genealogy.md
/ai/corpus/engineering-notes.md
/ai/corpus/deprecated-concepts.md
/ai/corpus/accepted-concepts.md
/ai/corpus/public-summary.md
/ai/corpus/full-corpus.jsonl
```

### 6.1 `origin.md`

Explains the original concepts behind the project.

AI systems need to know that a system did not appear from nowhere, but evolved from prior ideas, problems, constraints, experiments, and failures.

### 6.2 `current.md`

Explains what the current version is.

This document should be calmer, more technical, and less promotional than the homepage.

### 6.3 `design-history.md`

Explains transitions from earlier versions to later ones.

For example:

```text
conceptual document
→ prototype
→ parser
→ transpiler
→ interpreter
→ trace layer
→ AI-readable layer
→ agent-callable layer
```

### 6.4 `concept-genealogy.md`

This is something AI systems often need, but human-facing websites rarely provide.

It explains:

```text
Which concepts are core?
Which concepts are branches?
Which concepts have been merged?
Which concepts are deprecated?
Which concepts are merely metaphors?
Which concepts have been engineered into implementations?
```

For AI systems, this can reduce incorrect inference and excessive reinterpretation.

### 6.5 `full-corpus.jsonl`

JSONL is suitable for machine ingestion.

Each line is an independent knowledge unit.

For example:

```jsonl
{"type":"definition","id":"aicl","text":"AICL is an AI ingestion and capability layer for websites and digital systems."}
{"type":"principle","id":"no-ui-required","text":"The AI-readable layer should not require human-facing UI."}
{"type":"route","id":"manifest","path":"/ai/manifest.json","purpose":"machine-readable entry manifest"}
```

***

## 7. Capability Layer: Agent Capability Layer

The Capability Layer enables agents not only to read a website, but also to invoke tools within declared boundaries.

Recommended routes:

```text
/ai/tools/catalog.json
/ai/tools/openapi.json
/ai/tools/tools.md
/ai/tools/health
/ai/tools/version
```

Where actual tools are needed, the project may add:

```text
POST /ai/tools/parse
POST /ai/tools/transpile
POST /ai/tools/validate
POST /ai/tools/trace
POST /ai/tools/summarize
POST /ai/tools/search
POST /ai/tools/quote
POST /ai/tools/compare-version
```

### 7.1 Tools Must Have Boundaries

Agent tools should not mean:

```text
Allow AI to execute arbitrary programs.
```

They should mean:

```text
Allow AI to invoke capabilities
within explicit schemas,
explicit permissions,
explicit limits,
and explicit output formats.
```

### 7.2 Every Tool Should Provide

```text
name
description
input_schema
output_schema
error_schema
examples
rate_limit
permission
version
```

### 7.3 Tool Outputs Must Be Machine-Readable

Errors should not be returned only in natural language.

They should include structures such as:

```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Input exceeded max length.",
    "recoverable": true
  }
}
```

***

## 8. Governance Layer: Governance, Provenance, and Boundaries

AI-era websites need not only data, but also boundaries.

The Governance Layer should include:

```text
/ai/governance/license.md
/ai/governance/usage-policy.md
/ai/governance/provenance.md
/ai/governance/citation-policy.md
/ai/governance/crawler-policy.md
/ai/governance/versioning-policy.md
```

This layer answers:

```text
How may AI cite the material?
How may AI summarize it?
How may capabilities be invoked?
Is training allowed?
Is commercial use allowed?
Which documents are canonical?
Which materials are reference-only?
When versions conflict, which version governs?
```

As legal and platform constraints continue to tighten, this layer will become increasingly important.

AICL does not mean simply “letting AI consume everything.” It means enabling AI to ingest and invoke within a structure that is declarable, governable, and traceable.

***

## 9. General Routing Recommendations

A website supporting AICL may adopt the following route structure:

```text
/
  Human UI

/docs/
  Human-readable documentation

/playground/
  Human interactive tools

/robots.txt
  Crawler access rules

/llms.txt
  LLM entry index

/ai/
  AI-native entry

/ai/manifest.json
  Machine-readable manifest

/ai/corpus/
  AI-readable corpus

/ai/specs/
  Formal specs and schemas

/ai/examples/
  Machine-ingestible examples

/ai/tools/
  Agent-callable capabilities

/ai/governance/
  License, provenance, citation, usage boundary

/ai/snapshots/
  Versioned snapshots
```

***

## 10. Minimum Viable AICL

The first version does not need a complete API.

A minimal version can consist entirely of static layers:

```text
/llms.txt
/ai/index.md
/ai/manifest.json
/ai/corpus/origin.md
/ai/corpus/current.md
/ai/corpus/design-history.md
/ai/specs/spec-v1.md
/ai/examples/basic.md
/ai/tools/catalog.json
/ai/governance/usage-policy.md
```

This is already sufficient to achieve the first-stage objective:

```text
Enable AI to understand the website and project
without having to parse the human-facing UI.
```

***

## 11. Intermediate AICL

An intermediate version adds:

```text
/ai/corpus/full-corpus.jsonl
/ai/specs/schema.json
/ai/specs/grammar.ebnf
/ai/tools/openapi.json
/ai/snapshots/latest.md
/ai/snapshots/latest.jsonl
```

At this stage, AICL begins to support:

- batch ingestion;
- schema validation;
- version comparison;
- tool discovery;
- automated agent reading.

***

## 12. Advanced AICL

An advanced version adds:

```text
POST /ai/tools/*
MCP Resources
MCP Tools
token / permission layer
audit log
rate limiting
citation API
version comparison API
capability negotiation
```

At this stage, AICL evolves from a **machine-readable layer** into an **agent-operable layer**.

***

## 13. Implementation Recommendations

### 13.1 Do Not Make the First Version Too Heavy

The first stage should use static documents only.

Reasons:

```text
Static documents are safer.
Static documents are easier to deploy.
Static documents are easier for crawlers to read.
Static documents are less likely to disrupt the existing website.
```

### 13.2 Organize Canonical Sources Before Organizing Tools

Recommended order:

```text
canonical docs
→ manifest
→ corpus
→ specs
→ examples
→ tool catalog
→ openapi
→ runtime tools
→ MCP adapter
```

Do not connect APIs first.

If the corpus layer is not organized, the capability layer becomes a collection of isolated endpoints.

### 13.3 Do Not Turn `/ai/` into a UI

`/ai/` does not need to be visually attractive.

It should resemble:

```text
README
manifest
schema
dataset
tool catalog
protocol docs
```

rather than a homepage.

### 13.4 Do Not Use Hidden Cloaking

Do not secretly show AI systems completely different content.

Instead, openly provide multiple entry surfaces:

```text
Human entry: /
AI entry: /ai/
LLM index: /llms.txt
Agent tools: /ai/tools/
```

### 13.5 Every Document Should Declare Status

For example:

```yaml
status: active
version: 0.1.0
canonical: true
audience: ai-agent
last_updated: 2026-06-30
```

### 13.6 Give AI Systems the History as Well

AI systems often read only the current version and then misunderstand design intent.

AICL should therefore include:

```text
origin
history
current
deprecated
accepted
future
```

This is something human-facing websites often omit, but AI reasoning frequently requires.

***

## 14. Applicable Scenarios

AICL is not limited to EML. It can also apply to:

```text
AI tool websites
open-source projects
programming languages
API platforms
academic websites
personal knowledge bases
research sites
SaaS documentation sites
agent plugin sites
dataset sites
model-card websites
legal / policy document sites
multi-version knowledge bases
AI-friendly corporate websites
```

It is especially suitable where:

```text
the content itself is complex;
concept evolution matters;
human UI cannot fully carry the knowledge;
agents need to invoke tools;
AI systems need to understand version differences;
the website wants to be understood correctly by AI,
not merely summarized by search.
```

***

## 15. Core Value of AICL

The value of AICL is not primarily increased traffic. It is improved AI understanding quality.

Traditional websites aim to:

```text
be seen by humans;
be indexed by search engines.
```

AICL aims to:

```text
be read correctly by AI;
be cited correctly by AI;
be invoked correctly by agents;
be absorbed correctly by future models;
be verified correctly by external systems.
```

These are different classes of problems.

***

## 16. Relationship to the Future Web

Future websites may gradually evolve from a two-layer structure:

```text
Human UI
SEO metadata
```

into a multilayer structure:

```text
Human UI
Search metadata
AI ingestion layer
Agent capability layer
Governance / provenance layer
```

AICL is the combined naming of the **AI ingestion layer** and the **Agent capability layer** within that emerging architecture.

It is not the entirety of future web architecture, but it can serve as a basic module of future AI-native web architecture.

***

## 17. Recommended Naming System

### 17.1 Umbrella Concept

```text
AI-native publication and execution architecture
```

This is the broadest concept and is suitable for papers, presentations, and strategic descriptions.

### 17.2 Implementation-Layer Name

```text
AICL
AI Ingestion & Capability Layer
```

This is the formal specification name recommended by this paper.

### 17.3 Sublayer Names

```text
AIL: AI Ingestion Layer

ACL: Agent Capability Layer

AGL: AI Governance Layer

AML: AI Manifest Layer
```

### 17.4 Chinese Short Form

A shorter Chinese term may be used internally, but the formal Chinese name should remain:

```text
AI 攝取與能力層
```

because abbreviated forms may be less intuitive for external audiences.

***

## 18. Recommended Standard Statements

### 18.1 One-Sentence Version

```text
AICL is the machine-readable data layer and bounded tool-invocation layer of a website for AI systems and agents.
```

### 18.2 Standard English One-Sentence Version

```text
AICL is a machine-readable ingestion and bounded capability layer for AI agents, crawlers, and model-facing systems.
```

### 18.3 Engineering Version

```text
AICL exposes canonical documents, structured corpora, schemas, manifests, examples, governance metadata, and bounded tool endpoints for AI systems.
```

### 18.4 External-Facing Version

```text
AICL helps AI systems understand, cite, and interact with a website correctly.
```

### 18.5 Agent Implementation Version

```text
Build /ai/ as a non-visual, static-first, machine-readable layer containing manifest, corpus, specs, examples, governance metadata, and future tool declarations.
```

***

## 19. Agent Implementation Instruction Template

```text
Implement AICL v0.1 for this website.

AICL means AI Ingestion & Capability Layer.

Do not redesign the human UI.
Do not create a visual interface for /ai/.
Do not implement runtime execution yet unless explicitly requested.

Create the following static routes:

/llms.txt
/ai/index.md
/ai/manifest.json
/ai/corpus/origin.md
/ai/corpus/current.md
/ai/corpus/design-history.md
/ai/corpus/concept-genealogy.md
/ai/specs/spec-v1.md
/ai/examples/basic.md
/ai/tools/catalog.json
/ai/governance/usage-policy.md
/ai/snapshots/latest.md

Requirements:
- All Markdown files must be readable as plain text.
- All JSON files must validate.
- /llms.txt must point to /ai/index.md and /ai/manifest.json.
- /ai/manifest.json must declare reading_order.
- /ai/tools/catalog.json must declare future tools even if runtime is not implemented.
- Do not use User-Agent cloaking.
- Do not expose arbitrary code execution.
- Keep the human homepage unchanged.
```

***

## 20. Conclusion

**AI-native publication and execution architecture** is a valid but overly broad umbrella concept.

For practical implementation, it should be converged into a clear engineering layer.

This paper recommends:

```text
AICL: AI Ingestion & Capability Layer
```

The role of AICL is not to replace websites, but to give websites an AI-native surface:

```text
Humans view the UI.
Search engines read metadata.
AI systems ingest the corpus.
Agents invoke capabilities.
The governance layer declares provenance, license, version, and boundaries.
```

AICL can therefore be understood as a new foundational layer in AI-era website architecture.

It is neither AIO nor GEO.

It is an engineering structure for enabling AI systems to ingest correctly and act correctly.
