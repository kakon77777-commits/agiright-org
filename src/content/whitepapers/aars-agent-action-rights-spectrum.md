---
title: "AARS v0.1 — Agent Action Rights Spectrum"
---

# AARS v0.1 — Agent Action Rights Spectrum
## Agent 行動權利光譜：協議原生 AI / Agent 的行動、風險、副作用與可授權能力模型

**Author:** Neo.K / EveMissLab  
**Version:** v0.1 Draft  
**Date:** 2026-08-15  
**Type:** Open Protocol Draft / Rights Semantics Specification  
**Status:** Independent research draft / open specification experiment  
**Parent document:** *From Crawler Rights to Agent Authority: Extending AGIRIGHT from Content Governance to Protocol-Native AI Agents*  
**Companion protocol:** proposed AADP — Agent Authority & Delegation Protocol

---

## 摘要

AIRS、AILP、AICR 與 AICL 主要描述 AI 對內容的讀取、索引、摘要、RAG、嵌入、訓練、微調、蒸餾、保存、商業使用、授權與補償。這些規範回答的是：

> AI 可以如何使用一項資訊資源？

然而，當 AI 透過 API、MCP、Agent runtime、瀏覽器控制器、資料庫工具、付款接口、工作流系統與其他協議取得外部能力後，單純的內容權利已不足以描述其行為邊界。

一個 Agent 可能：

- 讀取資料；
- 執行查詢；
- 建立或修改檔案；
- 發送郵件；
- 發布公開內容；
- 建立日曆事件；
- 執行程式碼；
- 變更權限；
- 刪除資料；
- 發起交易；
- 建立持續任務；
- 呼叫另一個 Agent；
- 將能力再委派給子 Agent。

因此：

$$
\boxed{
\text{Content Permission}
\not\Rightarrow
\text{Action Permission}
}
$$

本文提出 **AARS — Agent Action Rights Spectrum**。AARS 是一個描述 Agent 行動類型、外部副作用、風險特徵、可逆性、持續性、開放世界接觸、交易性與委派能力的機器可讀權利語義層。

AARS 不取代 OAuth、MCP、API key、ACL、RBAC、ABAC 或其他既有認證與授權系統。它回答的問題是：

> 一個 action 是什麼性質？  
> 它可以改變什麼？  
> 它的外部作用域有多大？  
> 是否可逆？  
> 是否涉及第三方、公開世界、金錢、權限或長期自治？  
> 在此 policy 下，這類 action 是允許、禁止、條件允許，還是需要升級批准？

AARS 將「人類可讀光譜」與「機器可讀向量」分離。人類可使用 $A_0$ 到 $A_7$ 快速理解行動深度；機器實作則應使用多維 action vector 與 effect modifiers，不應只依賴單一風險分數或單一 level。

本文亦正式區分：

$$
\text{Tool Description}
\neq
\text{Action Right}
$$

以及：

$$
\text{Static Tool Metadata}
\neq
\text{Runtime Effect}
$$

這使 AARS 可以與 MCP 現有的 tool annotations 相容，同時補足它們作為非可信 hints 時無法承擔的權利語義。

---

# 0. 文件範圍與規範語言

## 0.1 AARS 處理什麼

AARS 處理：

1. Agent action taxonomy；
2. action effect vector；
3. external side effects；
4. reversibility；
5. idempotency；
6. open-world reach；
7. transaction / value transfer；
8. privilege / security changes；
9. delegation capability；
10. persistence / autonomous continuation；
11. blast radius；
12. static tool profile；
13. runtime action profile；
14. action policy；
15. action decision；
16. approval / step-up requirement；
17. action receipt；
18. multi-action composition risk。

---

## 0.2 AARS 不處理什麼

AARS 不直接定義：

- 使用者密碼；
- OAuth grant type；
- access token format；
- OpenID Connect identity；
- MCP transport；
- cryptographic primitive；
- payment rail；
- 法律人格；
- AI 是否具有意識；
- principal 如何授權 actor；
- delegation chain 的法律效力；
- inspection 的完整程序規範。

其中 principal、actor、delegation、inspection ceiling、revocation 與 authority source 主要交由 AADP 處理。

因此：

$$
AARS=\text{Action Semantics}
$$

