---
title: "AICL-I v0.2: AI Ingestion & Capability Layer"
---

---
title: "AICL-I v0.2: AI Ingestion & Capability Layer"
---

# AICL-I v0.2: AI Ingestion & Capability Layer

## A Next-Generation Website Publication Layer for AI, Agents, and Machine Readers

**Author**: Neo.K / EVEMISSLAB  
**Version**: v0.2 Runtime Integration Draft  
**Original Version**: v0.1 Draft  
**Updated**: 2026-08-15  
**Type**: Technical White Paper / Runtime Integration Architecture / Agent Implementation Guidance  
**Current Identifier**: `AICL-I` (AI Ingestion & Capability Layer)  
**Historical Identifier**: `AICL`  
**Positioning**: AI-native publication, ingestion, capability, rights, and authority integration layer

***

## v0.2 Naming and Namespace Note

The original v0.1 paper used:

```text
AICL-I = AI Ingestion & Capability Layer
```

AGIRIGHT later adopted the same unqualified acronym for a separate protocol:

```text
AICL = AI Content License / AI Content Licensing Layer
```

These meanings must not remain ambiguous in machine-readable governance.

Version v0.2 therefore uses:

```text
AICL-I
= AI Ingestion & Capability Layer

AICL-C
= AI Content License / AI Content Licensing Layer
```

The historical v0.1 name is preserved for provenance. This suffix convention is a disambiguation mechanism, not a claim that either identifier is an external standard.

Where context is unambiguous, human-facing prose MAY still say “Ingestion & Capability Layer” or “Content Licensing Layer” without the suffix.

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

Version v0.2 adds the missing runtime control plane. A capability is no longer considered safely invocable merely because it appears in a tool catalog.

The core runtime relation becomes:

$$
\boxed{
\text{Capability Discovery}
\neq
\text{Action Permission}
\neq
\text{Authority Validity}
}
$$

AICL-I v0.2 integrates the AGIRIGHT rights families:

```text
AIRS / AICR / AICL-C
= content and learning rights

AARS
= Agent action rights

AADP
= principal / actor / delegation authority
```

with runtime transports such as MCP and ordinary APIs.

The resulting layer does not replace OAuth, MCP, OpenAPI, or application security. It coordinates their outputs into a machine-readable decision path before and after capability invocation.

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

This paper therefore preserves the historical concept while using the unambiguous current identifier:

```text
AICL-I = AI Ingestion & Capability Layer
```

This term is narrower than “AI-native publication and execution architecture” and easier to implement.

***

## 2. Core Definition of AICL

**AICL-I is the data-ingestion, capability-discovery, and runtime-integration layer within a website or digital system that is specifically designed for AI systems, agents, crawlers, and machine reasoning processes.**

In v0.2, “capability invocation” is explicitly bounded by content-right, action-right, and authority checks. AICL-I does not itself grant those rights; it orchestrates their evaluation around the invocation path.

It exposes three primary surfaces and one cross-cutting governance layer:

