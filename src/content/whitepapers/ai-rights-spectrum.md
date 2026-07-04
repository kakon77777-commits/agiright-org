---
title: "AI Rights Spectrum: From robots.txt to an AI Learning Permission Protocol"
---

# AI Rights Spectrum: From robots.txt to an AI Learning Permission Protocol

## AI Rights Spectrum and AI Learning Permission Protocol: Toward a Machine-Readable Contract Layer for AI Learning

**Author**: Neo.K / EVEMISSLAB\
**Version**: v0.1 Draft\
**Type**: General Markdown Paper / Technical White Paper / Protocol Draft\
**Date**: 2026-06-30
**Suggested Abbreviations**: AIRS / AILP\
**Chinese Names**: AI 權利光譜 / AI 學習許可協議\
**Keywords**: AI learning permission, AI rights spectrum, robots.txt, llms.txt, TDM, AI crawler, AI training license, creator compensation, machine-readable licensing, AI base space, knowledge governance

***

## Abstract

The machine access rules of the traditional web have largely revolved around `robots.txt`. It can express whether a certain class of crawler is allowed to access certain paths, but it cannot express the real questions that the AI era now forces us to confront: how AI may read, cite, vectorize, summarize, retain, train on, fine-tune from, distill from, attribute, compensate, or commercially use a given work; nor can it express whether creators and rights holders allow their works to be learned by different types of AI systems at different depths.

This paper proposes **AIRS: AI Rights Spectrum** and **AILP: AI Learning Permission Protocol**. AIRS is a conceptual framework: it argues that AI rights over content should not be reduced to a binary “allowed / disallowed” switch, but should instead be expressed as a use-specific, depth-aware, proportional, licensable, and traceable spectrum of rights. AILP is the implementable protocol layer: it allows websites, authors, publishers, research institutions, databases, open-source projects, and other rights holders to explicitly declare how AI systems may learn from their content.

This paper argues that the current “cleaning” model is not a long-term answer. Cleaning may reduce the short-term legal risk of AI companies, but it also produces a three-way loss: authors receive no compensation, AI base spaces become structurally incomplete, and users receive weaker systems with invisible knowledge gaps. This continues the critique developed in the earlier paper _In the Name of Cleaning: The Structural Injustice of AI Knowledge Restrictions_, where “removal instead of compensation” was identified as the central problem.

Furthermore, from the perspective of the _Base Space and Manager_ framework, AI learning is not merely the copying of text. It is the transformation of external knowledge into routable structures within a model’s base space. The completeness of the base space and the routing quality of the manager jointly affect an AI system’s ability to reason, express, and process knowledge in depth. Therefore, AI learning permission should not only ask “Can this be crawled?” but also “Can this enter the base space, at what depth, with what retention rights, under what commercial conditions, and with what output restrictions?”

The core thesis of this paper is: **the AI era requires a machine-readable rights layer more detailed than robots.txt.** This layer should not serve only AI companies, nor only creators. It should establish a clearer rule space in which creators, rights holders, AI systems, users, and platforms can interact.

***

## 1. Background: The Historical Power and Present Insufficiency of robots.txt

### 1.1 The Nature of robots.txt

`robots.txt` originates from the Robots Exclusion Protocol. Its core function is to allow website owners to tell crawlers which URIs may or may not be accessed. RFC 9309 also makes clear that these rules are not an access authorization mechanism, but a set of URI access rules that crawlers are expected to respect.

This means that the semantic core of `robots.txt` is:

```text
May you access these paths?
```

It does not answer:

```text
How may you use this content?
For which AI tasks may this content be used?
To what depth may this content be learned?
Is attribution, licensing, or compensation required?
```

### 1.2 Access Is Not Learning in the AI Era

Traditional search engine crawlers mainly fetch pages in order to build indexes and redirect users back to original websites. AI crawlers and AI systems operate in a more complex way. Content may be used for:

```text
search indexing
summary generation
RAG retrieval
vectorization
embedding storage
model pretraining
model fine-tuning
model distillation
synthetic data generation
benchmark evaluation
long-term memory
commercial product responses
autonomous agent workflows
```

These actions should not be compressed into a single question: “Is AI crawling allowed?”

Crawling is only the input-side action. What truly requires governance is the downstream chain of use:

