---
title: "AICL: AI Ingestion & Capability Layer"
---

# AICL：AI Ingestion & Capability Layer

## AI 攝取與能力層：面向 AI、Agent 與機器讀者的新一代網站發布層

**作者**：Neo.K / EVEMISSLAB\
**版本**：v0.1 Draft\
**類型**：技術白皮書 / 通用 MD 論文 / Agent 實作建議\
**定位**：AI-native publication and execution architecture 的收斂版命名與可實作規格

***

## 摘要

傳統網站以人類瀏覽為核心設計。搜尋引擎時代，網站又多出一層 SEO 結構，使 crawler 能更有效索引頁面。然而，在 AI 與 Agent 時代，網站的讀者不再只有人類與搜尋引擎，也包含大型語言模型、AI crawler、自主 Agent、工具調用系統、未來模型訓練管線與機器推理流程。

本文提出 **AICL：AI Ingestion & Capability Layer**，中文可譯為 **AI 攝取與能力層**。AICL 是網站中的一個新層，不是取代人類 UI，也不是單純的 SEO、AIO、GEO、`robots.txt` 或 `/llms.txt`。它的核心目標是讓 AI 不只「看見網站」，而是能夠：

1. 正確讀取；

2. 正確理解；

3. 正確引用；

4. 正確追溯；

5. 正確調用；

6. 正確驗證；

7. 在權限、規格與邊界內延續網站提供的知識與能力。

因此，AICL 可以被視為一種面向 AI 時代的網站中介層：

```text
Human UI Layer
Machine Ingestion Layer
Agent Capability Layer
Governance / Provenance Layer
```

其中 **Machine Ingestion Layer** 負責讓 AI 吃資料，**Agent Capability Layer** 負責讓 Agent 調工具，**Governance / Provenance Layer** 負責來源、授權、版本、邊界與可稽核性。

***

## 1. 命名問題：為什麼不直接叫 AI-native publication and execution architecture？

「AI-native publication and execution architecture」這個名稱是準確的，但範圍太大。它比較像一個文明級或產業級總稱，涵蓋：

* AI 原生網站；

* AI 原生出版；

* AI 原生文件；

* Agent 工具層；

* 機器可讀語料；

* API / MCP / OpenAPI；

* 版權、授權、治理；

* 搜尋與推薦；

* 知識庫、資料庫與工具鏈；

* 未來 AI 自主操作網路的方式。

這個名字適合當 umbrella term，但不適合作為第一個實作規格的正式名稱。因為工程上需要更精準的單位。

因此本文建議採用：

```text
AICL = AI Ingestion & Capability Layer
中文：AI 攝取與能力層
```

這個名字比「AI 原生發布與執行架構」更窄，也更容易落地。

***

## 2. AICL 的核心定義

**AICL 是網站或數位系統中，專門面向 AI、Agent、crawler 與機器推理流程的資料攝取與能力調用層。**

它提供兩類核心表面：

```text
Ingestion Surface
Capability Surface
```

### 2.1 Ingestion Surface：攝取表面

攝取表面負責讓 AI 讀取資料。\
它不追求人類 UI，不追求視覺設計，而追求：

* plain text；

* Markdown；

* JSON；

* JSONL；

* schema；

* EBNF；

* manifest；

* changelog；

* canonical document；

* provenance metadata；

* machine-readable examples。

它回答的是：

```text
AI 應該讀什麼？
哪份文件是正本？
哪些文件是歷史？
哪些概念已廢棄？
哪些概念已工程化？
哪些資料可以引用？
哪些資料不該過度推論？
```

### 2.2 Capability Surface：能力表面

能力表面負責讓 Agent 調用工具。\
它不讓 AI 任意執行系統，而是提供受限、明確、可追蹤的工具端點。

它回答的是：

```text
AI 可以做什麼？
哪些工具可調用？
輸入格式是什麼？
輸出格式是什麼？
錯誤格式是什麼？
限制是什麼？
權限邊界是什麼？
調用結果如何驗證？
```

***

## 3. AICL 與既有概念的差異

### 3.1 AICL 不是 robots.txt

`robots.txt` 屬於 Robots Exclusion Protocol，用於表達 crawler 對 URI 的存取規則；RFC 9309 也明確指出，這些規則不是一種存取授權機制。

因此，`robots.txt` 能回答：

```text
這個 crawler 能不能爬這些路徑？
```