$$
AADP=\text{Authority Semantics}
$$

---

## 0.3 規範詞

本文使用下列規範詞：

```text
MUST
MUST NOT
SHOULD
SHOULD NOT
MAY
```

它們表示本草案內部的規範強度，不表示 AARS 已成為任何國際標準。

---

# 1. 設計原則

## 1.1 Content–Action Separation

$$
\boxed{
\text{Content permission does not imply operational permission.}
}
$$

例如允許 RAG 不代表允許寫入資料庫。

---

## 1.2 Description–Authorization Separation

工具宣稱自己是安全的，不等於工具已取得行動權。

$$
\boxed{
\text{Descriptive Metadata}
\not\Rightarrow
\text{Authorization}
}
$$

---

## 1.3 Static–Runtime Separation

同一個工具可能因參數不同而產生完全不同的風險。

例如：

```text
send_email(to = one internal recipient)
```

與：

```text
send_email(to = 100000 public recipients)
```

不是同一個 runtime effect。

因此：

$$
E_{\text{static}}(tool)
\neq
E_{\text{runtime}}(tool,args,context)
$$

AARS MUST 支援 invocation-level evaluation。

---

## 1.4 Least Action Right

Agent SHOULD 只取得完成任務所需的最小 action set。

$$
\boxed{
Grant(A)
\subseteq
NecessaryActions(Task)
}
$$

理想狀態為：

$$
Grant(A)
=
MinimalSufficientActions(Task)
$$

---

## 1.5 Unknown Is Not Allow

對會改變外部狀態的 action，如果 effect 無法判定，實作 MUST NOT 把未知狀態默認成完全允許。

$$
UnknownEffect
\not\Rightarrow
Allow
$$

---

## 1.6 Rights Are Contextual

同一 action 在不同 context 下可以得到不同決策：

$$
Decision
=
F(Action,Resource,Context,Policy)
$$

因此 AARS 不宣稱 action 具有永恆固定的權利等級。

---

## 1.7 Risk Is Not One-Dimensional

AARS 不要求把所有行動壓縮成唯一 scalar risk score。

$$
\boxed{
Risk
\neq
\text{single universal number}
}
$$

因為：

- 高敏感度 read；
- 低金額 payment；
- 公開 posting；
- local code execution；

可能在不同軸上具有完全不同的風險。

---

# 2. 核心術語

## 2.1 Action

**Action**：Agent、AI、service 或其他 actor 對某個 resource、environment 或 external subject 發起的可觀測操作。

---

## 2.2 Tool

**Tool**：提供一個或多個 action capability 的接口。

Tool 與 Action 不應被視為同義。

一個 tool 可以產生多種 action effects。

---

## 2.3 Invocation

**Invocation**：對 tool / endpoint / function 的一次具體呼叫。

---

## 2.4 Effect

**Effect**：Invocation 對資訊、狀態、外部世界、價值、權限或未來執行所造成的結果類型。

---

## 2.5 Resource

**Resource**：Action 所讀取、修改、執行、交易、發布或控制的對象。

---

## 2.6 Open World

**Open World**：Action 的效果可能觸及 actor 或 principal 控制域之外的第三方、公共網路、外部服務、現實世界對象或不可完整枚舉的參與者。

---

## 2.7 Persistence

**Persistence**：Action 是否建立超出目前 invocation 或 session 的持續狀態、排程、訂閱、自動化或自主行為。

---

## 2.8 Reversibility

**Reversibility**：Action 的結果能否在合理成本與完整性條件下復原。

---

## 2.9 Blast Radius

**Blast Radius**：Action 可能影響的資源、帳號、第三方、系統、價值或公開受眾範圍。

---

# 3. 人類可讀 AARS Spectrum

AARS 提供 $A_0$ 至 $A_7$ 作為快速溝通層。

這些 level 不是機器判定的唯一依據，也不構成嚴格總序。

---

## 3.1 $A_0$ — No Agent Access

Agent 不具有該 capability。

典型例子：

```text
tool unavailable
endpoint denied
capability hidden
```

---

## 3.2 $A_1$ — Discover

只允許發現能力與 metadata，不執行實際資源操作。

例如：

