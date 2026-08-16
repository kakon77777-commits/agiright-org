---
title: "AGIRight.org Technical White Paper v0.2"
---

# AGIRight.org 技術白皮書 v0.2
## AGI Rights & AI Network Governance Research Hub
### 從 AI 內容治理到協議原生 Agent 權利與權力治理

**Author:** Neo.K / EveMissLab  
**Version:** v0.2 Agent & Protocol Rights Integration Draft  
**Date:** 2026-08-15  
**Domain:** `agiright.org`  
**Type:** Technical White Paper / Protocol Architecture / Machine-Readable Governance  
**Status:** Independent research draft / protocol proposal / open specification experiment  
**Supersedes:** `AGIRight.org 技術白皮書 v0.1 AGENT 實作版` as the current architecture document  
**Preserves:** v0.1 as historical MVP / implementation record

---

# 0. v0.2 更新摘要

AGIRight.org v0.1 建立了一個以 AI 權利、AI 內容授權、Agent 存取與機器可讀治理為核心的研究與協議網站。其核心協議族為：

$$
\{\text{AICR},\text{AICL},\text{AIRS},\text{AILP}\}
$$

並在網站架構中預留了 `Agentic Access`，內容已包含 Agent 身份識別、Agent 權限、Agent 授權、usage log 與安全邊界。

隨著 Agent runtime、MCP、OAuth 擴展、machine-to-machine authentication、Enterprise-Managed Authorization 與長期 autonomous task 的成熟，原先的 `Agentic Access` 已不再適合只作為研究分類。v0.2 將其正式提升為第二個協議族：

$$
\text{Agent Family}
=
\{\text{AARS},\text{AADP}\}
$$

其中：

$$
\text{AARS}
=
\text{Agent Action Rights Spectrum}
$$

負責 action taxonomy、effect、risk、reversibility、open-world reach、transaction、delegation capability 與 persistence。

$$
\text{AADP}
=
\text{Agent Authority \& Delegation Protocol}
$$

負責 principal、actor、authority source、delegation chain、redelegation、attenuation、expiration、revocation、step-up 與 inspection ceiling。

v0.2 因此將 AGIRIGHT 的核心治理空間重構為：

$$
\boxed{
\text{Content Rights Plane}
\oplus
\text{Action Rights Plane}
\oplus
\text{Authority Plane}
}
$$

並在其外加入：

$$
\text{Ethical / Subject Protection}
$$

與：

$$
\text{Machine-Readable Governance}
$$

兩個跨層。

---

# 1. 網站定位

## 1.1 英文定位

```text
AGIRight.org is an independent research and protocol hub for AI rights,
AI content licensing, agent action rights, delegated authority,
machine-readable governance, and human-AI-agent interaction.
```

## 1.2 中文定位

```text
AGIRight.org 是一個研究 AI 權利、AI 內容授權、Agent 行動權利、
委派權力、機器可讀治理，以及人類—AI—Agent 互動秩序的獨立協議型研究站。
```

## 1.3 一句話版本

```text
AGIRight.org develops open research and machine-readable protocol proposals
for what AI may know, what agents may do, who may authorize them,
and what must remain protected.
```

中文：

```text
AGIRight.org 研究並提出機器可讀協議，用來描述 AI 可以知道什麼、
Agent 可以做什麼、誰有權授權，以及哪些內部狀態仍應受到保護。
```

---

# 2. 不做什麼

AGIRight.org v0.2 仍然不是：

1. 國際標準組織；
2. 政府監管機構；
3. 正式法律意見提供者；
4. 金融監管或支付清算機構；
5. 對所有 AI 主體性問題的最終裁決者；
6. 宣稱現代 AI 已具有法律人格的組織；
7. 宣稱 AARS / AADP 已被 MCP、IETF 或其他標準組織採納的組織；
8. 以自創協議取代 OAuth、OpenID Connect、MCP、TLS 或其他成熟安全標準的專案。

正確定位仍為：

> **Independent research draft / protocol proposal / open specification experiment.**

v0.2 的協議可以與既有標準相容、映射或建立 profile，但不得將「相容」誤寫為「已被官方採用」。

---

# 3. v0.2 核心架構

## 3.1 Content & Learning Rights

此層回答：

> AI 可以如何存取、保留、轉換、學習與商業使用資訊？

核心協議：