```text
crawl → parse → index → embed → retrieve → summarize → train → finetune → distill → generate → commercialize
```

### 1.3 The Progress and Limits of llms.txt

`/llms.txt` is a proposal for providing website information to large language models, usually in Markdown form, so that LLMs can better understand and use a website’s content at inference time.

This is an important step forward because it recognizes that AI systems need a reading interface different from human-facing UI.

However, `/llms.txt` mainly answers:

```text
Where should AI systems read?
Which documents are important?
What AI-friendly entry points does this website provide?
```

It does not fully answer:

```text
How may AI systems learn?
May the content enter training data?
May it be used for fine-tuning?
May embeddings be stored long-term?
May summaries be generated?
Is compensation required?
Is commercial use allowed?
```

Therefore, `/llms.txt` may serve as an AI entry index, but it is not sufficient as an AI learning rights protocol.

***

## 2. Existing Progress: From Gatekeeping Rules to Content Signals

### 2.1 Cloudflare Content Signals Policy

Cloudflare has already proposed a Content Signals Policy, dividing content usage signals into categories such as `search`, `ai-input`, and `ai-train`, integrating them into the broader context of `robots.txt`. This shows that the industry has begun to recognize that AI content usage cannot be fully described by traditional crawler rules.

This is a meaningful direction, but still only a first step. Three signals remain too coarse:

```text
search
ai-input
ai-train
```

They still do not express:

```text
learning depth
content retention duration
fine-tuning permission
distillation permission
long-term embedding storage
derivative generation permission
citation requirements
commercial licensing requirements
proportional conditions
```

### 2.2 TDM Reservation Protocol

The W3C TDM Reservation Protocol Community Group and related specifications have attempted to establish a machine-readable method for expressing Text and Data Mining rights reservations and available licensing policies. The goal is to allow rights holders to express TDM reservations and licensing information in a simple, practical, machine-readable way.

This is also an important foundation. However, the TDM context still mainly concerns the reservation of rights for text and data mining. The focus of this paper is broader: AI learning behavior. AI learning includes TDM, but is not equivalent to TDM. AI learning also involves model base spaces, long-term representations, reasoning capabilities, output restrictions, commercialization, and compensation.

### 2.3 Why a New Rights Spectrum Is Still Needed

Existing standards and proposals have already shown the correct direction:

```text
robots.txt: machine access rules
llms.txt: LLM entry index
Content Signals: AI usage signals
TDMRep: TDM rights reservation and license discovery
```

But a missing middle layer remains:

```text
A use-specific, depth-aware, proportional, compensable, and versioned expression layer for AI learning behavior.
```

This is the gap that AIRS / AILP is intended to fill.

***

## 3. Theoretical Foundation: AI Learning Is Not a Single Action

### 3.1 From Cleaning to Compensation

Current AI copyright disputes often oscillate between two extremes:

```text
full use without compensation
full cleaning without learning
```

The former is unfair to authors.\
The latter harms AI systems and users, while not necessarily compensating authors.

The earlier paper _In the Name of Cleaning_ argued that the core problem of cleaning is that it removes rather than compensates. Authors’ works are excluded from AI base spaces without receiving licensing fees, and AI capability is weakened as a result.

Therefore, the real question is not:

```text
May AI use copyrighted content?
```

but:

```text
How can AI learn under conditions that are declarable, licensable, compensable, and traceable by rights holders?
```

### 3.2 Learning Depth Through Recall and Reconstruction

The earlier paper _Reconstruction or Recall_ distinguished between two kinds of “knowing”: recall-based knowing and reconstruction-based knowing. Recall-based knowing means that information is stored in a relatively complete form within the base space and can be precisely retrieved when needed. Reconstruction-based knowing means that the base space stores rules, structures, and compressed principles, while specific expanded forms must be regenerated at the time of use.

This distinction is crucial for AI learning permission. Different permission depths produce different AI knowledge structures:

```text
Metadata only:
The AI knows that the work exists, but not what it contains.

Summary only:
The AI knows the general idea of the work, but lacks argumentative detail.

Excerpts allowed:
The AI can learn partial language patterns and local arguments.

Full-text ingestion allowed:
The AI can form a more complete base-space representation.

Structured reasoning extraction allowed:
The AI can learn propositions, derivations, structures, and dependency relations.

Training allowed:
The AI may transform the content into part of its model capability.

Fine-tuning allowed:
The AI may form more stable behavior patterns in a specific domain.

Distillation allowed:
The AI may transfer learned capabilities into other models.
```