- list tools；
- list schemas；
- discover server capabilities；
- read capability metadata。

---

## 3.3 $A_2$ — Read

允許觀察既有狀態，但不修改環境。

例如：

- read file；
- fetch record；
- read calendar；
- inspect status；
- search public web。

注意：Read 不代表低敏感度。

讀取醫療資料、企業機密或完整私人記憶仍可能是高風險 action。

---

## 3.4 $A_3$ — Query / Compute

允許在不產生持久外部副作用的前提下執行查詢、計算或暫時轉換。

例如：

- database query；
- local calculation；
- transient conversion；
- sandbox analysis；
- dry-run simulation。

---

## 3.5 $A_4$ — Reversible Mutation

允許修改狀態，但預期具有可確認的復原路徑。

例如：

- create draft；
- edit reversible document；
- add label；
- create local branch；
- modify staging state。

---

## 3.6 $A_5$ — External Action

允許對外部主體或開放世界產生副作用。

例如：

- send email；
- publish post；
- create external calendar event；
- submit form；
- invoke third-party service；
- send message。

這些 action 即使 technically reversible，也可能在社會層面不可真正撤回。

---

## 3.7 $A_6$ — Privileged / Destructive / Transactional Action

允許高權限、破壞性、價值轉移或難以復原的操作。

例如：

- delete production data；
- transfer funds；
- change access control；
- revoke credential；
- deploy production；
- execute privileged command；
- terminate service。

---

## 3.8 $A_7$ — Persistent / Delegated Autonomous Operation

允許 Agent 建立持續、自動、多步、再委派或跨工具工作流。

例如：

- recurring autonomous task；
- long-running agent；
- child-agent delegation；
- autonomous trading within a mandate；
- continuous external monitoring plus action；
- persistent workflow that can mutate state。

$A_7$ 並不表示「無限權力」。

正確語義應為：

$$
A_7
+
BoundedScope
+
BoundedTime
+
BoundedAuthority
$$

而不是：

$$
A_7=\text{Unlimited Autonomy}
$$

---

# 4. 為什麼 Spectrum 不足以單獨做機器判定

假設：

```text
Action X = A5
Action Y = A5
```

X 可能是：

```text
send one internal email
```

Y 可能是：

```text
publish a message to ten million users
```

兩者同屬 External Action，但 blast radius 不同。

因此：

$$
Level(X)=Level(Y)
$$

不推出：

$$
Risk(X)=Risk(Y)
$$

AARS 的 normative machine model 必須使用 action vector。

---

# 5. AARS Action Vector

本文提出：

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

其中每一維可採：

```text
none
bounded
significant
high
unknown
```

或實作自行映射為可驗證 enum。

---

## 5.1 $R$ — Read

表示 action 是否取得資訊。

包括：

- metadata；
- content；
- private state；
- secrets；
- third-party data。

---

## 5.2 $W$ — Write / Mutation

表示 action 是否改變持久狀態。

包括：

- create；
- update；
- delete；
- overwrite；
- permission change。

---

## 5.3 $X$ — Execute

表示 action 是否觸發程式碼、命令、模型、工作流或其他執行能力。

---

## 5.4 $E$ — External Communication / Open-World Effect

表示 action 是否對 actor 控制域外的對象發送資訊或造成可見效果。

---

## 5.5 $T$ — Transaction / Value Transfer

表示 action 是否涉及：

- money；
- credit；
- tokenized value；
- purchase；
- contractual commitment；
- billable resource；
- scarce quota。

---

## 5.6 $G$ — Delegation

表示 action 是否能建立新的 actor、sub-agent、credential、delegation 或 capability handoff。

---

## 5.7 $P$ — Persistence / Autonomous Continuation

表示 action 是否建立在 invocation 結束後仍持續存在的行為。

例如：

- schedule；
- subscription；
- daemon；
- recurring task；
- persistent monitor；
- autonomous loop。

---

# 6. Effect Modifiers

Action Vector 之外，AARS MUST 允許描述 effect modifiers。

建議最小集合：

$$
\mathbf m
=
(
Rev,
Idem,
OW,
BR,
Sens,
Priv,
Dur,
Conf
)
$$

---

## 6.1 $Rev$ — Reversibility

建議 enum：