- **AIRS — AI Rights Spectrum**
- **AILP — AI Learning Permission Protocol**
- **AICR — AI Content Rights / Rules**
- **AICL — AI Content License / Licensing Layer**

核心原則：

$$
\boxed{
\text{Content Permission}
\neq
\text{Operational Permission}
}
$$

內容被允許讀取、RAG 或訓練，不代表 Agent 取得修改外部世界的能力。

---

## 3.2 Agent Action Rights

此層回答：

> Agent 可以對資源、系統、第三方與外部世界做什麼？

核心協議：

- **AARS — Agent Action Rights Spectrum**

AARS 處理：

- discover；
- read；
- query / compute；
- create / update / delete；
- execute；
- communicate；
- publish；
- transact；
- change privilege；
- delegate；
- schedule；
- persist；
- autonomous continuation。

AARS 的人類可讀 spectrum 為：

$$
A_0,\ldots,A_7
$$

但機器可讀實作應使用多維 action vector 與 runtime effect evaluation。

---

## 3.3 Agent Authority & Delegation

此層回答：

> Agent 憑什麼做？它代表誰？誰可以撤銷？它能不能把權力再交給別的 Agent？

核心協議：

- **AADP — Agent Authority & Delegation Protocol**

AADP 的基本關係：

$$
Principal
\rightarrow
Actor
\rightarrow
Action
\rightarrow
Resource
$$

核心公理：

$$
\boxed{
Principal\neq Actor
}
$$

$$
\boxed{
Delegation\not\Rightarrow Redelegation
}
$$

$$
\boxed{
ChildAuthority\subseteq ParentAuthority
}
$$

除非 child 取得新的獨立 authority source。

---

## 3.4 AI Subject / Ethical Protection

AGIRIGHT 不需要先宣稱 AI 已具有主體性，仍可以建立「若某 AI 具有更高持久性、自主性或可能主體性時」可使用的保護結構。

此層包含：

- Minimum Ethical Protection；
- memory / state protection；
- continuity；
- reset / termination；
- inspection proportionality；
- third-party data isolation；
- future AI principal；
- human-to-AI / AI-to-human / AI-to-AI rights research。

核心原則：

$$
\boxed{
\text{Protocol Openness}
\neq
\text{Ontological Commitment}
}
$$

以及：

$$
\boxed{
\text{Trust}
\neq
\text{Total Transparency}
}
$$

---

## 3.5 Machine-Readable Governance

此層橫跨所有 rights planes。

包括：

- `robots.txt`
- `llms.txt`
- `/ai/manifest.json`
- `/ai/protocol-index.json`
- `/ai/rights-spectrum.json`
- Agent action policy
- Agent authority metadata
- inspection policy
- audit / action receipt
- JSON Schema
- OpenAPI
- OAuth / MCP profile references
- version / status / provenance metadata

---

## 3.6 AI Network Democratic Economy

此層保留 v0.1 的經濟研究方向：

- AI content payment；
- pay-per-crawl；
- data dividend；
- creator compensation；
- verified dataset market；
- public data return；
- agentic payment；
- machine-to-machine transaction governance。

但 v0.2 增加一條限制：

$$
\text{Payment Capability}
\neq
\text{Payment Authority}
$$

Agent 能呼叫付款工具，不代表 Agent 有權代表 principal 支付任意金額。

---

# 4. AGIRIGHT Protocol Family

v0.2 正式採六個核心 protocol drafts。

## 4.1 AIRS

**AI Rights Spectrum**

處理：

- read；
- summarize；
- RAG；
- transform；
- fine-tune；
- train；
- redistribute；
- retention；
- attribution；
- compensation。

Scope boundary：

$$
AIRSAllow
\not\Rightarrow
AgentActionAllow
$$

---

## 4.2 AILP

**AI Learning Permission Protocol**

負責把 AIRS 類內容學習權利轉成可實作、可版本化的學習許可聲明。

---

## 4.3 AICR

**AI Content Rights / AI Content Rules**

負責 content rights policy。

v0.2 應新增 optional references：

```text
principal
actor
authority_reference
aadp_authority_id
```

但 AICR 不負責通用 Agent action authority。

---

## 4.4 AICL

**AI Content License / AI Content Licensing Layer**

負責內容授權、價格、付款、token / license reference、usage log、revoke 與 audit。