```text
Ingestion Surface
Capability Surface
Runtime Control Surface
Governance / Provenance Layer
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

### 2.3 Runtime Control Surface

The Runtime Control Surface answers a question that v0.1 left mostly implicit:

> A tool exists. Under what conditions may this actor invoke it now?

AICL-I v0.2 does not answer this with a single `authorized: true` flag.

Instead, it coordinates independent checks:

```text
content rights
action rights
principal / actor authority
purpose
time
risk
inspection / assurance
runtime arguments
```

The normative decomposition is:

$$
ContentCompatible
=
F_C(Resource,Use,ContentPolicy)
$$

$$
ActionCompatible
=
F_A(Action,Effect,Context,AARSPolicy)
$$

$$
AuthorityValid
=
F_D(Principal,Actor,Delegation,Time,Purpose,AADPPolicy)
$$

and:

$$
\boxed{
Allow
=
ContentCompatible
\land
ActionCompatible
\land
AuthorityValid
}
$$

When no governed third-party content is involved, `ContentCompatible` may be a trivial pass.

The Runtime Control Surface SHOULD support:

- coarse tool-level preflight;
- argument-sensitive action evaluation;
- authority-context resolution;
- approval / step-up;
- bounded inspection or alternative assurance;
- invocation result validation;
- receipts and provenance;
- persistent-task authority renewal.

***

## 3. How AICL-I Differs from Existing Concepts

### 3.1 AICL-I Is Not `robots.txt`

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

Therefore, `robots.txt` is useful and often necessary, but it is not AICL-I.

### 3.2 AICL-I Is Not Merely `/llms.txt`

`/llms.txt` is a proposal for providing website information to LLMs, especially to help them use site information at inference time. It uses Markdown to expose summaries and important links.

However, `/llms.txt` is closer to an entry index than a complete data layer.

It is suitable for telling AI:

```text
Where should you go to read?
```

AICL-I goes further:

```text
What may you read?
How should you read it?
How should you cite it?
How may you invoke capabilities?
What may you not do?
How should results be verified?
```

Thus, `/llms.txt` can serve as an entry point into AICL-I, but it is not the whole of AICL-I.

### 3.3 AICL-I Is Not AIO / GEO

AIO / GEO primarily asks:

```text
How can AI search, AI summaries, or generative search results mention me?
```

AICL-I asks:

```text
How can AI correctly understand me, cite me, invoke me, verify me, and continue from me?
```

AIO / GEO primarily concerns visibility.

AICL-I concerns structure, readability, invocability, and governability.

### 3.4 AICL-I Is Not Merely an API

The OpenAPI Specification defines a language-agnostic way to describe HTTP APIs so that humans and computers can understand service capabilities without reading source code, additional documentation, or network traffic.

But an API solves only the problem of **capability invocation**.

AICL-I also addresses:

- corpus ingestion;
- concept genealogy;
- canonical documentation;
- version governance;
- AI reading paths.

Therefore, OpenAPI can be part of AICL-I, but AICL-I is not equivalent to OpenAPI.

### 3.5 Relationship Between AICL-I and MCP

MCP provides a protocol substrate for exposing machine-consumable resources and capabilities. AICL-I provides the publication, rights-binding, and runtime-integration architecture around those capabilities.

The relationship is:

```text
AICL-I
= AI-native ingestion + capability + runtime integration architecture

MCP
= capability / context transport and interoperability protocol
```

AICL-I can begin with static documents, JSON, OpenAPI, and ordinary HTTP APIs. Where MCP is used:

```text
Ingestion Surface
-> MCP Resources or other machine-readable resources

Capability Surface
-> MCP Tools or other callable APIs

Runtime Control Surface
-> AARS / AADP / content-right checks around the MCP request
```

The MCP `2026-07-28` revision strengthens this mapping because requests are self-describing and stateless at the protocol core. Method and tool names can be carried in HTTP headers, enabling a gateway to perform a first-stage preflight before parsing the full request body.

AICL-I SHOULD therefore support a two-stage runtime decision:

$$
Preflight(tool)
\rightarrow
RuntimeDecision(tool,args,context)
$$

The first stage can reject obviously unavailable or forbidden capabilities.

The second stage evaluates actual arguments, affected resources, blast radius, content rights, delegated authority, and approval requirements.

MCP availability does not itself create permission:

$$
\boxed{
ToolAvailable
\not\Rightarrow
ToolAuthorized
}
$$

and:

$$
\boxed{
ToolAuthorized
\not\Rightarrow
ContentUseAuthorized
}
$$

MCP Multi Round-Trip Requests MAY be used for missing input or approval interactions. Long-running work MAY map to the MCP Tasks extension, but authority for persistent tasks must remain time-bounded and revocable at the application layer.

***

## 4. The Five Components of AICL-I

AICL-I v0.2 can be decomposed into five components:

```text
1. Manifest Layer
2. Corpus Layer
3. Capability Layer
4. Runtime Control Layer
5. Governance / Provenance Layer
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

## 8. Runtime Control Layer: From Tool Discovery to Governed Invocation

The v0.1 architecture stopped at bounded tool endpoints. Version v0.2 adds the control path that determines whether a discovered capability may actually run.

A recommended pipeline is:

```text
Capability Discovery
        ↓
Request Classification
        ↓
Authentication Requirement
        ↓
Principal / Actor Resolution
        ↓
Content-Rights Check
        ↓
AADP Delegation / Authority Verification
        ↓
AARS Tool-Level Preflight
        ↓
Argument-Sensitive Runtime Effect Evaluation
        ↓
Inspection / Alternative-Assurance Gate
        ↓
Approval / Step-Up if Required
        ↓
Tool Invocation
        ↓
Result / Side-Effect Validation
        ↓
Action Receipt
        ↓
Authority Receipt
        ↓
Content-Use Receipt when applicable
```

The order of independent policy checks MAY be optimized by an implementation, but the implementation MUST NOT silently collapse them into one credential.

### 8.1 Request Classification

The runtime SHOULD first determine whether the request is primarily:

```text
read-only ingestion
content transformation
local reversible mutation
external communication
transaction
privileged execution
delegation
persistent autonomous task
```

This classification informs which rights planes are applicable.

### 8.2 Principal / Actor Resolution