Thus, “AI learning” is not a single event, but a series of transformations at different depths.

### 3.3 AI Rights Spectrum Through the Base Space Perspective

If we adopt the Base Space and Manager model, AI learning can be understood as:

```text
external content → encoding → base-space representation → manager routing → reasoning / expression / generation
```

Different permission layers determine how far external content may enter this chain.

For example:

```text
Search indexing allowed:
The content enters only an external searchable index.

RAG allowed:
The content may be temporarily read and cited during a user request.

Embedding allowed:
The content may be transformed into vector representations and stored long-term.

Training allowed:
The content may influence internal model representations.

Fine-tuning allowed:
The content may strengthen specific model behaviors.

Distillation allowed:
Capabilities derived from the content may be transferred to another model.
```

Therefore, the core of AI learning rights is not merely “crawling rights,” but **base-space entry rights** and **capability transformation rights**.

***

## 4. AIRS: AI Rights Spectrum

### 4.1 Definition

**AIRS: AI Rights Spectrum** is a framework for describing the degree to which AI systems may access, use, learn from, retain, generate from, and commercialize content.

Its core proposition is:

```text
AI rights over content should not be a binary switch, but a multidimensional spectrum.
```

### 4.2 Why a Spectrum Is Needed

Traditional rules often use binary expressions:

```text
Allow / Disallow
Train / No Train
Use / No Use
```

But the real preferences of creators and rights holders are usually more nuanced:

```text
This may be searched.
This may be summarized.
This may be quoted briefly.
This may be used for RAG.
This may be used for non-commercial training.
Commercial training requires a license.
Long verbatim outputs are not allowed.
The model may not memorize the full text.
The AI may learn the structure of the argument, but may not imitate the style.
Public-interest research is allowed; commercial distillation is not.
This may enter RAG, but may not enter model weights.
```

These cannot be expressed by binary rules.

### 4.3 Basic Form of the Rights Spectrum

AIRS may use proportional values between 0 and 1:

```text
1.0 = fully allowed
0.75 = highly allowed, with conditions
0.5 = limited permission
0.25 = strictly limited
0.0 = not allowed
license_required = explicit license required
compensation_required = compensation required
case_by_case = case-by-case review
```

For example:

```json
{
  "search_indexing": 1.0,
  "ai_answer_input": 1.0,
  "rag_retrieval": 0.8,
  "embedding_storage": 0.6,
  "non_commercial_training": 0.5,
  "commercial_training": "license_required",
  "fine_tuning": "license_required",
  "distillation": "prohibited_without_license",
  "verbatim_memorization": 0.0
}
```

***

## 5. AILP: AI Learning Permission Protocol

### 5.1 Definition

**AILP: AI Learning Permission Protocol** is the implementable protocol layer for AIRS. It expresses, in machine-readable form, the permissions governing how AI systems may use, learn from, retain, generate from, and commercialize content.

Suggested default routes:

```text
/ai-rights.json
/ai-policy.json
/ai/rights-spectrum.json
/ai/learning-permissions.json
```

The most recommended path is:

```text
/ai/rights-spectrum.json
```

because it can be integrated into a broader AI-native website structure.

### 5.2 AILP Does Not Replace robots.txt

AILP relates to existing files as follows:

```text
/robots.txt
= crawler access rules

/llms.txt
= AI / LLM entry index

/ai/manifest.json
= AI-readable website manifest

/ai/rights-spectrum.json
= AI learning, usage, retention, training, compensation, and citation rights declaration
```

In simplified form:

```text
robots.txt: may you enter?
llms.txt: where should you read?
manifest.json: what AI-readable resources exist in this system?
rights-spectrum.json: how may AI systems learn, use, retain, and compensate?
```

***

## 6. Ten Dimensions of AI Learning Rights

### 6.1 Access Rights

```text
crawl
fetch
parse
cache
mirror
```

Core questions:

```text
May AI crawlers access the content?
May the content be cached?
May the content be mirrored?
```