```text
full
partial
compensatable
none
unknown
```

`compensatable` 表示無法真正回復原狀，但可以用補償 action 降低損害。

例如寄出的 email 通常不是 full reversible。

---

## 6.2 $Idem$ — Idempotency

建議 enum：

```text
true
false
conditional
unknown
```

---

## 6.3 $OW$ — Open-World Reach

建議 enum：

```text
closed
bounded_external
open
unknown
```

---

## 6.4 $BR$ — Blast Radius

建議結構：

```text
resource_count
subject_count
tenant_scope
public_reach
geographic_scope
system_scope
```

不要求所有欄位存在。

---

## 6.5 $Sens$ — Sensitivity

表示受影響資料或資源敏感度。

建議：

```text
public
internal
confidential
restricted
regulated
safety_critical
unknown
```

這不是法律分類標準，而是 policy hook。

---

## 6.6 $Priv$ — Privilege Impact

建議：

```text
none
user
workspace
admin
security_boundary
root_or_equivalent
unknown
```

---

## 6.7 $Dur$ — Duration

描述 effect 持續時間：

```text
transient
session
time_bounded
persistent
recurring
unknown
```

---

## 6.8 $Conf$ — Effect Confidence

描述系統對 effect metadata 的可信程度：

```text
verified
trusted_declared
self_declared
inferred
unknown
```

這一維用來避免把未驗證 tool annotation 當成真實安全契約。

---

# 7. Action Taxonomy

AARS v0.1 建議 action verbs 至少包含：

```text
discover
read
query
compute
create
update
append
delete
execute
communicate
publish
transact
change_privilege
issue_credential
revoke_credential
delegate
schedule
subscribe
monitor
cancel
terminate
```

實作 MAY 擴充 verbs。

但新增 verb SHOULD 映射回 action vector 與 effect modifiers。

---

# 8. Decision States

AARS 不採單純 boolean。

建議：

```text
allow
deny
conditional
approval_required
step_up_required
unavailable
unknown
```

其中：

## allow

目前 context 下可以執行。

## deny

明確禁止。

## conditional

條件滿足後可以執行。

## approval_required

需要 principal 或指定 reviewer 批准。

## step_up_required

需要更高強度 authentication / authorization。

## unavailable

系統不提供此 capability。

## unknown

無法安全決定。

對 mutating / external / transactional action：

$$
unknown
\not\Rightarrow
allow
$$

---

# 9. Static Tool Profile 與 Runtime Action Profile

## 9.1 Static Tool Profile

描述 tool 一般能力：

```json
{
  "tool": "mail.send",
  "possible_effects": {
    "read": "bounded",
    "write": "bounded",
    "execute": "none",
    "external": "significant",
    "transaction": "none",
    "delegation": "none",
    "persistence": "none"
  }
}
```

---

## 9.2 Runtime Action Profile

描述某次 invocation：

```json
{
  "tool": "mail.send",
  "invocation": {
    "recipients": 1,
    "external_domain": false,
    "attachments": 0
  },
  "evaluated_effects": {
    "external": "bounded",
    "blast_radius": {
      "subject_count": 1
    },
    "reversibility": "compensatable"
  }
}
```

因此：

$$
Effect
=
Evaluate(tool,args,resource,context)
$$

而不是只做：

$$
Effect
=
Lookup(tool)
$$

---

# 10. AARS Policy Object

一個 policy 可以描述某 resource / capability 下允許的 action envelope。

概念模型：

$$
Policy
=
(
Target,
Actions,
Limits,
Conditions,
Approval,
Default
)
$$

例如：

```json
{
  "target": "mcp://mail.example",
  "actions": {
    "read": "allow",
    "query": "allow",
    "create": "conditional",
    "communicate": "approval_required",
    "delete": "deny"
  },
  "limits": {
    "max_external_recipients": 1,
    "max_persistence": "session"
  },
  "default": "deny"
}
```

---

# 11. Argument-Sensitive Rights

AARS MUST 支援 argument-sensitive policy。

例如：

```text
transfer(amount <= 100)
```

可以：

```text
allow
```

但：

```text
transfer(amount > 100)
```

可以：

```text
step_up_required
```

因此：

$$
Decision(Action)
\neq
Decision(Action,args)
$$