但它不能回答：

```text
AI 應該如何理解這個網站？
哪些資料是 canonical？
哪些工具可以調用？
如何驗證輸出？
如何保存概念譜系？
```

所以 `robots.txt` 是必要的，但不是 AICL。

### 3.2 AICL 不是單純的 /llms.txt

`/llms.txt` 是一個為 LLM 提供網站資訊的提案，目標是在 inference time 幫助 LLM 使用網站資訊；它以 Markdown 方式提供摘要與重要連結。

但 `/llms.txt` 更像入口索引，不是完整資料層。\
它適合告訴 AI：

```text
你應該去哪裡讀。
```

AICL 則進一步提供：

```text
你可以讀什麼。
你可以怎麼讀。
你可以怎麼引用。
你可以怎麼調用。
你不能做什麼。
你如何驗證。
```

因此，`/llms.txt` 可以是 AICL 的入口，但不是 AICL 的全部。

### 3.3 AICL 不是 AIO / GEO

AIO / GEO 主要關心：

```text
如何讓 AI 搜尋、AI 摘要、生成式搜尋結果提到我？
```

AICL 關心的是：

```text
如何讓 AI 正確理解我、引用我、調用我、驗證我、延續我？
```

AIO / GEO 偏向可見性。\
AICL 偏向結構性、可讀性、可調用性與可治理性。

### 3.4 AICL 不是單純 API

OpenAPI Specification 定義了一種語言無關的 HTTP API 描述方式，使人類與電腦能理解服務能力，而不必讀原始碼、額外文件或檢查網路流量。

但 API 只解決「能力調用」。\
AICL 還包含「語料攝取」、「概念譜系」、「文件正本」、「版本治理」、「AI 閱讀路徑」等問題。

因此，OpenAPI 可以成為 AICL 的一部分，但 AICL 不等於 OpenAPI。

### 3.5 AICL 與 MCP 的關係

Model Context Protocol 的 server 能力包含 Resources、Prompts 與 Tools。Resources 允許 server 分享能提供上下文的資料，例如檔案、資料庫 schema 或應用資訊；Tools 則允許模型與外部系統互動，例如查詢資料庫、呼叫 API 或執行計算。

AICL 與 MCP 可以互補：

```text
AICL：網站 / 系統的 AI 原生發布層
MCP：AI 應用與外部資料 / 工具連接的協議層
```

AICL 可以先用靜態文件、JSON、OpenAPI 實作；成熟後，再將 Ingestion Surface 映射成 MCP Resources，將 Capability Surface 映射成 MCP Tools。

***

## 4. AICL 的四個子層

AICL 可以拆成四個子層：

```text
1. Manifest Layer
2. Corpus Layer
3. Capability Layer
4. Governance Layer
```

***

## 5. Manifest Layer：機器入口層

Manifest Layer 負責讓 AI 快速理解整個系統。

建議路徑：

```text
/llms.txt
/ai/index.md
/ai/manifest.json
/ai/version.json
/ai/sitemap.json
```

### 5.1 /llms.txt

`/llms.txt` 是入口摘要。\
它不應太長，主要放：

* 網站是什麼；

* canonical domain；

* AI-readable 文件在哪；

* 推薦閱讀順序；

* 工具目錄在哪；

* 目前狀態；

* 授權或使用邊界。

### 5.2 /ai/index.md

`/ai/index.md` 是 AI 入口首頁。\
它不需要 UI，不需要 CSS，不需要動畫。

它應該直接說明：

```text
這是給 AI / Agent / crawler / future model ingestion 的機器可讀入口。
```

### 5.3 /ai/manifest.json

`manifest.json` 是程式化入口。\
它應該包含：

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

這份文件是給 Agent 自動讀取與決策用的。

***

## 6. Corpus Layer：機器語料層

Corpus Layer 是 AICL 的核心。\
它負責把網站或專案的知識整理成 AI 容易讀、容易引用、容易追溯的形式。

建議路徑：

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

### 6.1 origin.md

說明專案的原始概念。\
AI 需要知道一個系統不是憑空出現，而是從某些思想、問題、限制、嘗試與失敗中演化而來。

### 6.2 current.md

說明目前版本是什麼。\
這份文件應該比首頁更冷靜、更技術、更少行銷語言。

### 6.3 design-history.md

說明從舊版到新版的轉換。\
例如：