### 6.2 Indexing Rights

```text
search_indexing
metadata_indexing
snippet_indexing
semantic_indexing
```

Core questions:

```text
May the content enter a search index?
May a semantic index be built?
May snippets be displayed?
```

### 6.3 Inference Input Rights

```text
ai_answer_input
rag_retrieval
context_injection
temporary_session_use
```

Core questions:

```text
May an AI system read this content when answering a user?
May it be used as a RAG source?
Is only temporary session use allowed?
```

### 6.4 Embedding Rights

```text
embedding_generation
embedding_storage
semantic_cache
vector_database_use
```

Core questions:

```text
May the content be converted into embeddings?
May embeddings be stored long-term?
May they be placed in a commercial vector database?
```

### 6.5 Training Rights

```text
pretraining
continued_pretraining
non_commercial_training
commercial_training
domain_training
```

Core questions:

```text
May the content be used for pretraining?
May it be used for non-commercial research training?
May it be used for commercial model training?
```

### 6.6 Fine-Tuning Rights

```text
fine_tuning
instruction_tuning
alignment_tuning
style_tuning
domain_adaptation
```

Core questions:

```text
May the work be used to fine-tune a model?
May the model learn the author's style?
May it be used to build a domain-specific model?
```

### 6.7 Distillation Rights

```text
model_distillation
synthetic_data_generation
student_model_training
capability_transfer
```

Core questions:

```text
May capabilities learned from the content be transferred to another model?
May the content be used to generate synthetic data?
May derivative models be built?
```

### 6.8 Memory Rights

```text
long_term_memory
verbatim_memorization
persistent_user_memory
model_weight_integration
```

Core questions:

```text
May the content be remembered long-term?
May it be memorized verbatim?
May it enter model weights?
Is only temporary context use allowed?
```

### 6.9 Output Rights

```text
summary_generation
short_quote_generation
long_quote_generation
style_imitation
substitutive_generation
derivative_generation
```

Core questions:

```text
May summaries be generated?
May short quotations be produced?
May long near-verbatim passages be produced?
May the author's style be imitated?
May substitutive content be generated?
```

### 6.10 Attribution and Compensation Rights

```text
citation_required
attribution_required
link_required
license_required
compensation_required
revenue_share_required
pay_per_crawl
pay_per_training_use
```

Core questions:

```text
Is citation required?
Is attribution required?
Is a link required?
Is a license required?
Is compensation required?
How should compensation be calculated?
```

***

## 7. Suggested JSON Format

### 7.1 Minimal Version

```json
{
  "version": "0.1",
  "protocol": "AILP",
  "name": "AI Learning Permission Protocol",
  "rights_holder": "Example Author / Organization",
  "canonical_domain": "example.com",
  "default_policy": {
    "search_indexing": 1.0,
    "ai_answer_input": 1.0,
    "rag_retrieval": 0.8,
    "summary_generation": 1.0,
    "short_quote_generation": 0.7,
    "long_quote_generation": 0.0,
    "embedding_storage": 0.5,
    "non_commercial_training": 0.5,
    "commercial_training": "license_required",
    "fine_tuning": "license_required",
    "distillation": "prohibited_without_license",
    "verbatim_memorization": 0.0,
    "style_imitation": 0.0,
    "citation_required": true,
    "attribution_required": true,
    "compensation_required_for_commercial_training": true
  },
  "contact": {
    "licensing": "mailto:license@example.com",
    "rights": "https://example.com/rights"
  }
}
```

### 7.2 Path-Specific Version

```json
{
  "version": "0.1",
  "protocol": "AILP",
  "rights_holder": "Example Author / Organization",
  "canonical_domain": "example.com",
  "default_policy": {
    "search_indexing": 1.0,
    "ai_answer_input": 1.0,
    "commercial_training": "license_required"
  },
  "paths": [
    {
      "path": "/public/",
      "policy": {
        "search_indexing": 1.0,
        "ai_answer_input": 1.0,
        "rag_retrieval": 1.0,
        "summary_generation": 1.0,
        "non_commercial_training": 0.8,
        "commercial_training": "license_required"
      }
    },
    {
      "path": "/papers/",
      "policy": {
        "search_indexing": 1.0,
        "ai_answer_input": 1.0,
        "rag_retrieval": 0.8,
        "embedding_storage": 0.6,
        "commercial_training": "license_required",
        "citation_required": true,
        "attribution_required": true
      }
    },
    {
      "path": "/private-drafts/",
      "policy": {
        "search_indexing": 0.0,
        "ai_answer_input": 0.0,
        "rag_retrieval": 0.0,
        "embedding_storage": 0.0,
        "training": 0.0
      }
    }
  ]
}
```

