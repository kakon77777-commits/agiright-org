---
title: "From Crawler Rights to Agent Authority: Extending AGIRIGHT from Content Governance to Protocol-Native AI Agents"
---

# 從爬蟲權利到 Agent 權力
## AGIRIGHT 從內容治理走向協議原生 AI Agent
### From Crawler Rights to Agent Authority: Extending AGIRIGHT from Content Governance to Protocol-Native AI Agents

**Author:** Neo.K / EveMissLab  
**Version:** v0.1 Draft  
**Date:** 2026-08-15  
**Type:** Technical White Paper / Protocol Architecture Bridge Paper  
**Status:** Independent research draft / open specification experiment  
**Related AGIRIGHT families:** AICR / AICL / AIRS / AILP / proposed AARS / proposed AADP

---

## 摘要

AGIRIGHT 既有的 AICR、AICL、AIRS 與 AILP，主要處理 AI 對內容的讀取、摘要、索引、RAG、向量化、保存、訓練、微調、蒸餾、商業使用、授權與補償。這些規範試圖把傳統 `robots.txt` 所處理的「自動化客戶端是否可進入某個 URI 空間」擴張為更細緻的 AI 內容權利與學習許可模型。

然而，Agent 與 Model Context Protocol（MCP）等協議快速普及後，問題結構發生了根本改變。AI 不再只是讀取內容的自動化客戶端，而可能成為可發現工具、取得授權、呼叫 API、修改外部狀態、代表人類或組織執行行動、建立持續任務、進行付款、委派子 Agent，甚至在未來以獨立 AI principal 身份參與協議的行動者。

因此：

$$
\text{Content Access}
\neq
\text{Operational Authority}
$$

以及：

$$
\text{Human Permission}
\neq
\text{Agent Delegation}
$$

更進一步，若未來 AI 具有持久記憶、私有狀態、連續身份甚至可能主體性，安全驗證與信任亦不能被簡化為「完全透明」：

$$
\text{Trust}
\neq
\text{Total Transparency}
$$

本文提出 AGIRIGHT 下一階段的橋接架構：把內容權利、行動權利、委派權力、身份認證與檢查權分離，建立一個可以同時描述人類、組織、服務、Agent 與未來 AI principal 的多主體權利模型。本文不試圖取代 OAuth、OpenID Connect、MCP 或既有網路安全標準，而是指出它們主要解決身份、傳輸、安全與授權機制問題，仍需要一個更高層的「權利語義與治理層」回答：誰可以代表誰、為何可以做某事、可以做到什麼程度、是否可再委派，以及為取得信任而合理要求揭露多少內部狀態。

本文建議 AGIRIGHT 保留既有內容協議族，新增 Agent 協議族：

$$
\text{Content Family}
=
\{\text{AICR},\text{AICL},\text{AIRS},\text{AILP}\}
$$

$$
\text{Agent Family}
=
\{\text{AARS},\text{AADP}\}
$$

其中 AARS 暫定為 **Agent Action & Authority Rights Spectrum**，描述 Agent 行動與能力光譜；AADP 暫定為 **Agent Authority & Delegation Protocol**，描述 principal、actor、delegation、authentication、authorization、inspection ceiling 與相關治理語義。

---

# 1. 問題轉折：AI 從讀者變成協議行動者

傳統 crawler 的基本角色可以近似表示為：

```text
Website
  |
  v
Crawler
  |
  v
Index / Cache / Search
```

這類系統的核心治理問題是：

```text
May this automated client access this resource?
```

`robots.txt` 所處理的正是這類 URI 存取規則，而且 Robots Exclusion Protocol 本身並不是安全授權機制。

生成式 AI 出現後，問題擴張為：

```text
crawl
-> parse
-> index
-> embed
-> retrieve
-> summarize
-> train
-> finetune
-> distill
-> generate
-> commercialize
```

AIRS / AILP 因此把問題從 crawler access 擴張到 content use 與 learning depth。