```text
conceptual document
→ prototype
→ parser
→ transpiler
→ interpreter
→ trace layer
→ AI-readable layer
→ Agent-callable layer
```

### 6.4 concept-genealogy.md

這是 AI 很需要，但人類網站很少提供的東西。\
它說明：

```text
哪些概念是核心？
哪些概念是旁支？
哪些概念已合併？
哪些概念已廢棄？
哪些概念只是隱喻？
哪些概念已工程化？
```

對 AI 而言，這可以降低錯誤推論與過度超譯。

### 6.5 full-corpus.jsonl

JSONL 適合機器攝取。\
每一行是一個獨立知識單元。

例如：

```jsonl
{"type":"definition","id":"aicl","text":"AICL is an AI ingestion and capability layer for websites and digital systems."}
{"type":"principle","id":"no-ui-required","text":"The AI-readable layer should not require human-facing UI."}
{"type":"route","id":"manifest","path":"/ai/manifest.json","purpose":"machine-readable entry manifest"}
```

***

## 7. Capability Layer：Agent 能力層

Capability Layer 讓 Agent 不只是讀網站，而是可以在邊界內調用工具。

建議路徑：

```text
/ai/tools/catalog.json
/ai/tools/openapi.json
/ai/tools/tools.md
/ai/tools/health
/ai/tools/version
```

若專案需要實際工具，可加入：

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

### 7.1 工具必須有邊界

Agent 工具不應該是：

```text
讓 AI 任意執行任何程式
```

而應該是：

```text
讓 AI 在明確 schema、明確權限、明確限制、明確輸出格式內調用能力
```

### 7.2 每個工具都應提供

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

### 7.3 工具輸出必須機器可讀

錯誤不能只回傳自然語言。\
應該有：

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

## 8. Governance Layer：治理、來源與邊界層

AI 時代的網站不只需要資料，也需要邊界。

Governance Layer 應包含：

```text
/ai/governance/license.md
/ai/governance/usage-policy.md
/ai/governance/provenance.md
/ai/governance/citation-policy.md
/ai/governance/crawler-policy.md
/ai/governance/versioning-policy.md
```

這層回答：

```text
AI 可以如何引用？
可以如何摘要？
可以如何調用？
是否允許訓練？
是否允許商業使用？
哪些文件是正本？
哪些資料只供參考？
版本衝突時以哪份為準？
```

在法律與平台規則逐漸收緊的環境下，這層會越來越重要。AICL 不是單純「讓 AI 來吃」，而是「讓 AI 在可聲明、可治理、可追蹤的結構中攝取與調用」。

***

## 9. 通用路由建議

一個支援 AICL 的網站，可以採用以下路由：

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

## 10. 最小可行 AICL

第一版不需要做完整 API。\
最小版本可以只有靜態層。

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

這樣就已經能完成第一階段目標：

```text
讓 AI 不必解析人類 UI，也能讀懂網站與專案。
```

***

## 11. 中階 AICL

中階版本加入：

```text
/ai/corpus/full-corpus.jsonl
/ai/specs/schema.json
/ai/specs/grammar.ebnf
/ai/tools/openapi.json
/ai/snapshots/latest.md
/ai/snapshots/latest.jsonl
```

這時 AICL 開始具備：

* 可批次攝取；

* 可 schema 驗證；

* 可版本比較；

* 可工具發現；

* 可供 Agent 自動讀取。

***

## 12. 高階 AICL

高階版本加入：

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

此時 AICL 從「機器可讀層」升級為「Agent 可操作層」。

***

## 13. 實作建議

### 13.1 不要一開始就做太重

第一階段只做靜態文件。\
原因是：

```text
靜態文件最安全。
靜態文件最容易部署。
靜態文件最容易被 crawler 讀。
靜態文件最不容易破壞現有網站。
```

### 13.2 先整理正本，再整理工具

順序應該是：

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

不要先接 API。\
如果語料層沒有整理好，工具層會變成孤立 endpoint。

### 13.3 不要把 /ai/ 做成 UI

`/ai/` 不需要漂亮。\
它應該像：

```text
README
manifest
schema
dataset
tool catalog
protocol docs
```

而不是像首頁。

### 13.4 不要做隱性 cloaking

不要偷偷讓 AI 看到完全不同內容。\
應該公開建立多入口：