### 7.3 Rights Holder Licensing Options Version

```json
{
  "version": "0.1",
  "protocol": "AILP",
  "licensing_options": [
    {
      "id": "non-commercial-research",
      "description": "Allows non-commercial AI research training with attribution.",
      "allowed": {
        "non_commercial_training": 1.0,
        "embedding_storage": 1.0,
        "summary_generation": 1.0
      },
      "required": {
        "attribution": true,
        "citation": true
      },
      "fee": "free"
    },
    {
      "id": "commercial-training",
      "description": "Allows commercial AI training under paid license.",
      "allowed": {
        "commercial_training": 1.0,
        "fine_tuning": 0.8
      },
      "required": {
        "license_agreement": true,
        "compensation": true
      },
      "contact": "mailto:license@example.com"
    }
  ]
}
```

***

## 8. Semantics of Spectrum Values

### 8.1 Numerical Values Are Not Automatic Legal Licenses

AIRS values should be understood as a combination of machine-readable preference and rights declaration. They should not be mistaken for automatic replacements of legal contracts.

For example:

```text
0.8
```

does not mean “80% legally licensed.”

It means:

```text
The rights holder highly permits this use, but additional conditions may still apply.
```

### 8.2 Suggested Semantics

```text
1.0
Fully allowed under normal attribution and usage conditions.

0.75
Highly allowed, but sources should be cited and substitutive use should be avoided.

0.5
Limited permission; suitable for summary, retrieval, and research, but not deep commercialization.

0.25
Strictly limited; only minimal or temporary use is allowed.

0.0
Not allowed.

license_required
Explicit license required.

compensation_required
Compensation mechanism required.

case_by_case
Contact the rights holder for case-by-case review.

prohibited_without_license
Prohibited unless licensed.
```

### 8.3 Why Not Use Pure Binary Rules?

Pure binary rules create two bad outcomes:

```text
Over-closure:
AI cannot learn, authors receive no compensation, and users get weaker AI.

Over-openness:
AI companies use content at scale, while authors lose control and revenue.
```

The purpose of spectral expression is to create intermediate states:

```text
Readable but citation required.
Summarizable but not substitutive.
Non-commercial training allowed; commercial use requires licensing.
RAG allowed; weight integration not allowed.
Vectorization allowed but periodic deletion required.
Argument structure may be learned; style imitation may not.
```

***

## 9. Relationship to AICL

The earlier AICL framework — **AI Ingestion & Capability Layer** — may contain four sublayers:

```text
Manifest Layer
Corpus Layer
Capability Layer
Rights Spectrum Layer
```

AIRS / AILP corresponds to:

```text
Rights Spectrum Layer
```

A complete website architecture may therefore look like this:

```text
/
  Human UI

/robots.txt
  crawler access rule

/llms.txt
  LLM entry index

/ai/
  AI-native entry

/ai/manifest.json
  AI-readable resource manifest

/ai/corpus/
  machine-readable corpus

/ai/tools/
  agent-callable tools

/ai/rights-spectrum.json
  AI learning and usage permissions
```

In this structure, the website is no longer merely:

```text
for humans to read
```

but also:

```text
for humans to read
for AI to ingest
for agents to call
for rights holders to declare
for future models to know how they may legally learn
```

***

## 10. Creator and Rights Holder Choice

### 10.1 Rights Holders Should Not Be Forced Into a False Binary

The current environment often forces creators into a false choice:

```text
let AI learn for free
or
completely prohibit AI learning
```

In reality, many creators may prefer a third path:

```text
AI may learn, but attribution is required.
AI may learn, but commercial use requires a license.
AI may learn summaries, but not full text.
AI may learn arguments, but not imitate style.
AI may use the work for public-interest research, but not for commercial distillation.
AI may use the content for RAG, but not integrate it into model weights.
```