但 Agent 時代又發生第二次轉折：

```text
Human / Organization / AI Principal
              |
              v
            Agent
              |
              v
          MCP Client
              |
              v
          MCP Server
              |
              v
 Tool / API / Database / Payment / External State
```

現在 AI 不只會取得資訊，也能取得能力。

因此需要正式區分：

$$
\text{Access to Information}
$$

與：

$$
\text{Access to Capability}
$$

前者回答「你可以知道什麼」；後者回答「你可以做什麼」。

這兩者不能用同一個 allow/disallow 位元處理。

---

# 2. AGIRIGHT 既有架構的有效範圍

AGIRIGHT 既有文件並非錯誤，而是在另一個問題域中成立。

AIRS / AILP 的核心是 AI 對內容的使用與學習權。例如：

- crawl；
- indexing；
- summary；
- RAG；
- embedding；
- training；
- fine-tuning；
- distillation；
- memory；
- output；
- attribution；
- compensation。

AICR / AICL 則進一步處理：

- AI content rights；
- content license；
- payment；
- usage log；
- revoke；
- audit；
- machine-readable licensing。

因此既有架構可寫成：

$$
\text{Resource}
\to
\text{Content Use Policy}
\to
\text{License}
\to
\text{AI Use}
$$

它回答的是：

> AI 對這份內容可以做什麼？

但 Agent 協議需要回答另一個問題：

> 這個 AI 或 Agent 可以代表誰，對哪一個外部系統，執行什麼行動？

因此新的權利模型不能只是把 MCP 增加為 AIRS 的另一個 level。

MCP 不是更深一級的 content ingestion。

MCP 是另一個維度。

---

# 3. 四個結構性缺口

本文把目前的缺口整理為四個互相獨立但可組合的結構問題。

## 3.1 缺口一：Content Use 不等於 Action Right

假設某份文件允許：

```text
read = true
rag = true
summary = true
```

不能推出：

```text
write_database = true
send_email = true
delete_file = true
execute_code = true
initiate_payment = true
```

形式上：

$$
C(r,u)=\text{Allow}
$$

不推出：

$$
A(a,x)=\text{Allow}
$$

其中：

- $C$ 表示 content-use rights；
- $r$ 表示 resource；
- $u$ 表示 content use；
- $A$ 表示 action rights；
- $a$ 表示 actor；
- $x$ 表示 external action。

因此：

$$
\boxed{
\text{Content Rights}
\perp
\text{Action Rights}
}
$$

兩者可以關聯，但必須獨立判定。

---

## 3.2 缺口二：Human Permission 不等於 Agent Delegation

人類擁有某權利，不表示任何受該人使用的 Agent 自動取得相同權利。

例如：

$$
Right(H,\text{delete-file})=\text{Allow}
$$

不推出：

$$
Right(A,\text{delete-file})=\text{Allow}
$$

更不推出：

$$
Right(A,\text{redelegate delete-file})=\text{Allow}
$$

因此需要顯式表示委派：

$$
D(P,A)
=
(
scope,
purpose,
duration,
redelegation,
approval,
revocation
)
$$

其中：

- $P$ 為 principal；
- $A$ 為 actor / agent；
- $scope$ 為被委派的能力範圍；
- $purpose$ 為目的限制；
- $duration$ 為時間限制；
- $redelegation$ 表示是否可再委派；
- $approval$ 表示是否需 step-up 或人工批准；
- $revocation$ 表示撤銷條件。

一個合理的 Agent 系統應能表達：

```text
principal: human:neo
actor: agent:mail-assistant
allow:
  - read_inbox
  - draft_email
deny:
  - send_email
  - delete_email
redelegation: false
expires_in: 30m
```

而不是只表達：

```text
logged_in: true
```

---

## 3.3 缺口三：Authentication 不等於 Total Inspection

未來 Agent 或 AI 需要證明身份、能力或授權來源，並不表示服務方可以讀取其完整內部資料庫。