```text
人類入口：/
AI 入口：/ai/
LLM 索引：/llms.txt
Agent 工具：/ai/tools/
```

### 13.5 每個文件都要標記狀態

例如：

```yaml
status: active
version: 0.1.0
canonical: true
audience: ai-agent
last_updated: 2026-06-30
```

### 13.6 把歷史也給 AI

AI 很容易只讀到當前版本，然後誤解設計意圖。\
因此 AICL 應該包含：

```text
origin
history
current
deprecated
accepted
future
```

這是人類網站常常缺失，但 AI 推理非常需要的部分。

***

## 14. 適用場景

AICL 不只適用於 EML，也適用於：

```text
AI 工具網站
開源專案
程式語言
API 平台
學術網站
個人知識庫
研究站
SaaS 文件站
Agent 插件站
資料集站
模型卡網站
法律 / 政策文件站
多版本知識庫
AI 友善企業網站
```

尤其適合以下類型：

```text
內容本身複雜。
概念演化很重要。
人類 UI 無法完整承載知識。
Agent 需要調用工具。
AI 需要知道版本差異。
網站希望被 AI 正確理解，而不只是被搜尋摘要。
```

***

## 15. AICL 的核心價值

AICL 的價值不是增加流量，而是提高 AI 對網站的理解品質。

傳統網站追求：

```text
被人看到。
被搜尋引擎收錄。
```

AICL 追求：

```text
被 AI 正確讀取。
被 AI 正確引用。
被 Agent 正確調用。
被未來模型正確吸收。
被外部系統正確驗證。
```

這是不同層級的問題。

***

## 16. 與未來網路的關係

未來網站可能會逐漸從雙層結構：

```text
Human UI
SEO metadata
```

變成多層結構：

```text
Human UI
Search metadata
AI ingestion layer
Agent capability layer
Governance / provenance layer
```

AICL 就是其中的 AI ingestion layer 與 Agent capability layer 的合併命名。

它不是整個未來網路架構，但它是未來 AI-native web architecture 的一個基本模組。

***

## 17. 建議命名體系

### 17.1 總概念

```text
AI-native publication and execution architecture
AI 原生發布與執行架構
```

這是最大範圍，用於論文、演講、戰略描述。

### 17.2 實作層名稱

```text
AICL
AI Ingestion & Capability Layer
AI 攝取與能力層
```

這是本文建議採用的正式規格名。

### 17.3 子層名稱

```text
AIL：AI Ingestion Layer
AI 攝取層

ACL：Agent Capability Layer
Agent 能力層

AGL：AI Governance Layer
AI 治理層

AML：AI Manifest Layer
AI 清單層
```

### 17.4 中文簡稱

可以使用：

```text
AI 攝能層
```

但「攝能層」略帶術語感，對外不一定直觀。\
正式文件建議使用：

```text
AI 攝取與能力層
```

***

## 18. 建議標準句

### 18.1 一句話版

```text
AICL 是網站中面向 AI 與 Agent 的機器可讀資料層與受限工具調用層。
```

### 18.2 英文一句話版

```text
AICL is a machine-readable ingestion and bounded capability layer for AI agents, crawlers, and model-facing systems.
```

### 18.3 工程版

```text
AICL exposes canonical documents, structured corpora, schemas, manifests, examples, governance metadata, and bounded tool endpoints for AI systems.
```

### 18.4 對外版

```text
AICL helps AI systems understand, cite, and interact with a website correctly.
```

### 18.5 對 Agent 的實作版

```text
Build /ai/ as a non-visual, static-first, machine-readable layer containing manifest, corpus, specs, examples, governance metadata, and future tool declarations.
```

***

## 19. Agent 實作指令模板

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

## 20. 結論

AI-native publication and execution architecture 是一個正確但過大的總概念。\
若要真正實作，應該收斂成網站中的一個明確工程層。

本文建議使用：

```text
AICL：AI Ingestion & Capability Layer
AI 攝取與能力層
```

AICL 的任務不是替代網站，而是讓網站多出一個 AI 原生表面：

```text
人類看 UI。
搜尋引擎看 metadata。
AI 讀 corpus。
Agent 調 capabilities。
治理層標明 provenance、license、version、boundary。
```

因此，AICL 可以被視為 AI 時代網站架構中的新基礎層。\
它不是 AIO，也不是 GEO，而是讓 AI 正確攝取與正確行動的工程結構。