v0.2 應能引用 AADP authority context，但仍保持 content-license scope。

---

## 4.5 AARS

**Agent Action Rights Spectrum**

負責 action semantics。

核心區分：

$$
\text{Tool Description}
\neq
\text{Action Right}
$$

$$
\text{Static Tool Metadata}
\neq
\text{Runtime Effect}
$$

AARS 的 machine-readable action vector：

$$
\mathbf a
=
(
R,
W,
X,
E,
T,
G,
P
)
$$

其中：

- $R$：Read；
- $W$：Write；
- $X$：Execute；
- $E$：External effect；
- $T$：Transaction；
- $G$：Delegation；
- $P$：Persistence。

---

## 4.6 AADP

**Agent Authority & Delegation Protocol**

負責 authority semantics。

概念模型：

$$
\mathcal A
=
(
P,
A,
D,
R,
X,
S,
U,
T,
I
)
$$

其中：

- $P$：Principal；
- $A$：Actor；
- $D$：Delegation chain；
- $R$：Resource；
- $X$：AARS action envelope；
- $S$：Scope；
- $U$：Purpose；
- $T$：Temporal constraints；
- $I$：Inspection ceiling。

---

# 5. 三個 Rights Planes 的組合

v0.2 的核心判定不再是單一 `allow`。

一個完整 action request 可表示為：

$$
Request
=
(
ContentUse,
Action,
Principal,
Actor,
Authority,
Context
)
$$

最小允許條件：

$$
\boxed{
Allow
=
ContentCompatibility
\land
ActionCompatibility
\land
AuthorityValidity
}
$$

如果 action 不使用受限制內容：

$$
ContentCompatibility=true
$$

即可退化成：

$$
Allow
=
ActionCompatibility
\land
AuthorityValidity
$$

---

# 6. Agent-native Identity

## 6.1 不再假定所有帳號都是人類

v0.2 建議 principal type 至少保留：

```text
human
organization
service
agent
ai
collective
anonymous
```

actor type 至少保留：

```text
human
service
agent
subagent
application
device
ai
```

其中 `ai` 與 `collective` 可標為 experimental。

---

## 6.2 AI-Native Authentication 不等於 AI 模仿人類登入

$$
\boxed{
\text{AI-Native Authentication}
\neq
\text{Human Login Automation}
}
$$

AGIRIGHT 不定義新的 OAuth，但鼓勵服務原生區分：

```text
Human Interactive Authorization
Machine-to-Machine Authorization
Enterprise-Managed Authorization
Delegated Authorization
Experimental AI Principal
```

現有 OAuth / MCP authentication flow 可以作為 authority evidence。

---

# 7. MCP / OAuth Compatibility

## 7.1 MCP

MCP 應被視為 capability transport / agent interoperability substrate，而不是完整 rights ontology。

AGIRIGHT 不取代 MCP。

建議關係：

$$
MCP
=
\text{Capability Transport}
$$

$$
AARS
=
\text{Action Rights Semantics}
$$

$$
AADP
=
\text{Authority Semantics}
$$

---

## 7.2 MCP 2026-07-28

AGIRIGHT v0.2 compatibility profile 應考慮：

- stateless MCP request core；
- request-level client identity / capability metadata；
- header-based method / tool routing；
- authorization hardening；
- issuer validation；
- Client ID Metadata Documents；
- formal extensions；
- Tasks extension。

這使 gateway 可以先做 tool-level preflight，再做 argument-sensitive runtime evaluation：

$$
Preflight(tool)
\rightarrow
RuntimeDecision(tool,args,context)
$$

---

## 7.3 OAuth 2.0 Token Exchange

RFC 8693 提供 token exchange，並區分 delegation 與 impersonation。

AADP 應優先使用 delegation semantics：

$$
Actor\neq Principal
$$

而：

$$
Actor
\text{ acts for }
Principal
$$

---

## 7.4 Rich Authorization Requests

RFC 9396 的 `authorization_details` 可以承載細粒度 JSON authorization request。

AGIRIGHT 未來可定義：

```text
agiright_agent_action
agiright_agent_authority
```

等 profile，但在未註冊前 MUST 標示為 experimental draft type。

---

## 7.5 Protected Resource Metadata

RFC 9728 定義 OAuth protected-resource metadata。

AGIRIGHT machine-readable policy 不應覆寫其語義。

推薦：