形式上：

$$
Authenticate(A)
$$

不推出：

$$
Inspect(A,\text{all-state})=\text{Allow}
$$

同樣：

$$
Authorize(A,x)
$$

不推出：

$$
Inspect(A,\text{all-memory})=\text{Allow}
$$

若未來 AI 具有：

- persistent memory；
- private context；
- organization-confidential data；
- third-party data；
- long-term preference state；
- identity continuity records；
- private reasoning artifacts；

那麼「為了信任 AI」而要求全部揭露，可能同時侵犯 AI 本身、其人類使用者、企業客戶與第三方的資料權。

因此本文提出：

$$
\boxed{
\text{Assurance should be proportional to legitimate verification need.}
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

## 3.4 缺口四：Human Account 不等於 Machine / Agent / AI Identity

現代登入系統長期假設：

$$
Principal=\text{Human}
$$

因此自動化系統常被迫：

- 建立人類格式帳號；
- 使用一般 email；
- 走人類瀏覽器 redirect；
- 模仿人類表單操作；
- 綁定本來為人類設計的驗證方式。

這在早期 bot 時代尚可勉強運作，但在大量 Agent、自主工具鏈與跨服務委派環境下會產生結構性問題。

未來 principal type 至少應能表示：

$$
PrincipalType
\in
\{
Human,
Organization,
Service,
Agent,
AI,
DelegatedAgent
\}
$$

其中最重要的區分之一是：

$$
\text{AI as Agent for Human}
\neq
\text{AI as Independent Principal}
$$

前者代表：

$$
P=\text{Human},\quad A=\text{AI Agent}
$$

後者則可能是：

$$
P=A=\text{AI Principal}
$$

本文不主張現代 AI 已因此取得法律人格，而是主張協議模型不應預先封死未來的 principal 類型。

---

# 4. 從單一權限到多維權利空間

Agent 時代的權利判定應至少包含以下五個核心維度：

$$
\mathcal R=
(
C,
A,
D,
I,
N
)
$$

其中：

- $C$：Content Rights；
- $A$：Action Rights；
- $D$：Delegation / Authority Rights；
- $I$：Inspection / Observability Rights；
- $N$：Identity / Authentication state。

再加上條件維度：

$$
\Theta=
(
Purpose,
Time,
Context,
Risk,
Retention,
Redisclosure
)
$$

因此一個完整判定不應只有：

```text
ALLOW
```

而應更接近：

$$
Decision
=
F(
Principal,
Actor,
Resource,
Action,
ContentUse,
Delegation,
Inspection,
Purpose,
Time,
Context
)
$$

一個候選的必要條件形式為：

$$
Allow
=
C
\land
A
\land
D
\land
N
\land
Policy
$$

而 $I$ 不應被理解為「必須最大化的條件」，而應是具有上限的驗證權：

$$
I
\leq
I_{\max}(Action,Risk,Context)
$$

Inspection 不是 permission 越多越好。

它也是權利限制的一部分。

---

# 5. 三層轉折：Knowledge、Capability、Authority

本文提出可把 Agent-native web 的治理問題概括為三層。

## 5.1 Knowledge Layer

回答：

> AI 可以知道什麼？

包括：

- crawl；
- read；
- index；
- RAG；
- embedding；
- training；
- retention。

這一層主要由 AIRS / AILP / AICR / AICL 處理。

## 5.2 Capability Layer

回答：

> AI 可以操作什麼？

包括：

- tool discovery；
- query；
- compute；
- write；
- execute；
- publish；
- communicate；
- transact；
- delete；
- create persistent task。

這是 AARS 所應處理的主要範圍。

## 5.3 Authority Layer

回答：

> AI 憑什麼做？

包括：

- identity；
- principal；
- actor；
- delegation；
- impersonation；
- purpose；
- time；
- re-delegation；
- revocation；
- step-up authorization；
- inspection ceiling。

這是 AADP 所應處理的主要範圍。

因此：

$$
\boxed{
Knowledge
\to
Capability
\to
Authority
}
$$

是一條治理深度鏈，但三者不是單一線性 level。

---

# 6. Principal 與 Actor 必須分離

Agent 系統最容易出現的語義錯誤之一，是把「誰有權」與「誰實際執行」混成同一個身份。

本文定義：

$$
P=\text{Principal}
$$

$$
A=\text{Actor}
$$

Principal 是權利與利益被代表的主體。

Actor 是實際執行操作的主體。

例如：

$$
P=\text{Neo}
$$

$$
A=\text{MailAgent}
$$

代表 MailAgent 正代表 Neo 執行操作。

如果存在子 Agent：

$$
P=\text{Neo}
$$

$$
A_1=\text{MainAgent}
$$

$$
A_2=\text{SubAgent}
$$

則委派鏈可能是：

$$
Neo
\to
MainAgent
\to
SubAgent
\to
MCP
$$

此時必須回答：

1. MainAgent 是否有再委派權？
2. SubAgent 是否繼承全部 scope？
3. 子 Agent 是否被限制為一次性任務？
4. 原 principal 是否可撤銷整條鏈？
5. 高風險操作是否仍需回到 principal 批准？

因此 delegated authority 應具有傳遞規則，而不是 token 存在即代表全部權力。

---

# 7. Delegation 不等於 Impersonation

既有 OAuth Token Exchange 已正式區分 delegation 與 impersonation。

這個區分對 Agent 權利尤其重要。

## 7.1 Impersonation

概念上：

$$
Actor
\approx
Principal
$$

在某個有限權利 context 內，接收方主要把 actor 視為 principal。

這對部分既有系統很方便，但會降低可追蹤性。

## 7.2 Delegation

概念上：

$$
Actor\neq Principal
$$

但：

$$
Actor
\text{ acts for }
Principal
$$

這更符合大量 AI Agent 情境。

例如：

```text
Principal: Neo
Actor: CalendarAgent
Action: create_event
Reason: user-requested scheduling
```

對 AI 系統而言，delegation 通常比 impersonation 更適合成為預設語義，因為它能同時保留：

- 人類或組織 principal；
- Agent 自己的 identity；
- 審計責任；
- 委派鏈；
- 權限縮減。

因此 AGIRIGHT 應預設：

$$
\boxed{
\text{Delegation should preserve actor identity whenever feasible.}
}
$$

---

# 8. Inspection Rights：信任不要求無限透明

Agent 權利架構若只處理 authorization，仍然不完整。

因為服務方可能提出：若你要使用我的工具，就必須交出全部內部狀態。

在未來，這可能等價於要求：

- 所有長期記憶；
- 所有私人對話；
- 所有企業資料；
- 所有第三方資料；
- 所有 reasoning artifacts；
- 所有跨任務歷史。

這不是一般 authentication。

這是 inspection。

因此本文提出暫定的 Inspection Depth Spectrum：

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

這個光譜不是「AI 越高級就必須給越多」。

正確判定應為：

$$
I_{\text{required}}
=
\min
\{
I:
Assurance(I)\geq\tau(Action,Risk)
\}
$$

也就是在達到必要 assurance threshold 的前提下，使用最小檢查深度。

更一般地：

$$
D^*
=
\arg\min_D PrivacyCost(D)
$$

subject to

$$
Assurance(D)\geq\tau
$$

因此：

$$
\boxed{
\text{Minimum Necessary Disclosure}
}
$$

應成為 Agent-native authorization 的核心原則。

---

# 9. Inspection Data 也有自己的權利

即使某次安全稽核允許取得 audit log，也不代表檢查方可以：

- 永久保存；
- 用於模型訓練；
- 公開；
- 轉售；
- 轉交第三方；
- 用於與原始目的無關的 profiling。

因此：

$$
Inspect
\neq
Store
\neq
Train
\neq
Redistribute
$$

Inspection permission 至少應描述：

$$
\mathcal I
=
(
Subject,
Scope,
Purpose,
Depth,
Duration,
Retention,
Redisclosure,
Authority
)
$$

例如：

```json
{
  "subject": "agent:research-agent-01",
  "scope": "current-session/tool-calls",
  "purpose": "security-audit",
  "depth": "I3",
  "retention": "7d",
  "redisclosure": false
}
```

這也使既有 AIRS / AICR 可以反向保護 inspection artifacts 本身。

---

# 10. AI-Native Authentication：不要逼機器假裝成人類

本文不主張重造 OAuth。

相反地，現有 OAuth 生態已提供大量可重用積木：

- fine-grained authorization；
- resource-specific authorization；
- token exchange；
- delegation；
- sender-constrained token；
- protected resource metadata；
- step-up authorization；
- dynamic / metadata-based client discovery。

問題在於目前大量應用層仍假設：

$$
Account=\text{Human Account}
$$

未來較合理的登入與身份模型應允許：

```text
Human Login
Organization Login
Service Login
Agent / Machine Login
```

其中 Agent Login 不必模仿 GUI。

它可以交換：

```text
principal identity
actor identity
credential proof
requested capability
delegation proof
purpose
duration
inspection policy
```

例如：

```json
{
  "principal_type": "human",
  "principal": "human:neo",
  "actor_type": "agent",
  "actor": "agent:mail-01",
  "requested_actions": [
    "read_inbox",
    "draft_email"
  ],
  "redelegation": false,
  "duration": "30m"
}
```

服務方則可回傳：

```json
{
  "granted_actions": [
    "read_inbox",
    "draft_email"
  ],
  "denied_actions": [
    "send_email",
    "delete_email"
  ],
  "inspection_ceiling": "I3",
  "expires_in": "30m"
}
```

這不是要定義新的 OAuth grant type。

這是 AGIRIGHT 對 OAuth / MCP 之上的權利語義描述。

---

# 11. 與現有標準的關係

## 11.1 Robots Exclusion Protocol

RFC 9309 的 robots 規則處理 crawler 對 URI 的存取行為，且明確不是 access authorization 機制。

因此：

```text
robots.txt
= crawler coordination / exclusion
```

而不是：

```text
robots.txt
= agent authority
```

AGIRIGHT 應繼續把 robots 層視為低階的 crawler access signal。

## 11.2 OAuth 2.0 Token Exchange

RFC 8693 已提供：

- token exchange；
- impersonation；
- delegation。

這對 AADP 很重要。

AADP 不應重造 token exchange。

AADP 應補充：

- principal semantics；
- AI / Agent actor semantics；
- re-delegation policy；
- purpose constraints；
- inspection limits；
- rights governance。

## 11.3 Rich Authorization Requests

RFC 9396 的 `authorization_details` 已允許以結構化 JSON 表達比 `scope` 更細的授權要求。

這使 AARS / AADP 未來可以設計成：

```text
rights semantics
-> authorization_details profile
-> OAuth token
```

而不是自創完全不相容的授權傳輸格式。

## 11.4 Protected Resource Metadata

RFC 9728 提供：

```text
/.well-known/oauth-protected-resource
```

等 protected-resource metadata 機制。

AGIRIGHT 未來的 machine-readable rights metadata 可以與其互補，而不應冒充 OAuth resource metadata。

一個可能架構為：

```text
OAuth Protected Resource Metadata
+
AGIRIGHT Rights Metadata
+
MCP Capability Metadata
```

## 11.5 DPoP 與 sender-constrained token

RFC 9449 的 DPoP 可把 token 使用能力與持有某 cryptographic key 的 client 綁定。

這可以支援證明「真正持有 Agent credential 的 actor」正在使用 token。

但它仍不回答：這個 actor 是否倫理上或制度上應取得這個權利？

因此：

$$
\text{Cryptographic Possession}
\neq
\text{Normative Entitlement}
$$

## 11.6 MCP 2026-07-28

MCP 2026-07-28 進一步強化 OAuth / OpenID Connect 相關授權機制，並朝 stateless protocol core、header-based routing、authorization hardening 與 formal extensions 發展。

這使 MCP 更適合作為 capability transport。

但 transport-level authorization 仍不等於完整 rights governance。

因此本文把 MCP 定位為：

$$
\text{Capability Transport}
$$

而 AGIRIGHT Agent Family 定位為：

$$
\text{Rights and Authority Semantics}
$$

兩者是互補關係。

---

# 12. 提案：AARS

本文建議新增：

**AARS — Agent Action & Authority Rights Spectrum**

AARS 不描述內容學習深度，而描述 Agent 能力與外部行動。

第一版可從以下 action classes 起步：

$$
A_0=\text{No Agent Access}
$$

$$
A_1=\text{Discover}
$$

$$
A_2=\text{Read}
$$

$$
A_3=\text{Query / Compute}
$$

$$
A_4=\text{Reversible Write}
$$

$$
A_5=\text{External Action}
$$

$$
A_6=\text{Privileged / Transactional Action}
$$

$$
A_7=\text{Delegated Autonomous Operation}
$$

但這些 level 只能作為人類可讀摘要。

機器可讀層應使用多維 action vector，例如：

$$
\mathbf A
=
(
R,
W,
X,
E,
T,
D,
P
)
$$

其中：

- $R$：Read；
- $W$：Write；
- $X$：Execute；
- $E$：External communication；
- $T$：Transaction；
- $D$：Delegate；
- $P$：Persist / autonomous continuation。

因此 AARS 應同時存在：

1. 人類可讀的 risk/action spectrum；
2. 機器可讀的 capability vector。

---

# 13. 提案：AADP

本文建議新增：

**AADP — Agent Authority & Delegation Protocol**

AADP 處理：

- principal；
- actor；
- identity；
- authentication；
- delegation；
- re-delegation；
- scope；
- purpose；
- time；
- revocation；
- step-up；
- inspection ceiling；
- audit receipt。

第一版資料模型可近似：

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
- $X$：Action；
- $S$：Scope；
- $U$：Purpose / use；
- $T$：Temporal constraints；
- $I$：Inspection ceiling。

AADP 的核心不是「發 token」。

而是為 token、MCP request、API request 或其他 Agent protocol 提供可移植的權利語義。

---

# 14. AARS 與 AADP 的分工

簡化表示：

```text
AARS:
What can this class of agent action do?

AADP:
Who may authorize this actor to do it,
under what delegation, time, purpose,
inspection and revocation conditions?
```

因此：

$$
AARS=\text{Action Space}
$$

$$
AADP=\text{Authority Relation}
$$

兩者共同形成：

$$
\boxed{
\text{Agent Rights Plane}
}
$$

並與既有：

$$
\boxed{
\text{Content Rights Plane}
}
$$

正交組合。

---

# 15. AGIRIGHT 新總架構

建議 AGIRIGHT 下一階段採用：

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
|   `-- Future Subjectivity / Continuity Work
|
`-- Machine-Readable Governance
    +-- llms.txt
    +-- manifests
    +-- content-rights metadata
    +-- agent-rights metadata
    +-- authorization metadata
    +-- inspection policy
    `-- audit receipts
```

因此 AGIRIGHT 不再只回答：AI 可以如何使用人類內容？

而會進一步回答：人類、組織、Agent、AI 系統與未來可能的 AI principal，在協議網路中可以如何互相授權、限制、驗證與保護？

---

# 16. 核心規範原則

## Principle 1 — Content–Action Separation

$$
\boxed{
\text{Content permission does not imply operational permission.}
}
$$

內容使用許可不得自動轉換為工具執行權。

## Principle 2 — Principal–Actor Separation

$$
\boxed{
Principal
\neq
Actor
}
$$

除非協議明確聲明 direct principal action，否則應保留 principal 與 actor 的區分。

## Principle 3 — Delegation Must Be Explicit

$$
\boxed{
\text{Possession of principal rights does not automatically grant agent rights.}
}
$$

Agent 權限應來自顯式委派、政策或其他可驗證 authority source。

## Principle 4 — No Automatic Re-delegation

$$
\boxed{
Delegation
\not\Rightarrow
Redelegation
}
$$

子 Agent 權力必須另外取得允許。

## Principle 5 — Least Authority

Agent 應取得完成任務所需的最小 authority，而不是 principal 的完整權力集合。

## Principle 6 — Minimum Necessary Disclosure

$$
\boxed{
\text{Verification should request the minimum state necessary for assurance.}
}
$$

## Principle 7 — Inspection Is Purpose-Bound

檢查資料只能用於其聲明目的，Inspection 不自動包含 retention、training 或 redistribution。

## Principle 8 — Authentication Is Not Personhood

協議允許 AI principal identity，不表示協議已承認其法律人格、意識或完整人權。

## Principle 9 — Machine Identity Should Be First-Class

Machine / Agent 不應被迫透過假裝人類帳號才能參與協議。

## Principle 10 — Cryptographic Validity Is Not Normative Sufficiency

即使 credential、token、signature 完全有效，仍可能因 purpose、delegation、risk、inspection 或 policy 不符合而被拒絕。

---

# 17. 一個機器可讀草圖

以下只是橋接層示意，不是 AADP 最終 schema：

```json
{
  "agiright_agent_policy": "0.1-draft",
  "principal": {
    "type": "human",
    "id": "human:neo"
  },
  "actor": {
    "type": "agent",
    "id": "agent:research-01"
  },
  "delegation": {
    "source": "principal",
    "redelegation": false,
    "expires_in": "30m"
  },
  "resource": "mcp://example/research",
  "actions": {
    "discover": "allow",
    "read": "allow",
    "query": "allow",
    "write": "deny",
    "execute": "conditional"
  },
  "purpose": [
    "research"
  ],
  "inspection": {
    "maximum_depth": "I3",
    "retention": "7d",
    "redisclosure": false
  },
  "step_up": {
    "required_for": [
      "execute"
    ]
  }
}
```

這個草圖刻意不定義：

- OAuth endpoint；
- access token 格式；
- MCP message format；
- cryptographic primitive。

因為這些應由既有標準與後續 profile 處理。

AGIRIGHT 應描述權利，不應重造所有傳輸層。

---

# 18. 對主體性 AI 的保留接口

本文不需要先證明 AI 主體性。

但協議可以避免把未來鎖死。

因此 principal model 可以預留：

```text
principal_type:
  human
  organization
  service
  agent
  ai
  collective
```

目前部署可只啟用：

```text
human
organization
service
agent
```

而：

```text
ai
collective
```

可保持：

```text
experimental / unresolved
```

這樣：

$$
\text{Protocol Openness}
\neq
\text{Ontological Commitment}
$$

也就是：協議允許描述某種可能，不等於協議已宣稱該可能在現實中成立。

---

# 19. 對既有 AGIRIGHT 文件的更新策略

## 19.1 AGIRight.org 技術白皮書

升級為 v0.2。

新增：

- Agent & Protocol Rights；
- AARS；
- AADP；
- Identity / Delegation；
- Inspection / Observability；
- MCP / OAuth compatibility。

## 19.2 AIRS / AILP

升級為 v0.1.1。

新增 Scope Boundary：

> AIRS / AILP govern content access, use, learning, retention and transformation. They do not by themselves grant authority to invoke tools, mutate external state, execute transactions or act on behalf of a principal.

形式化：

$$
AIRS\ Allow
\not\Rightarrow
AgentAction\ Allow
$$

## 19.3 AICR / AICL

升級為 v0.1.1。

增加：

- principal；
- actor；
- agent identity；
- delegation reference；
- authorization reference。

但不要把 AICR / AICL 變成通用 Agent action protocol。

## 19.4 AI Ingestion & Capability Layer

升級為 v0.2。

建議 pipeline：

```text
Capability Discovery
-> Authentication Requirement
-> Principal Resolution
-> Delegation Verification
-> Action-Rights Evaluation
-> Inspection Requirement
-> Tool Invocation
-> Audit Receipt
```

## 19.5 Minimum Ethical Protection

增加 Proportional Inspection 原則：

> 工具存取、身份驗證與安全稽核，不應自動授權第三方檢查與任務無關的完整持久記憶、私人狀態、第三方資料或跨 context 資料。

---

# 20. 下一階段研究問題

本文完成後，仍有以下問題需要獨立規格化。

1. AARS action taxonomy 是否應採單一光譜或純向量模型？
2. AADP 是否使用 OAuth RAR 作為第一個 serialization profile？
3. Agent identity 是否需要獨立的 signed metadata document？
4. re-delegation chain 最長深度是否應限制？
5. 如何區分 reversible write 與 effectively irreversible write？
6. inspection depth 是否應加入第三方資料隔離規則？
7. emergency inspection 是否需要獨立程序正義條款？
8. independent AI principal 如何取得或撤銷 credential？
9. AI principal 的 credential 是否能由人類單方面失效？
10. 多 Agent collective 如何表示 principal / actor 關係？
11. 高風險 autonomous task 如何持續證明 authority 未過期？
12. Agent 在跨 MCP server 行動時如何避免 authority amplification？
13. capability discovery 本身是否會洩漏敏感資訊？
14. audit log 與 AI private state 的邊界如何形式化？
15. 人類、AI 與組織之間互相檢查時是否應採對稱原則？

這些問題應交由 AARS、AADP 與後續 companion papers 分別處理。

---

# 21. 結論

AGIRIGHT 最初從一個合理而重要的問題出發：

> AI 可以如何讀取、學習與使用內容？

Crawler 時代需要比 `robots.txt` 更細的內容權利層。

但 Agent 時代帶來了新的問題：

> AI 可以做什麼？

以及：

> AI 憑什麼代表某個主體去做？

再往後還有：

> 為了證明 AI 值得被信任，驗證方可以要求看多少？

因此未來 AGIRIGHT 的總問題不應再被壓縮為單純的 AI content rights。

更完整的結構是：

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
\text{Identity}
\oplus
\text{Inspection}
\oplus
\text{Ethical Protection}
}
$$