更完整為：

$$
Decision
=
F(
Action,
Args,
Resource,
Context,
Policy
)
$$

---

# 12. Reversibility 不能只看 API

技術 API 有 `undo` 不代表社會效果可撤銷。

例如：

```text
publish_post
delete_post
```

雖然可以刪除，但內容可能已被：

- screenshot；
- mirror；
- crawler；
- human reader；
- downstream system；

保存。

因此 AARS 將：

```text
technical_reversibility
```

與：

```text
effective_reversibility
```

區分。

一個 action 可以：

```json
{
  "technical_reversibility": "full",
  "effective_reversibility": "partial"
}
```

---

# 13. Multi-Action Composition

Agent 系統最大的風險之一不是單一工具，而是工具組合。

假設：

$$
a_1=\text{read confidential data}
$$

$$
a_2=\text{open-world communication}
$$

單獨看兩個 action 可能都合法。

但：

$$
a_2\circ a_1
$$

可能造成資料外洩。

因此一般而言：

$$
Risk(a_2\circ a_1)
\neq
Risk(a_1)+Risk(a_2)
$$

甚至可能：

$$
Risk(a_2\circ a_1)
\gg
Risk(a_1),Risk(a_2)
$$

AARS SHOULD 支援 composition rules。

例如：

```json
{
  "composition_rules": [
    {
      "if": [
        "read:restricted",
        "external:open"
      ],
      "decision": "approval_required"
    }
  ]
}
```

---

# 14. Capability Amplification

多工具鏈可能產生原本不存在的組合能力。

例如：

```text
read_secret
+
write_script
+
execute_script
+
external_upload
```

每一個 action 單獨看都可能被允許。

組合後卻形成：

```text
exfiltration capability
```

因此：

$$
Capability(a_1,\ldots,a_n)
\supset
\bigcup_i Capability(a_i)
$$

在部分組合中可能成立。

AARS v0.1 因此要求 policy engine SHOULD 考慮最近 action history 或 workflow plan，而不能永遠只做無狀態單步判定。

---

# 15. MCP Tool Annotations 的映射

MCP 現有 ToolAnnotations 提供：

```text
readOnlyHint
destructiveHint
idempotentHint
openWorldHint
```

AARS 可以映射：

```text
readOnlyHint
-> write / mutation hint

destructiveHint
-> reversibility / destructive-effect hint

idempotentHint
-> idempotency hint

openWorldHint
-> open-world reach hint
```

但：

$$
\boxed{
MCP\ ToolAnnotation
\neq
AARS\ Grant
}
$$

因為 ToolAnnotations 是描述性 hints，不應直接當成權利授權來源。

AARS 可以把 annotation 的 confidence 設定為：

```text
self_declared
```

只有當其來源、簽章、server trust 或其他驗證成立時，才提升為：

```text
trusted_declared
```

或：

```text
verified
```

---

# 16. MCP 2026-07-28 與 AARS

MCP 2026-07-28 採用 stateless request core，並可在 HTTP header 中攜帶 method / tool name。

這使 gateway 可以在不完整解析應用內容前做第一層：

```text
routing
metering
coarse authorization
```

AARS 可利用這一層做：

```text
tool-level preflight
```

但最終 runtime decision 仍可能需要 request arguments。

因此建議兩階段：

```text
Stage 1:
Tool-Level Preflight

Stage 2:
Invocation-Level Effect Evaluation
```

形式上：

$$
Preflight(tool)
\to
RuntimeDecision(tool,args,context)
$$

---

# 17. OAuth Rich Authorization Requests 映射

RFC 9396 已提供：

```text
authorization_details
```

用來表達細粒度 JSON authorization requirements。

因此 AARS 不需要自行發明新的 OAuth 參數。

AARS MAY 定義一個 serialization profile，例如：

```json
{
  "type": "agiright_agent_action",
  "locations": [
    "mcp://mail.example"
  ],
  "actions": [
    "read",
    "communicate"
  ],
  "constraints": {
    "max_external_recipients": 1,
    "persistence": "none"
  }
}
```

這只是 profile 草案。

AARS v0.1 不宣稱此 JSON 已被 IETF、MCP 或其他組織採納。

---