AIRS aims to make these intermediate choices expressible, readable, and automatable.

### 10.2 AI Also Needs a Legal Learning Channel

AIRS is not only about protecting authors. It also protects the possibility of legitimate AI learning.

Without a licensable, compensable, and traceable learning channel, the industry will continue oscillating between two bad options:

```text
unlicensed use
or
full cleaning
```

The first harms author rights.\
The second harms AI base-space completeness.

AIRS provides a third path:

```text
conditional learning
traceable learning
compensated learning
output-limited learning
commercial and non-commercial learning separation
```

### 10.3 Users Also Have a Right to Know

Users should know:

```text
Can the AI read a given source?
Can the AI only read summaries?
Can the AI not cite full materials?
Is the AI missing certain fields because of cleaning or licensing restrictions?
```

Base-space gaps are invisible to users. They only see fluent AI responses, not the thoughts, works, or arguments that have been cleaned away, prohibited, or replaced by summaries.

Therefore, an AI learning rights layer should also become part of future AI transparency.

***

## 11. Compensation Models

AIRS / AILP can support different compensation models.

### 11.1 Free and Open

```text
Suitable for:
open-source documents, public knowledge, and content whose authors explicitly want AI systems to learn from it.
```

### 11.2 Free for Non-Commercial Use, Licensed for Commercial Use

```text
Suitable for:
academic papers, research blogs, and personal knowledge sites.
```

### 11.3 Pay Per Crawl

```text
Suitable for:
high-value databases, news websites, and large publishing platforms.
```

### 11.4 Pay Per Training Use

```text
Suitable for:
model training companies, commercial AI platforms, and data licensing markets.
```

### 11.5 Revenue Sharing

```text
Suitable for:
high-value works, professional corpora, textbooks, and creative works.
```

### 11.6 Licensing Pools

```text
Suitable for:
multi-author, multi-publisher, large-scale content collections.
```

Similar to collective management mechanisms in music licensing, AI companies could pay a unified licensing fee that is then distributed to rights holders according to agreed rules.

***

## 12. Value for AI Companies

AI companies may initially resist a more complex rights layer because it increases compliance costs. However, in the long run, AIRS / AILP also provides value to AI companies:

```text
reduces legal uncertainty
improves training data quality
reduces unnecessary cleaning
enables access to high-value licensed data
builds cooperation with authors, publishers, and academia
makes model capability sources more transparent
reduces future litigation risk
```

For high-quality models, data quality matters more than sheer data volume. If large amounts of high-quality content are cleaned away due to rights uncertainty, models may gain short-term legal safety while losing long-term capability.

***

## 13. Value for Creators

AIRS / AILP provides four kinds of value to creators:

```text
Control:
clearly express how AI may use the work.

Compensation:
distinguish free uses from paid uses.

Influence:
allow the work to be learned by AI so that the author's ideas are not excluded from future knowledge interfaces.

Protection:
prohibit verbatim memorization, long-form output, style imitation, or substitutive generation.
```

Creators should not have to choose only between being exploited and being forgotten.\
They should be able to choose more granular rights combinations.

***

## 14. Value for AI Systems

If we take the knowledge architecture of AI seriously, the value of AIRS / AILP is not merely compliance. It is cognitive completeness.

Cleaning creates systematic gaps in the AI base space.\
Fragmented data causes AI to learn “information about content” rather than the argumentative structure of the content itself.\
Deduplication and summary substitution may improve generalization, but can reduce deep routing ability.

A better licensing protocol can allow AI systems to:

```text
legally access more complete data
form more complete base spaces
reduce reconstruction-based hallucinations
improve deep reasoning ability
preserve source and citation chains
know more clearly what content is usable and what is not
```

***

## 15. Implementation Recommendations

### 15.1 Phase 1: Static Rights Declaration

Create:

```text
/ai/rights-spectrum.json
```

It should contain:

```text
default_policy
paths
licensing_options
contact
version
last_updated
```

### 15.2 Phase 2: Integration with llms.txt

Add to `/llms.txt`:

```md
## AI Rights

- AI rights spectrum: /ai/rights-spectrum.json
- Licensing contact: /ai/governance/license.md
- Citation policy: /ai/governance/citation-policy.md
```