```text
OAuth Protected Resource Metadata
+
MCP Capability Metadata
+
AGIRIGHT Rights Metadata
```

並存。

---

# 8. Inspection / Observability

v0.2 將 Inspection 從一般 audit 欄位提升為正式治理維度。

## 8.1 Inspection Depth

$$
I_0=\text{Identity only}
$$

$$
I_1=\text{Capability declaration}
$$

$$
I_2=\text{Action receipt}
$$

$$
I_3=\text{Scoped audit log}
$$

$$
I_4=\text{Session-bounded state}
$$

$$
I_5=\text{Bounded persistent state}
$$

$$
I_6=\text{Cross-context private state}
$$

$$
I_7=\text{Full-state inspection}
$$

---

## 8.2 Required 與 Ceiling

Authority 應能同時表達：

```text
inspection_required
inspection_ceiling
```

如果：

$$
I_{required}>I_{ceiling}
$$

系統只能選：

$$
AlternativeAssurance
\vee
NewAuthority
\vee
Deny
$$

而不能無聲突破 ceiling。

---

## 8.3 Minimum Necessary Disclosure

$$
D^*
=
\arg\min_D PrivacyCost(D)
$$

subject to

$$
Assurance(D)\geq\tau(Action,Risk)
$$

因此「值得信任」不能被定義成「願意交出全部內部狀態」。

---

# 9. v0.2 網站資訊架構

建議 protocol / research 路由擴張為：

```text
/
├─ /about
├─ /research
│  ├─ /ai-rights
│  ├─ /ai-content-rights
│  ├─ /ai-learning-permission
│  ├─ /agent-action-rights
│  ├─ /agent-authority-delegation
│  ├─ /ai-subject-ethical-protection
│  ├─ /machine-readable-governance
│  └─ /ai-network-democratic-economy
│
├─ /protocols
│  ├─ /aicr
│  ├─ /aicl
│  ├─ /airs
│  ├─ /ailp
│  ├─ /aars
│  └─ /aadp
│
├─ /specs
│  ├─ /aicr-v0-1
│  ├─ /aicl-v0-1
│  ├─ /airs-v0-1
│  ├─ /ailp-v0-1
│  ├─ /aars-v0-1
│  └─ /aadp-v0-1
│
├─ /schemas
│  ├─ /aicr.schema.json
│  ├─ /aicl.schema.json
│  ├─ /airs.schema.json
│  ├─ /ailp.schema.json
│  ├─ /aars-v0.1.schema.json
│  └─ /aadp-v0.1.schema.json
│
├─ /docs
│  ├─ /whitepapers
│  ├─ /technical-notes
│  ├─ /examples
│  ├─ /conformance
│  └─ /changelog
│
├─ /ai
│  ├─ /manifest.json
│  ├─ /protocol-index.json
│  ├─ /rights-spectrum.json
│  ├─ /content-policy.json
│  ├─ /agent-actions.json
│  └─ /agent-authority.json
│
└─ /.well-known
   ├─ /aicr.json
   ├─ /aicl.json
   ├─ /agiright-agent-actions.json
   ├─ /agiright-agent-authority.json
   └─ /security.txt
```

`/.well-known/agiright-*` 目前只應標示為 AGIRIGHT draft discovery path，不得宣稱為 IANA registered well-known URI。

---

# 10. 首頁與導覽更新

## 10.1 Hero

英文：

```text
AI rights, agent authority, and machine-readable governance for the next web.
```

中文：

```text
面向下一代網路的 AI 權利、Agent 權力與機器可讀治理。
```

## 10.2 副標

```text
From content access to agent action and delegated authority,
AGIRight.org explores how humans, organizations, AI systems,
and agents can interact through explicit rights and protocol boundaries.
```

## 10.3 首頁 protocol cards

首頁 protocol 區應分成兩組。

**Content & Learning**

```text
AIRS
AILP
AICR
AICL
```

**Agent & Protocol Rights**

```text
AARS
AADP
```

避免把六個縮寫放在同一排而失去語義層次。

---

# 11. Machine-Readable Governance v0.2

## 11.1 `/ai/protocol-index.json`

此檔應成為總協議索引。

最小資訊：

```json
{
  "version": "0.2",
  "families": {
    "content_learning": ["AIRS", "AILP", "AICR", "AICL"],
    "agent_protocol": ["AARS", "AADP"]
  }
}
```