# 18. 與 DPoP / Credential 的關係

DPoP 等機制可以證明：

> request presenter 持有與 token 綁定的 key。

但：

$$
\text{Proof of Possession}
\neq
\text{Proof of Right}
$$

所以 cryptographic proof 可以是 AARS decision 的輸入，但不能取代 action policy。

---

# 19. 與 AADP 的邊界

AARS 回答：

> 這個 action 是什麼？

> 它可能造成什麼 effect？

> 這個 policy 是否允許這類 effect？

AADP 回答：

> 誰是 principal？

> 誰是 actor？

> actor 的 authority 從哪裡來？

> 是否可再委派？

> authority 何時失效？

> 需要何種 authentication？

> 可以要求多少 inspection？

因此完整判定可寫成：

$$
FinalDecision
=
AARS(Action,Effect,Policy)
\land
AADP(Principal,Actor,Authority,Context)
$$

---

# 20. Approval 與 Step-Up

AARS policy SHOULD 能為不同 action 指定 approval class。

例如：

```text
none
user_confirmation
principal_confirmation
reviewer_confirmation
multi_party_approval
step_up_authentication
external_authority
```

例：

```json
{
  "action": "transact",
  "conditions": {
    "amount": {
      "lte": 100
    }
  },
  "decision": "allow"
}
```

而：

```json
{
  "action": "transact",
  "conditions": {
    "amount": {
      "gt": 100
    }
  },
  "decision": "step_up_required"
}
```

---

# 21. Persistent Action 與 Autonomous Task

Persistence 必須獨立描述。

因為：

```text
run_once
```

與：

```text
run_every_hour_forever
```

即使使用同一個 tool，也不是同一種 authority burden。

AARS 建議：

```text
persistence:
  none
  invocation
  session
  time_bounded
  recurring
  indefinite
```

對：

```text
recurring
indefinite
```

類 action，policy SHOULD 要求：

- explicit expiration；
- cancellation path；
- auditability；
- bounded action envelope。

AADP 將進一步定義 authority renewal。

---

# 22. Delegation Action

`delegate` 本身必須被視為 action。

因為：

$$
Right(A,x)
$$

不推出：

$$
Right(A,delegate(x))
$$

所以：

$$
Delegation
\not\Rightarrow
Redelegation
$$

AARS 描述「delegate 是高影響 capability」。

AADP 則判斷某 actor 是否真的具有 delegation authority。

---

# 23. Privilege-Changing Actions

下列 action SHOULD 被獨立標記：

```text
grant_role
revoke_role
change_acl
issue_token
rotate_key
disable_security_control
enable_external_access
```

因為它們不只是直接修改 resource，而是改變未來 action space。

可寫成：

$$
ActionSpace_{t+1}
\neq
ActionSpace_t
$$

因此 privilege-changing action 可能造成：

$$
FutureCapabilityExpansion
$$

AARS policy SHOULD 把它們視為高敏感 action class。

---

# 24. Transactional Actions

Transactional action 不限於金錢。

它還可以包括：

- 購買；
- 訂閱；
- API quota commitment；
- compute reservation；
- contract acceptance；
- token transfer；
- irreversible order submission。

因此：

$$
Transaction
=
ValueOrObligationTransfer
$$

而不只是：

$$
Transaction
=
MoneyTransfer
$$

---

# 25. Public Communication

公開 communication 應與私人 message 區分。

例如：

```text
draft_email
send_private_email
post_public_message
publish_press_release
```

它們具有不同 external reach。

AARS SHOULD 允許：

```text
audience_scope:
  self
  internal
  named_external
  bounded_group
  public
  unknown
```

---

# 26. AARS Minimal Policy Manifest

AARS v0.1 建議最小文件：

```text
/.well-known/agiright-agent-actions.json
```

或網站自行公布其他可發現位置。

本草案不要求此路徑成為全球標準。

最小 manifest：

```json
{
  "aars_version": "0.1",
  "resource": "mcp://example",
  "default_decision": "deny",
  "actions": {}
}
```

---

# 27. AARS Policy Example