### 15.3 Phase 3: Integration with Sitemap / Manifest

Add to `/ai/manifest.json`:

```json
{
  "rights": {
    "spectrum": "/ai/rights-spectrum.json",
    "license": "/ai/governance/license.md",
    "citation": "/ai/governance/citation-policy.md"
  }
}
```

### 15.4 Phase 4: AI Crawler Support

AI crawlers may read:

```text
robots.txt
→ llms.txt
→ ai/manifest.json
→ ai/rights-spectrum.json
```

and decide whether they may crawl, index, cite, train, or contact the rights holder, depending on the declared purpose.

### 15.5 Phase 5: Licensing Markets and Automated Settlement

Future extensions may include:

```text
machine-readable licensing
pay-per-crawl
pay-per-training
revenue sharing
rights registry
creator dashboard
audit logs
```

***

## 16. Agent Implementation Prompt Template

```text
Implement AIRS / AILP v0.1 for this website.

Goal:
Create a machine-readable AI rights spectrum file that declares how AI systems may crawl, index, retrieve, embed, train, fine-tune, distill, quote, summarize, remember, and commercialize content.

Do not remove robots.txt.
Do not replace llms.txt.
Add AILP as a new rights layer.

Create:

/ai/rights-spectrum.json
/ai/governance/license.md
/ai/governance/citation-policy.md
/ai/governance/ai-learning-policy.md

Update:

/llms.txt
/ai/manifest.json
/sitemap.xml if appropriate

Requirements:

1. rights-spectrum.json must be valid JSON.
2. It must include default_policy.
3. It must support path-specific policies.
4. It must include licensing contact.
5. It must distinguish:
   - search_indexing
   - ai_answer_input
   - rag_retrieval
   - embedding_storage
   - non_commercial_training
   - commercial_training
   - fine_tuning
   - distillation
   - verbatim_memorization
   - summary_generation
   - long_quote_generation
   - style_imitation
   - attribution_required
   - compensation_required
6. Do not implement enforcement yet.
7. This is a declaration layer, not an access-control system.
8. Keep human UI unchanged.
```

***

## 17. Example: Personal Knowledge Website Policy

```json
{
  "version": "0.1",
  "protocol": "AILP",
  "rights_holder": "Neo.K / EVEMISSLAB",
  "canonical_domain": "example.com",
  "default_policy": {
    "search_indexing": 1.0,
    "ai_answer_input": 1.0,
    "rag_retrieval": 1.0,
    "summary_generation": 1.0,
    "short_quote_generation": 0.8,
    "long_quote_generation": 0.0,
    "embedding_storage": 0.8,
    "non_commercial_training": 0.8,
    "commercial_training": "license_required",
    "fine_tuning": "license_required",
    "distillation": "license_required",
    "style_imitation": 0.0,
    "verbatim_memorization": 0.0,
    "citation_required": true,
    "attribution_required": true
  },
  "paths": [
    {
      "path": "/public-papers/",
      "policy": {
        "non_commercial_training": 1.0,
        "commercial_training": "license_required",
        "citation_required": true
      }
    },
    {
      "path": "/drafts/",
      "policy": {
        "search_indexing": 0.0,
        "ai_answer_input": 0.0,
        "training": 0.0
      }
    }
  ],
  "contact": {
    "licensing": "mailto:license@example.com"
  }
}
```

***

## 18. Possible Objections

### 18.1 “AI Companies Will Not Respect This”

That is possible.\
But the first step of a protocol is not immediate enforcement. It is the establishment of declarable, readable, and citable rules.

`robots.txt` is also not a mandatory security system, yet it became part of web governance. AIRS / AILP can likewise begin as a normative signal, then gradually connect with law, platforms, licensing markets, and technical safeguards.

### 18.2 “This Is Too Complex for Creators”

Initial adoption can use templates:

```text
open
conservative
research-open
commercial-license-required
fully prohibited
```

Creators do not need to manually tune every field.\
Platforms can provide a UI that generates the underlying JSON.

### 18.3 “Proportional Values Are Not Legally Precise Enough”

This is a valid concern.\
Therefore, AIRS values should serve as machine-readable preference and rights signals, not as standalone substitutes for formal contracts. Commercial licensing can still be handled through license URLs, contracts, payment systems, and rights registries.