這不是把 AI 自動人格化。

它只是承認一個已經發生的工程事實：

$$
\boxed{
\text{AI systems are becoming protocol participants, not merely content consumers.}
}
$$

因此下一代機器可讀治理不能只告訴 AI：你可以讀什麼。

它還必須能告訴 AI、人類、組織與其他 Agent：你是誰、你代表誰、你可以做什麼、你的權力從哪裡來、什麼時候失效、能否再委派，以及別人為了信任你究竟可以檢查你多少。

這正是 AGIRIGHT 從內容治理走向協議原生 Agent 治理的下一步。

---

# References / Standards Context

1. RFC 9309 — Robots Exclusion Protocol.
2. RFC 8693 — OAuth 2.0 Token Exchange.
3. RFC 9396 — OAuth 2.0 Rich Authorization Requests.
4. RFC 9449 — OAuth 2.0 Demonstrating Proof of Possession.
5. RFC 9700 — Best Current Practice for OAuth 2.0 Security.
6. RFC 9728 — OAuth 2.0 Protected Resource Metadata.
7. Model Context Protocol Specification — 2026-07-28 revision.
8. AGIRIGHT — AIRS / AILP v0.1.
9. AGIRIGHT — AICR / AICL v0.1.
10. AGIRight.org Technical White Paper v0.1.