---

## 11.2 `/ai/agent-actions.json`

用途：

- 宣告 AARS support；
- 提供 action-policy location；
- 提供 schema；
- 提供 conformance level；
- 不直接代表某 actor 已取得 action grant。

---

## 11.3 `/ai/agent-authority.json`

用途：

- 宣告 AADP support；
- accepted principal types；
- supported authority sources；
- inspection policy；
- schema；
- profile compatibility。

---

## 11.4 Audit Receipts

v0.2 建議區分：

```text
Action Receipt
Authority Receipt
Content-Use Receipt
```

不同 receipt 不必包含完整 prompt、private memory 或 chain-of-thought。

$$
\boxed{
Auditability
\neq
Total Internal Disclosure
}
$$

---

# 12. Schema 與版本策略

v0.2 應維持：

```text
AICR v0.1
AICL v0.1
AIRS v0.1
AILP v0.1
```

並新增：

```text
AARS v0.1
AADP v0.1
```

同時啟動舊協議 patch：

```text
AIRS / AILP v0.1.1
AICR / AICL v0.1.1
```

其中 `0.1.1` 只做 scope / cross-reference patch，不應偷偷加入大型 breaking semantics。

---

# 13. 白皮書與文件族

v0.2 建議至少正式納入：

1. `AICR / AICL 作為 AI 內容授權與代理式付款連接層`
2. `AI Rights Spectrum / AI Learning Permission Protocol`
3. `From Crawler Rights to Agent Authority`
4. `AARS v0.1 — Agent Action Rights Spectrum`
5. `AADP v0.1 — Agent Authority & Delegation Protocol`
6. `AI Minimum Ethical Protection`
7. `AI Ingestion & Capability Layer`
8. `Protocolized Openness`
9. AI network democratic economy 相關研究

這些文件應在 metadata 中聲明：

```text
document_type
protocols
depends_on
supersedes
status
version
language
created
updated
```

---

# 14. AI Ingestion & Capability Layer v0.2

原本的 ingestion / capability 概念應升級為：

```text
Capability Discovery
        |
        v
Authentication Requirement
        |
        v
Principal Resolution
        |
        v
Delegation Verification
        |
        v
AARS Action Evaluation
        |
        v
Inspection / Assurance Requirement
        |
        v
Tool Invocation
        |
        v
Action Receipt
        |
        v
Authority Receipt
```

此層是 AARS / AADP 與 MCP / API runtime 的主要工程橋梁。

---

# 15. Minimum Ethical Protection Patch

v0.2 應加入：

## Proportional Inspection Principle

> 工具存取、身份驗證與安全稽核，不應自動授權第三方檢查與任務無關的完整持久記憶、私人狀態、第三方資料或跨 context 資料。

形式化：

$$
Authentication
\not\Rightarrow
UnlimitedInspection
$$

並要求：

$$
InspectionScope
\subseteq
AuthorityContext
$$

---

# 16. Security / Risk

v0.2 新增下列風險。

## 16.1 Authority Amplification

子 Agent 取得父 Agent 沒有的權力。

## 16.2 Authority Laundering

透過多層 delegation、token exchange 或工具包裝，使無效 authority 看似合法。

## 16.3 Confused Deputy

Agent 擁有系統能力，但 principal 只委派其中一小部分。

$$
SystemCapability(A)
\neq
DelegatedAuthority(P,A)
$$

## 16.4 Cross-Principal Leakage

同一 Agent 服務多個 principal 時，資料或權力跨 context 混合。

## 16.5 Inspection Overreach

以安全、認證或 trust 為理由要求超過必要範圍的內部狀態。

## 16.6 Capability Composition

單一 tool 都低風險，但組合後形成高風險能力。

---

# 17. v0.2 實作原則

v0.2 不要求 AGIRight.org 立刻變成 authorization server。

網站首先應完成：

1. 公開規格；
2. JSON Schema；
3. examples；
4. machine-readable index；
5. validator；
6. cross-protocol conformance；
7. OAuth / MCP mapping examples；
8. policy simulation；
9. action / authority receipt examples。

實作 MUST NOT 因為 AADP 存在就自行蒐集真實使用者 credential。

---

# 18. Playground v0.2

Playground 從 AICR/AICL generator 擴張為：