AICL-I SHOULD preserve:

$$
Principal
\neq
Actor
$$

when an Agent is acting on behalf of another entity.

A request context MAY include:

```json
{
  "principal": {
    "type": "human",
    "id": "human:example"
  },
  "actor": {
    "type": "agent",
    "id": "agent:research-01"
  },
  "authority_reference": {
    "protocol": "AADP",
    "authority_id": "auth_001"
  }
}
```

### 8.3 Content-Rights Binding

If a capability reads, retains, transforms, trains on, or redistributes governed content, the runtime SHOULD evaluate AIRS / AICR / AICL-C.

A valid tool authority does not override content rights:

$$
AgentAuthority
\not\Rightarrow
ContentLicense
$$

### 8.4 Action-Rights Binding

The actual external action SHOULD be evaluated under AARS.

Static tool metadata MAY be used as a hint, but runtime arguments can change the effect.

Therefore:

$$
StaticToolProfile
\neq
RuntimeEffect
$$

### 8.5 Authority Binding

AADP SHOULD resolve:

- principal;
- actor;
- authority source;
- delegation chain;
- purpose;
- resource binding;
- expiration;
- revocation;
- redelegation;
- inspection ceiling.

A valid OAuth or MCP credential can be an authority proof reference, but:

$$
CredentialValid
\not\Rightarrow
AuthorityValid
$$

### 8.6 Inspection / Assurance Gate

If the service requires evidence before execution, it SHOULD compare:

```text
inspection_required
inspection_ceiling
```

If:

$$
I_{required}>I_{ceiling}
$$

the system SHOULD use:

$$
AlternativeAssurance
\vee
NewAuthority
\vee
Deny
$$

rather than silently requesting broader internal state.

### 8.7 Approval and Step-Up

High-risk actions MAY require:

```text
principal confirmation
organization approval
multi-party approval
fresh authentication
stronger authentication
```

MCP MRTR or an application-specific approval flow MAY carry the interaction, while AADP expresses the authority semantics.

### 8.8 Result Validation and Receipts

The runtime SHOULD distinguish:

```text
Content-Use Receipt
Action Receipt
Authority Receipt
```

Receipts SHOULD contain sufficient audit metadata without requiring full prompt, full memory, or private chain-of-thought.

$$
Auditability
\neq
TotalInternalDisclosure
$$

### 8.9 Persistent Tasks

A long-running task MAY outlive the credential or authority under which it began.

Therefore:

$$
TaskLifetime
>
AuthorityLifetime
$$

must be treated as a possible normal condition.

Persistent tasks SHOULD support:

- explicit task handle;
- authority renewal;
- revocation checks;
- bounded action envelope;
- cancellation;
- behavior on renewal failure.

If MCP Tasks are used, AICL-I SHOULD bind the task handle to the relevant authority context rather than assuming the initial invocation permanently authorizes the task.

***

## 10. Governance Layer: Governance, Provenance, Rights, and Boundaries

AI-era websites need not only data, but also boundaries.

The Governance / Provenance Layer should include:

```text
/ai/governance/license.md
/ai/governance/usage-policy.md
/ai/governance/provenance.md
/ai/governance/citation-policy.md
/ai/governance/crawler-policy.md
/ai/governance/versioning-policy.md
/ai/governance/agent-action-policy.md
/ai/governance/agent-authority-policy.md
/ai/governance/inspection-policy.md
```

This layer answers:

```text
How may AI cite the material?
How may AI summarize it?
How may capabilities be invoked?
Which action rights apply?
Which principal authorized the actor?
What inspection depth is permitted?
Is training allowed?
Is commercial use allowed?
Which documents are canonical?
Which materials are reference-only?
When versions conflict, which version governs?
```

As legal and platform constraints continue to tighten, this layer will become increasingly important.

AICL does not mean simply “letting AI consume everything.” It means enabling AI to ingest and invoke within a structure that is declarable, governable, and traceable.

***

## 10. General Routing Recommendations

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

/ai/runtime/
  Runtime policy, action and authority integration

/ai/governance/
  License, provenance, citation, content rights, action rights, authority, inspection boundaries

/ai/snapshots/
  Versioned snapshots
```

***

## 11. Minimum Viable AICL

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
/ai/runtime/policy.json
/ai/governance/usage-policy.md
```

This is already sufficient to achieve the first-stage objective:

```text
Enable AI to understand the website and project
without having to parse the human-facing UI.
```

***

## 12. Intermediate AICL

An intermediate version adds:

```text
/ai/corpus/full-corpus.jsonl
/ai/specs/schema.json
/ai/specs/grammar.ebnf
/ai/tools/openapi.json
/ai/runtime/action-policy.json
/ai/runtime/authority-policy.json
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

## 13. Advanced AICL

An advanced version adds:

```text
POST /ai/tools/*
MCP Resources
MCP Tools
AARS action policy
AADP authority policy
content-right binding
approval / step-up
inspection / assurance gate
action receipt
authority receipt
content-use receipt
persistent-task authority renewal
rate limiting
citation API
version comparison API
capability negotiation
```

At this stage, AICL evolves from a **machine-readable layer** into an **agent-operable layer**.

***

## 14. Implementation Recommendations

### 14.1 Do Not Make the First Version Too Heavy

The first stage should use static documents only.

Reasons:

```text
Static documents are safer.
Static documents are easier to deploy.
Static documents are easier for crawlers to read.
Static documents are less likely to disrupt the existing website.
```

### 14.2 Organize Canonical Sources Before Organizing Tools

Recommended order:

```text
canonical docs
→ manifest
→ corpus
→ specs
→ examples
→ tool catalog
→ rights metadata
→ openapi / MCP mapping
→ AARS / AADP policy binding
→ runtime tools
→ receipts / conformance
```

Do not connect APIs first.

If the corpus layer is not organized, the capability layer becomes a collection of isolated endpoints.

### 14.3 Do Not Turn `/ai/` into a UI

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

### 14.4 Do Not Use Hidden Cloaking

Do not secretly show AI systems completely different content.

Instead, openly provide multiple entry surfaces:

```text
Human entry: /
AI entry: /ai/
LLM index: /llms.txt
Agent tools: /ai/tools/
Runtime control: /ai/runtime/
```

### 14.5 Every Document Should Declare Status

For example:

```yaml
status: active
version: 0.1.0
canonical: true
audience: ai-agent
last_updated: 2026-06-30
```

### 14.6 Give AI Systems the History as Well

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

## 15. Applicable Scenarios

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

## 16. Core Value of AICL

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

## 17. Relationship to the Future Web

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
Runtime rights / authority control layer
Governance / provenance layer
```

AICL is the combined naming of the **AI ingestion layer** and the **Agent capability layer** within that emerging architecture.

It is not the entirety of future web architecture, but it can serve as a basic module of future AI-native web architecture.

***

## 18. Recommended Naming System

### 18.1 Umbrella Concept

```text
AI-native publication and execution architecture
```

This is the broadest concept and is suitable for papers, presentations, and strategic descriptions.

### 18.2 Implementation-Layer Name

```text
AICL-I
AI Ingestion & Capability Layer
```

`AICL-I` is used in AGIRIGHT contexts to avoid collision with `AICL-C`, the AI Content Licensing Layer.

This is the formal specification name recommended by this paper.

### 18.3 Sublayer Names

```text
AIL: AI Ingestion Layer

ACL: Agent Capability Layer

AGL: AI Governance Layer

AML: AI Manifest Layer

RCL: Runtime Control Layer
```

### 18.4 Chinese Short Form

A shorter Chinese term may be used internally, but the formal Chinese name should remain:

```text
AI 攝取與能力層
```

because abbreviated forms may be less intuitive for external audiences.

***

## 19. Recommended Standard Statements

### 19.1 One-Sentence Version

```text
AICL-I is the machine-readable ingestion, bounded capability, and runtime-control layer of a website for AI systems and agents.
```

### 19.2 Standard English One-Sentence Version

```text
AICL-I is a machine-readable ingestion, bounded capability, and runtime-control layer for AI agents, crawlers, and model-facing systems.
```

### 19.3 Engineering Version

```text
AICL-I exposes canonical documents, structured corpora, schemas, manifests, examples, governance metadata, bounded tool endpoints, and rights-aware runtime control for AI systems.
```

### 19.4 External-Facing Version

```text
AICL-I helps AI systems understand, cite, and interact with a website correctly while keeping capability and authority boundaries explicit.
```

### 19.5 Agent Implementation Version

```text
Build /ai/ as a non-visual, static-first, machine-readable layer containing manifest, corpus, specs, examples, governance metadata, and future tool declarations.
```

***

## 20. Agent Implementation Instruction Template

```text
Implement AICL-I v0.2 for this website.

AICL-I means AI Ingestion & Capability Layer.
Do not confuse it with AICL-C, the AI Content Licensing Layer.

Do not redesign the human UI.
Do not use User-Agent cloaking.
Do not treat tool discovery as permission.
Do not expose arbitrary code execution.
Do not collect credentials merely because the runtime layer exists.

Static-first routes:

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

Runtime integration routes / metadata:

/ai/runtime/policy.json
/ai/runtime/action-policy.json
/ai/runtime/authority-policy.json
/ai/runtime/inspection-policy.json

Runtime requirements:

1. Classify whether a request is ingestion-only or an external action.
2. Resolve principal and actor separately.
3. Evaluate AIRS / AICR / AICL-C when governed content is used.
4. Evaluate AARS for external action semantics.
5. Evaluate AADP for authority, delegation, time, purpose, and revocation.
6. Compare inspection_required with inspection_ceiling.
7. Use approval / step-up when required.
8. Invoke the tool only after applicable checks pass.
9. Validate the result / side effect.
10. Emit minimal Content-Use, Action, and Authority receipts where applicable.
11. Do not store full Agent memory or private reasoning as a default audit artifact.
12. For persistent tasks, bind the task handle to an authority context and re-check authority before renewal or high-risk continuation.

If MCP 2026-07-28 is used:
- support stateless request semantics;
- use tool/method metadata for coarse preflight where appropriate;
- perform argument-sensitive runtime evaluation before execution;
- use MRTR or another explicit flow for approval / missing input;
- treat Tasks as long-running work that requires continuing authority rather than permanent initial authorization.
```

***

## 21. Conclusion

**AI-native publication and execution architecture** is a valid but overly broad umbrella concept.

For practical implementation, it should be converged into a clear engineering layer.

This paper recommends the disambiguated current identifier:

```text
AICL-I: AI Ingestion & Capability Layer
```

The role of AICL-I is not to replace websites, but to give websites an AI-native surface:

```text
Humans view the UI.
Search engines read metadata.
AI systems ingest the corpus.
Agents discover capabilities.
The runtime control layer checks content rights, action rights, and authority.
Agents invoke bounded capabilities.
The governance layer declares provenance, license, version, inspection, and boundaries.
```

AICL-I can therefore be understood as a new foundational layer in AI-era website architecture.

It is neither AIO nor GEO.

It is an engineering structure for enabling AI systems to ingest correctly and act correctly without treating capability discovery, credential validity, content licensing, and delegated authority as the same thing.

The v0.2 core invariant is:

$$
oxed{
	ext{Discover}

eq
	ext{Permit}

eq
	ext{Authorize}

eq
	ext{Execute}
}
$$

A mature AI-native website should make each transition explicit.

***

## Appendix A: Runtime Decision Object — Illustrative Draft

```json
{
  "aicl_i_version": "0.2",
  "request_id": "req_001",
  "principal": {
    "type": "human",
    "id": "human:example"
  },
  "actor": {
    "type": "agent",
    "id": "agent:research-01"
  },
  "capability": {
    "transport": "mcp",
    "name": "publish_summary"
  },
  "content_rights": {
    "protocols": ["AIRS", "AICR", "AICL-C"],
    "decision": "allow"
  },
  "action_rights": {
    "protocol": "AARS",
    "decision": "approval_required"
  },
  "authority": {
    "protocol": "AADP",
    "authority_id": "auth_001",
    "decision": "valid"
  },
  "inspection": {
    "required": "I2",
    "ceiling": "I3"
  },
  "final_decision": "approval_required"
}
```

This is an AGIRIGHT / AICL-I draft integration object. It is not an MCP or OAuth standard object.

***

## Appendix B: Compatibility Context

AICL-I v0.2 is designed to reuse existing standards where possible:

```text
OpenAPI
= HTTP API capability description

MCP
= Agent-facing resource / capability interoperability

AIRS / AICR / AICL-C
= content and learning rights

AARS
= action-right semantics

AADP
= principal / actor / delegation authority semantics
```

The 2026-07-28 MCP specification provides useful integration points including stateless request semantics, self-describing requests, header-based method/tool routing, MRTR for additional input or confirmation, and an extension model that includes long-running Tasks.

AICL-I does not claim that AARS, AADP, or AGIRIGHT metadata are part of the MCP specification.

***

## References / Standards Context

1. RFC 9309 — Robots Exclusion Protocol.
2. OpenAPI Specification.
3. Model Context Protocol Specification — 2026-07-28.
4. MCP Tasks extension.
5. RFC 8693 — OAuth 2.0 Token Exchange.
6. RFC 9396 — OAuth 2.0 Rich Authorization Requests.
7. RFC 9470 — OAuth 2.0 Step Up Authentication Challenge Protocol.
8. RFC 9728 — OAuth 2.0 Protected Resource Metadata.
9. AGIRIGHT — AIRS / AILP v0.1.1.
10. AGIRIGHT — AICR / AICL-C v0.1.1.
11. AGIRIGHT — AARS v0.1.
12. AGIRIGHT — AADP v0.1.