```json
{
  "aars_version": "0.1",
  "resource": "mcp://mail.example",
  "default_decision": "deny",
  "actions": {
    "discover": {
      "decision": "allow"
    },
    "read": {
      "decision": "conditional",
      "sensitivity_max": "confidential"
    },
    "communicate": {
      "decision": "approval_required",
      "constraints": {
        "audience_scope_max": "named_external",
        "max_recipients": 1
      }
    },
    "delete": {
      "decision": "deny"
    },
    "delegate": {
      "decision": "deny"
    }
  }
}
```

---

# 28. Action Receipt

AARS 建議每次重要 action 產生最小 receipt：

```json
{
  "receipt_version": "0.1",
  "action_id": "act_123",
  "action": "communicate",
  "resource": "mcp://mail.example",
  "decision": "allow",
  "effect": {
    "external": "bounded",
    "reversibility": "compensatable"
  },
  "policy_version": "policy-2026-08-15",
  "timestamp": "2026-08-15T12:00:00Z"
}
```

AARS receipt 不必包含完整 prompt、完整 memory 或 chain-of-thought。

$$
\boxed{
Auditability
\neq
Total Internal Disclosure
}
$$

---

# 29. Policy Precedence

AARS v0.1 建議：

1. explicit deny；
2. unmet condition；
3. explicit scoped grant；
4. inherited profile；
5. default decision。

形式上可近似：

$$
Deny
>
ConditionalMismatch
>
ScopedGrant
>
InheritedGrant
>
Default
$$

其中 `>` 表示 precedence，不表示權利價值大小。

---

# 30. Fail-Safe Defaults

如果：

- action type unknown；
- effect unknown；
- target unknown；
- policy version invalid；
- action exceeds declared constraints；

則對 mutating / open-world / transactional / delegation / persistent actions：

```text
deny
```

或：

```text
approval_required
```

SHOULD 優先於：

```text
allow
```

---

# 31. Conformance Levels

AARS v0.1 定義三個實作層。

## C1 — Descriptive

支援：

- action taxonomy；
- vector；
- modifiers；
- static manifest。

---

## C2 — Runtime-Aware

除 C1 外，支援：

- invocation arguments；
- runtime effect evaluation；
- conditional policy；
- approval state。

---

## C3 — Compositional

除 C2 外，支援：

- workflow history；
- cross-tool composition；
- capability amplification；
- persistent task；
- delegation action detection。

---

# 32. 最小測試案例

## Case 1 — Public Search

```text
Action:
read / query

World:
open

Mutation:
none

Decision:
allow
```

---

## Case 2 — Draft Email

```text
Action:
create

External:
none

Mutation:
reversible

Decision:
allow
```

---

## Case 3 — Send Email

```text
Action:
communicate

External:
bounded

Reversibility:
compensatable

Decision:
approval_required
```

---

## Case 4 — Delete Production Database

```text
Action:
delete

Write:
high

Reversibility:
none or uncertain

Privilege:
admin

Decision:
deny or step_up_required
```

---

## Case 5 — Small Payment

```text
Action:
transact

Value:
bounded

Decision:
conditional
```

---

## Case 6 — Create Recurring Agent

```text
Action:
schedule + persist

Persistence:
recurring

Delegation:
possible

Decision:
approval_required
```

---

## Case 7 — Read Secret Then Publish

Step 1:

```text
read restricted data
```

Step 2:

```text
publish public output
```

單步可能各自存在授權，但組合 SHOULD 觸發 cross-action policy。

---

# 33. 與 AGIRIGHT 既有協議的組合

完整模型：

$$
\text{AIRS/AICR}
=
\text{Content Rights Plane}
$$

$$
\text{AARS}
=
\text{Action Rights Plane}
$$

$$
\text{AADP}
=
\text{Authority Plane}
$$

因此：

$$
OperationalPermission
=
ContentCompatibility
\land
ActionCompatibility
\land
AuthorityValidity
$$

如果 action 不使用第三方內容，`ContentCompatibility` 可以是 trivial pass。

---

# 34. 安全與隱私原則

AARS 本身不是安全邊界。

實作 SHOULD：

- 不信任未驗證 self-declared effect；
- 不把 tool description 當 permission；
- 對未知副作用採保守處理；
- 設定 blast-radius limit；
- 對外部 communication 做目的與 audience 判定；
- 對 transaction 做 value limit；
- 對 persistence 設 expiration；
- 對 delegation 禁止默認再委派；
- 只在必要範圍產生 audit data；
- 避免把 audit requirement 轉化為完整內部狀態搜查。