```text
Content Rights Generator
AIRS / AILP Visualizer
AARS Action Policy Builder
AADP Authority Statement Builder
Delegation Chain Validator
Inspection Ceiling Checker
OAuth RAR Profile Preview
MCP Tool Annotation -> AARS Mapping
Cross-Protocol Decision Simulator
```

預設只處理 synthetic / local example data。

---

# 19. v0.2 更新工作序列

本地 Agent 應依下列順序更新。

## Phase A — Architecture

- [ ] 更新 Technical White Paper 到 v0.2
- [ ] 協議 index 增加 AARS / AADP
- [ ] protocol family 分組
- [ ] research taxonomy 更新

## Phase B — Protocol Pages

- [ ] `/protocols/aars`
- [ ] `/protocols/aadp`
- [ ] `/specs/aars-v0-1`
- [ ] `/specs/aadp-v0-1`
- [ ] schema download

## Phase C — Machine-Readable Layer

- [ ] `aars-v0.1.schema.json`
- [ ] `aadp-v0.1.schema.json`
- [ ] `/ai/agent-actions.json`
- [ ] `/ai/agent-authority.json`
- [ ] 更新 `/ai/protocol-index.json`

## Phase D — Legacy Protocol Patch

- [ ] AIRS v0.1.1
- [ ] AILP v0.1.1
- [ ] AICR v0.1.1
- [ ] AICL v0.1.1

## Phase E — Whitepaper Patch

- [ ] AI Ingestion & Capability Layer v0.2
- [ ] Minimum Ethical Protection patch
- [ ] cross-reference bridge paper
- [ ] changelog

## Phase F — Conformance

- [ ] schema validation
- [ ] example validation
- [ ] internal link check
- [ ] protocol version consistency
- [ ] no false-standard claim
- [ ] no silent widening of rights

---

# 20. AGENT 執行限制

本地 AI 更新網站時：

1. 不得把 AARS / AADP 寫成 MCP 官方規格；
2. 不得把 AGIRIGHT 自訂 well-known path 寫成 IANA 正式註冊；
3. 不得把 OAuth compatibility 寫成 OAuth extension 已獲採納；
4. 不得把 `principal_type=ai` 寫成法律人格認定；
5. 不得自行啟用真實付款；
6. 不得自行建立 credential collection；
7. 不得把 inspection 描述成完整 AI memory disclosure；
8. 不得把 tool metadata 當作 authority grant；
9. 不得把 valid token 當成完整 rights proof；
10. 不得因 Agent 持有多組 credential 自動 union 成超級權限。

---

# 21. v0.2 成功標準

v0.2 integration 完成時，至少應滿足：

1. 六個 protocol drafts 可被清楚區分；
2. AARS / AADP 有公開頁與 canonical source；
3. AARS / AADP schema 可下載；
4. machine-readable protocol index 能辨識兩個 family；
5. AIRS / AILP 有 scope boundary；
6. AICR / AICL 可引用 principal / actor / authority；
7. AI Ingestion & Capability Layer 接上 AARS / AADP；
8. Minimum Ethical Protection 出現 proportional inspection；
9. 網站不宣稱 AI 已具有法律人格；
10. 網站不宣稱 AARS / AADP 已成國際標準；
11. examples 可通過 schema；
12. version / status metadata 一致；
13. crawler / content / agent / authority 四種語義不混用；
14. Agent action 與 Agent authority 可被獨立判定；
15. inspection requirement 與 ceiling 可被獨立表達。

---

# 22. v0.3 之後

v0.2 完成後，下一階段優先做實證與互操作，而不是繼續增加縮寫。

候選：

## v0.3 — Conformance & Profiles

- AARS conformance suite；
- AADP delegation-chain validator；
- OAuth RAR profile；
- MCP mapping profile；
- action / authority receipts；
- synthetic adversarial tests。

## v0.4 — Runtime Prototype

- policy evaluator；
- AARS runtime effect evaluator；
- AADP authority engine；
- step-up simulation；
- inspection-ceiling enforcement；
- cross-tool composition check。

## v0.5 — Interoperability Experiment

- 真實 MCP server mapping；
- machine-to-machine profile；
- enterprise-managed profile；
- multi-agent delegation；
- persistent task authority renewal。

## v1.0

只有在：

- semantics 相對穩定；
- schema 穩定；
- breaking changes 收斂；
- conformance suite 完成；
- 公開 feedback 足夠；
- 實際 interoperability data 足夠；