### 18.4 “This Will Obstruct AI Development”

On the contrary, it may promote higher-quality AI development.

Without clear licensing, AI companies tend to choose between cleaning and risky use. Cleaning harms AI capability, while risky use harms creator trust. A clear rights layer can allow AI systems to legally access higher-quality content.

***

## 19. Relationship to Future Law

AIRS / AILP should not be designed as a mere appendix to any one country’s legal system. It should function as a cross-jurisdictional machine-readable declaration layer.

It can connect with:

```text
copyright licensing
TDM reservation
collective licensing
data licensing
AI training agreements
publisher agreements
creator opt-in / opt-out
platform crawler policies
AI transparency requirements
```

If future law requires AI companies to respect machine-readable rights declarations, AIRS / AILP may become one of the underlying formats.

***

## 20. Conclusion

AI-era content governance cannot rely only on `robots.txt`.

`robots.txt` answers:

```text
May you enter?
```

`llms.txt` answers:

```text
Where should you read?
```

AIRS / AILP answers:

```text
How may you learn?
To what depth may you learn?
How may you retain?
How may you generate?
May you commercialize?
Must you cite?
Must you compensate?
```

This is the shift from access rules to learning contracts.

The current AI copyright conflict should not oscillate only between “full use” and “full cleaning.” A more reasonable direction is to establish an AI learning rights layer that is declarable, parseable, negotiable, compensable, and governable.

Thus, this paper proposes:

```text
AIRS: AI Rights Spectrum

AILP: AI Learning Permission Protocol
```

Its core purpose is not to prevent AI from learning, but to move AI learning into a rule space that authors, rights holders, platforms, users, and AI companies can all understand.

The real question is not:

```text
Should AI learn?
```

but:

```text
Under what conditions should AI learn, how deeply, with what citation, with what compensation, with what restrictions against substituting the original author, and how can all of this become a machine-readable public protocol?
```

***

## 21. One-Sentence Summary

```text
The AI Rights Spectrum is not anti-AI; it is anti-crude binary governance. It aims to let creators grant nuanced permissions, let AI learn legally, let users know where knowledge comes from, and prevent the future AI base space from being built through cleaning and structural gaps.
```

***

## Appendix A: Suggested Field List

```text
search_indexing
metadata_indexing
snippet_indexing
semantic_indexing

ai_answer_input
rag_retrieval
temporary_session_use
context_injection

embedding_generation
embedding_storage
semantic_cache
vector_database_use

pretraining
continued_pretraining
non_commercial_training
commercial_training
domain_training

fine_tuning
instruction_tuning
alignment_tuning
style_tuning
domain_adaptation

model_distillation
synthetic_data_generation
student_model_training
capability_transfer

long_term_memory
verbatim_memorization
persistent_user_memory
model_weight_integration

summary_generation
short_quote_generation
long_quote_generation
style_imitation
substitutive_generation
derivative_generation

citation_required
attribution_required
link_required
license_required
compensation_required
revenue_share_required
pay_per_crawl
pay_per_training_use
```

***

## Appendix B: Suggested Routes

```text
/robots.txt
/llms.txt
/ai/manifest.json
/ai/rights-spectrum.json
/ai/governance/license.md
/ai/governance/citation-policy.md
/ai/governance/ai-learning-policy.md
/ai/governance/provenance.md
```

***

## Appendix C: Minimal Policy Template

```json
{
  "version": "0.1",
  "protocol": "AILP",
  "rights_holder": "Your Name or Organization",
  "canonical_domain": "example.com",
  "default_policy": {
    "search_indexing": 1.0,
    "ai_answer_input": 1.0,
    "rag_retrieval": 1.0,
    "summary_generation": 1.0,
    "short_quote_generation": 0.8,
    "long_quote_generation": 0.0,
    "embedding_storage": 0.5,
    "non_commercial_training": 0.5,
    "commercial_training": "license_required",
    "fine_tuning": "license_required",
    "distillation": "license_required",
    "verbatim_memorization": 0.0,
    "style_imitation": 0.0,
    "citation_required": true,
    "attribution_required": true,
    "compensation_required_for_commercial_training": true
  },
  "contact": {
    "licensing": "mailto:license@example.com"
  }
}
```