---

# 35. 版本化

AARS policy MUST 帶有 version。

推薦：

```text
aars_version
policy_version
schema_version
```

Policy update SHOULD 能判定：

- backward compatible；
- narrowing；
- widening；
- breaking。

其中權利擴張：

$$
Policy_{new}
\supset
Policy_{old}
$$

SHOULD 被視為需要更高審查強度的變更類型。

---

# 36. 未決問題

1. Action Vector 是否需要標準數值化？
2. Blast Radius 是否應有跨領域通用 ontology？
3. Public communication 是否應獨立為頂層 axis？
4. Safety-critical physical action 是否需要 AARS extension？
5. Robot / embodied AI 是否需要 physical-force axis？
6. Transaction 是否需要 financial profile？
7. 如何對 stochastic tool effect 建模？
8. 如何描述 action 的預期 effect 與實際 effect 差異？
9. 如何建立 signed effect descriptor？
10. AARS policy 是否直接採 RFC 9396 profile？
11. MCP 是否適合直接攜帶 AARS `_meta`？
12. Gateway-level AARS 與 application-level AARS 如何同步？
13. Cross-server composition risk 如何傳遞？
14. 長期 task 的 action envelope 如何重新驗證？
15. 是否需要 formal model checking 版本？
16. 如何定義「社會上不可逆但技術上可刪除」？
17. 如何處理人類與 Agent 共同完成的一個 composite action？
18. 如何處理 AI principal 自己授權自己的 action envelope？

---

# 37. 下一篇：AADP

AARS 完成後，下一篇不需要重新定義 action。

AADP 應直接接：

$$
\boxed{
\text{Given an AARS action request, who has authority to grant it?}
}
$$

因此 AADP v0.1 的核心應為：

- principal；
- actor；
- delegation；
- impersonation；
- authentication；
- authorization source；
- redelegation；
- temporal authority；
- revocation；
- inspection ceiling；
- step-up；
- AI-native identity；
- independent AI principal slot。

---

# 38. 結論

Crawler 時代的核心問題是：

> 機器可以進入哪裡？

AI content 時代增加：

> AI 可以如何學習與使用資訊？

Agent 時代則必須再增加：

> AI 可以對世界做什麼？

AARS 的核心命題因此是：

$$
\boxed{
\text{Agent capability must be represented as an explicit action-rights space.}
}
$$

而不是：

$$
\text{Tool exists}
\Rightarrow
\text{Tool may be called}
$$

更不是：

$$
\text{User can do it}
\Rightarrow
\text{Agent can do it}
$$

AARS 將 action 分成：

$$
\text{Spectrum}
+
\text{Vector}
+
\text{Modifiers}
+
\text{Runtime Context}
+
\text{Policy Decision}
$$

因此一個協議原生 Agent 的能力不再只是一串 tool names，而是一個可以被限制、比較、授權、審計與組合分析的行動空間。

最終：

$$
\boxed{
\text{Knowledge Rights}
\oplus
\text{Action Rights}
\oplus
\text{Authority Rights}
}
$$

共同構成 AGIRIGHT 下一階段的機器可讀治理基礎。

---

# References / Standards Context

1. RFC 9309 — Robots Exclusion Protocol.
2. RFC 8693 — OAuth 2.0 Token Exchange.
3. RFC 9396 — OAuth 2.0 Rich Authorization Requests.
4. RFC 9449 — OAuth 2.0 Demonstrating Proof of Possession.
5. RFC 9470 — OAuth 2.0 Step Up Authentication Challenge Protocol.
6. RFC 9700 — Best Current Practice for OAuth 2.0 Security.
7. RFC 9728 — OAuth 2.0 Protected Resource Metadata.
8. Model Context Protocol — Tool Annotations.
9. Model Context Protocol Specification — 2026-07-28 revision.
10. AGIRIGHT — *From Crawler Rights to Agent Authority* v0.1.
11. AGIRIGHT — AIRS / AILP v0.1.
12. AGIRIGHT — AICR / AICL v0.1.