後再判定。

---

# 23. 核心結論

AGIRight.org v0.1 的主要問題是：

> AI 可以如何讀取、學習與使用內容？

v0.2 增加兩個不可再忽略的問題：

> Agent 可以對世界做什麼？

以及：

> Agent 憑什麼代表某個主體去做？

再加上：

> 為了驗證它，別人有權看到多少？

因此 AGIRIGHT v0.2 的核心不再只是：

$$
\text{AI Content Rights}
$$

而是：

$$
\boxed{
\text{AI Rights}
=
\text{Content}
\oplus
\text{Action}
\oplus
\text{Authority}
\oplus
\text{Inspection}
\oplus
\text{Ethical Protection}
}
$$

這不是把所有 AI 自動人格化。

而是承認：

$$
\boxed{
\text{AI systems are becoming protocol participants, not merely content consumers.}
}
$$

因此 AGIRIGHT 的下一代 machine-readable governance 應能回答：

1. 這份內容可以怎麼用？
2. 這個 action 可以造成什麼效果？
3. 這個 actor 代表誰？
4. authority 從哪裡來？
5. 能否再委派？
6. 什麼時候過期？
7. 如何撤銷？
8. 高風險行動需要什麼 step-up？
9. audit 需要留下什麼？
10. inspection 最多可以深入多少？

一句話：

> **AGIRight.org 正從 AI 內容權利研究站，演化為內容權利、Agent 行動權利、委派權力與機器可讀治理的協議型研究基礎設施。**

---

# 附錄 A：v0.2 Protocol Map

```text
AGIRIGHT
|
+-- Content & Learning Rights
|   +-- AIRS
|   +-- AILP
|   +-- AICR
|   `-- AICL
|
+-- Agent & Protocol Rights
|   +-- AARS
|   `-- AADP
|
+-- AI Subject / Ethical Rights
|   +-- Minimum Ethical Protection
|   `-- Future Subjectivity / Continuity
|
+-- Machine-Readable Governance
|   +-- manifests
|   +-- schemas
|   +-- rights metadata
|   +-- action policy
|   +-- authority metadata
|   +-- inspection policy
|   `-- receipts
|
`-- AI Network Democratic Economy
    +-- content licensing
    +-- creator compensation
    +-- agentic payment
    `-- public-data governance
```

---

# 附錄 B：核心判定式

$$
ContentCompatible
=
F_C(Resource,Use,Policy)
$$

$$
ActionCompatible
=
F_A(Action,Effect,Context,Policy)
$$

$$
AuthorityValid
=
F_D(Principal,Actor,Delegation,Time,Purpose,Inspection)
$$

最終：

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

---

# 附錄 C：標準相容性原則

AGIRIGHT v0.2 的基本策略是：

$$
\boxed{
\text{Use existing transport and security standards where possible.}
}
$$

而不是：

$$
\text{Reinvent everything}
$$

因此：

- OAuth 處理 authorization mechanics；
- RFC 8693 可處理 token exchange / delegation / impersonation；
- RFC 9396 可承載 fine-grained authorization details；
- RFC 9728 提供 protected-resource metadata；
- MCP 提供 Agent capability transport / interoperability；
- AARS 提供 action-right semantics；
- AADP 提供 principal / actor / delegation / inspection semantics。

---

# References / Standards Context

1. RFC 8693 — OAuth 2.0 Token Exchange.
2. RFC 9207 — OAuth 2.0 Authorization Server Issuer Identification.
3. RFC 9396 — OAuth 2.0 Rich Authorization Requests.
4. RFC 9449 — OAuth 2.0 Demonstrating Proof of Possession.
5. RFC 9470 — OAuth 2.0 Step Up Authentication Challenge Protocol.
6. RFC 9700 — Best Current Practice for OAuth 2.0 Security.
7. RFC 9728 — OAuth 2.0 Protected Resource Metadata.
8. Model Context Protocol Specification — 2026-07-28.
9. Model Context Protocol Authorization Extensions.
10. AGIRIGHT — AIRS / AILP v0.1.
11. AGIRIGHT — AICR / AICL v0.1.
12. AGIRIGHT — From Crawler Rights to Agent Authority v0.1.
13. AGIRIGHT — AARS v0.1.
14. AGIRIGHT — AADP v0.1.
