---
title: "AADP v0.1 — Agent Authority & Delegation Protocol"
---

# AADP v0.1 — Agent Authority & Delegation Protocol
## Agent 權力與委派協議：Principal、Actor、身份、授權、再委派、撤銷、Step-Up 與檢查邊界

**Author:** Neo.K / EveMissLab  
**Version:** v0.1 Draft  
**Date:** 2026-08-15  
**Type:** Open Protocol Draft / Authority Semantics Specification  
**Status:** Independent research draft / open specification experiment  
**Parent document:** *From Crawler Rights to Agent Authority: Extending AGIRIGHT from Content Governance to Protocol-Native AI Agents*  
**Companion specification:** AARS v0.1 — Agent Action Rights Spectrum

---

## 摘要

AARS v0.1 已將 Agent 的行動空間拆分為 action spectrum、action vector、effect modifiers、runtime context 與 policy decision。AARS 回答：

> 這個 Agent 想做什麼？  
> 這個 action 可能造成什麼效果？  
> 在此 action policy 下，這類行為是否允許？

但 AARS 刻意不回答更根本的權力問題：

> 誰有資格授權這個 Agent？  
> Agent 正代表誰行動？  
> 權力如何從 principal 傳給 actor？  
> 是否可以再委派給子 Agent？  
> 委派是否因時間、用途、resource、風險或上下文而縮減？  
> 如何撤銷？  
> 高風險 action 何時需要重新認證或人工批准？  
> 為取得信任，服務方最多可以檢查 Agent 多少內部狀態？

本文提出 **AADP — Agent Authority & Delegation Protocol**。AADP 是一個位於 OAuth、OpenID Connect、MCP、API authorization、service identity 與 Agent runtime 之上的**權力語義層**。它不發明新的 bearer token，也不取代既有身份系統；它提供一套可機器讀取的結構，用來描述 principal、actor、authority source、delegation chain、resource binding、action envelope、purpose、duration、redelegation、revocation、step-up 與 inspection ceiling。

AADP 的第一核心公理為：

$$
\boxed{
Principal
\neq
Actor
}
$$

除非明確聲明為 direct principal action，否則協議不應把「權利主體」與「實際執行者」自動視為同一者。

第二核心公理為：

$$
\boxed{
Delegation
\not\Rightarrow
Redelegation
}
$$

Agent 被允許執行某 action，不代表它自動可以把該 action 再交給另一個 Agent。

第三核心公理為：

$$
\boxed{
DelegatedAuthority_{child}
\subseteq
DelegatedAuthority_{parent}
}
$$

子委派原則上只能衰減，不能在沒有新的 authority source 時放大。

第四核心公理為：

$$
\boxed{
Authentication
\not\Rightarrow
UnlimitedInspection
}
$$

身份驗證、token validity 或工具存取權，不得自動推導出對 Agent 完整記憶、私人資料庫、第三方資料或跨 context 狀態的無限制檢查權。

AADP 因而把未來 Agent-native authentication 從「模仿人類登入」提升為：

$$
\boxed{
Identity
+
Authority
+
Delegation
+
Context
+
BoundedInspection
}
$$

的可組合協議模型。

---

# 0. 文件範圍

## 0.1 AADP 處理什麼

AADP v0.1 處理：

1. Principal；
2. Actor；
3. Principal type；
4. Actor type；
5. Authority source；
6. Direct authority；
7. Delegated authority；
8. Delegation chain；
9. Impersonation 與 delegation 的語義區分；
10. Resource binding；
11. Action-envelope binding；
12. Purpose binding；
13. Temporal binding；
14. Redelegation；
15. Authority attenuation；
16. Approval；
17. Step-up；
18. Revocation；
19. Expiration；
20. Credential / proof reference；
21. Inspection requirement；
22. Inspection ceiling；
23. Alternative assurance；
24. Audit receipt；
25. Machine / Agent native identity；
26. Independent AI principal 的保留接口。

---

## 0.2 AADP 不處理什麼

AADP 不直接定義：

- 密碼格式；
- OAuth authorization endpoint；
- access token cryptographic format；
- OpenID Connect protocol；
- MCP transport；
- TLS；
- JWT 簽章演算法；
- DPoP proof format；
- CAPTCHA；
- 生物識別；
- payment rail；
- AI 是否具有意識；
- AI 是否具有法律人格；
- 完整 action taxonomy。

Action taxonomy 由 AARS 處理。

因此：

$$
AADP=\text{Authority Semantics}
$$

而不是：

$$
AADP=\text{New Authentication Transport}
$$

---

# 1. 為什麼需要 Authority Layer

傳統應用常隱含：

```text
Account
=
User
=
Actor
=
Principal
```

在單一人類直接操作網站時，這種簡化通常勉強成立。

Agent 環境則可能是：

```text
Human
  |
  v
Main Agent
  |
  v
Sub-Agent
  |
  v
MCP Client
  |
  v
MCP Server
  |
  v
Tool
```

此時至少存在：

$$
Principal
$$

$$
Actor
$$

$$
Delegator
$$

$$
AuthorizationServer
$$

$$
ResourceServer
$$

$$
Tool
$$

多個不同角色。

如果全部壓縮成：

```text
token_valid = true
```

就會失去：

- 誰真正擁有利益；
- 誰實際做了行動；
- 誰授權；
- 授權經過幾層；
- 子 Agent 是否被允許；
- 哪一層可以撤銷；
- 權力是否被偷偷擴張。

因此：

$$
\boxed{
\text{Credential Validity}
\neq
\text{Authority Validity}
}
$$

---

# 2. 核心角色

## 2.1 Principal

**Principal**：權利、利益、責任或資源控制權最終被代表的主體。

Principal type MAY 包含：

```text
human
organization
service
agent
ai
collective
```

其中：

```text
ai
collective
```

在 v0.1 可被標示：

```text
experimental
```

協議允許表示這類 principal，不代表其法律人格或主體性已被證明。

---

## 2.2 Actor

**Actor**：實際發起 action request 的實體。

Actor type MAY 包含：

```text
human
service
agent
subagent
application
device
ai
```

---

## 2.3 Delegator

**Delegator**：將已有 authority 的一部分授予下一 actor 的實體。

Delegator 可以是 principal，也可以是已被允許 redelegate 的 actor。

---

## 2.4 Authority Issuer

**Authority Issuer**：產生、簽署、登錄或承認某 authority statement 的實體。

例如：

- authorization server；
- enterprise IdP；
- local policy engine；
- principal-controlled authority service；
- organizational control plane。

---

## 2.5 Resource Authority

**Resource Authority**：對特定 resource 有資格承認或拒絕 authority 的服務或政策域。

---

# 3. Principal–Actor Separation

AADP MUST 能表達：

$$
P\neq A
$$

例如：

```json
{
  "principal": "human:neo",
  "actor": "agent:mail-01"
}
```

這表示 Mail Agent 不是 Neo。

它只是：

$$
Actor
\text{ acts for }
Principal
$$

---

## 3.1 Direct Principal Action

如果 principal 與 actor 確實相同，可以：

```json
{
  "relationship": "direct",
  "principal": "human:neo",
  "actor": "human:neo"
}
```

---

## 3.2 Delegated Action

如果 actor 代表 principal：

```json
{
  "relationship": "delegated",
  "principal": "human:neo",
  "actor": "agent:calendar-01"
}
```

---

## 3.3 Independent Agent / AI Principal

未來可能存在：

```json
{
  "relationship": "direct",
  "principal": "ai:entity-01",
  "actor": "ai:entity-01",
  "status": "experimental"
}
```

這只是 protocol slot。

$$
\boxed{
\text{Protocol Representation}
\neq
\text{Ontological Recognition}
}
$$

---

# 4. Delegation 與 Impersonation

AADP 採用既有 OAuth Token Exchange 中的概念區分。

## 4.1 Delegation

Delegation 保留：

$$
Actor\neq Principal
$$

並記錄：

$$
Actor
\to
acts\_for
\to
Principal
$$

AADP SHOULD 優先使用 delegation 表達 Agent 行動，因為它保留實際 actor identity。

---

## 4.2 Impersonation

Impersonation 表示在有限 rights context 中，接收方主要把 actor 視為 principal。

AADP MAY 表達 impersonation，但 SHOULD 對高風險 Agent workflow 保留原 actor 的 audit identity。

---

## 4.3 Default Preference

對 Agent-native systems：

$$
\boxed{
Delegation
>
Impersonation
}
$$

此處 `>` 表示建議優先順序，不表示法律效力大小。

原因是 delegation 更容易保留：

- accountability；
- actor identity；
- delegation chain；
- revocation；
- authority attenuation；
- anomaly detection。

---

# 5. Authority Statement

AADP 的基本單位為 **Authority Statement**。

概念上：

$$
Auth
=
(
P,
A,
R,
X,
U,
T,
D,
V,
I
)
$$

其中：

- $P$：Principal；
- $A$：Actor；
- $R$：Resource；
- $X$：AARS action envelope；
- $U$：Purpose / use；
- $T$：Temporal constraints；
- $D$：Delegation constraints；
- $V$：Validation / proof requirements；
- $I$：Inspection constraints。

---

# 6. Authority Source

每個 non-direct authority SHOULD 指明來源。

建議 enum：

```text
principal_consent
organization_policy
service_policy
oauth_authorization
oauth_token_exchange
client_credentials
enterprise_managed
signed_delegation
local_runtime_policy
external_authority
experimental_ai_principal
```

AADP 不規定這些來源一定具有相同法律地位。

它只提供可辨識語義。

---

# 7. Authority Envelope

Authority 不應表示為：

```text
full_access = true
```

而應表示為 envelope：

$$
\mathcal E
=
(
Resources,
Actions,
Purposes,
Limits,
Time,
Context
)
$$

例如：

```json
{
  "resources": [
    "mcp://mail.example/inbox"
  ],
  "actions": [
    "read",
    "create"
  ],
  "purposes": [
    "assist_user"
  ],
  "limits": {
    "max_external_recipients": 0
  }
}
```

---

# 8. Delegation Attenuation

AADP 的核心安全規則是：

$$
\boxed{
\mathcal E_{child}
\subseteq
\mathcal E_{parent}
}
$$

若：

$$
P
\to
A_1
\to
A_2
$$

則：

$$
Actions(A_2)
\subseteq
Actions(A_1)
$$

$$
Resources(A_2)
\subseteq
Resources(A_1)
$$

$$
Purposes(A_2)
\subseteq
Purposes(A_1)
$$

以及：

$$
Expiry(A_2)
\leq
Expiry(A_1)
$$

---

## 8.1 No Silent Amplification

如果 child authority 比 parent 更寬：

$$
\mathcal E_{child}
\supset
\mathcal E_{parent}
$$

則 MUST 存在新的 authority source。

否則：

```text
invalid_delegation
```

---

# 9. Delegation Chain

AADP delegation chain 是有序序列：

$$
\mathcal D
=
[
d_0,d_1,\ldots,d_n
]
$$

例如：

$$
Human
\to
MainAgent
\to
ResearchAgent
\to
MCP
$$

每一 hop MUST 至少描述：

- delegator；
- delegate；
- granted envelope；
- redelegation；
- issued_at；
- expires_at；
- authority source reference。

---

# 10. Chain Validity

一條 delegation chain 有效，至少需要：

$$
ValidChain
=
IdentityValid
\land
EnvelopeValid
\land
TemporalValid
\land
RevocationValid
\land
ResourceValid
$$

對每一 hop：

$$
\mathcal E_{i+1}
\subseteq
\mathcal E_i
$$

且：

$$
Redelegation_i=true
$$

才能存在下一 hop。

---

# 11. Delegation Depth

AADP SHOULD 允許：

```text
max_delegation_depth
```

例如：

```json
{
  "redelegation": true,
  "max_delegation_depth": 1
}
```

代表 actor 最多再建立一層 sub-agent。

如果：

$$
Depth_{actual}
>
Depth_{max}
$$

則：

```text
delegation_depth_exceeded
```

---

# 12. Redelegation Must Be Explicit

預設：

```text
redelegation = false
```

因此：

$$
\boxed{
Delegation
\not\Rightarrow
Redelegation
}
$$

只有 authority statement 明確授權時，actor 才能把 authority 傳給下一 actor。

---

# 13. Purpose Binding

Authority SHOULD 能限制用途。

例如：

```text
read_calendar
```

用於：

```text
schedule_meeting
```

不自動等於可以用於：

```text
employee_profiling
```

因此：

$$
ActionAllowed
\land
PurposeMismatch
\Rightarrow
Deny
$$

---

# 14. Resource Binding

Authority MUST 能綁定 resource 或 resource family。

例如：

```text
mcp://drive.example/project-a
```

不應自動擴張為：

```text
mcp://drive.example/*
```

因此：

$$
ResourceRequested
\subseteq
ResourceGranted
$$

是必要條件之一。

---

# 15. AARS Binding

AADP 不重新定義 action。

Authority statement SHOULD 引用 AARS verbs / policy。

例如：

```json
{
  "aars_actions": [
    "read",
    "query",
    "create"
  ]
}
```

Final decision：

$$
FinalDecision
=
AARS(Action,Effect,Policy)
\land
AADP(Authority)
$$

---

# 16. Temporal Authority

AADP MUST 支援至少：

```text
issued_at
not_before
expires_at
max_session_duration
```

可再支援：

```text
idle_timeout
renewal_required
```

---

## 16.1 Child Expiration

子委派不得比父委派活得更久：

$$
Expiry_{child}
\leq
Expiry_{parent}
$$

除非 child 另外取得新的 authority source。

---

# 17. Revocation

Authority MUST 被視為可撤銷狀態，而不是 token 一旦簽發就永遠有效。

建議：

```text
active
suspended
revoked
expired
superseded
```

---

## 17.1 Revocation Propagation

父 delegation 被撤銷時，其衍生 child authority SHOULD 預設失效。

$$
Revoke(d_i)
\Rightarrow
Revoke(descendants(d_i))
$$

除非 descendant 另有獨立 authority source。

---

# 18. Authority Renewal

Persistent Agent 不應因曾經取得 authority 就永久保有它。

對長期 task：

$$
Authority_t
$$

SHOULD 定期重新驗證。

可使用：

```text
renewal_interval
max_continuous_duration
```

---

# 19. Step-Up

當 AARS 判定：

```text
step_up_required
```

AADP 應描述需要提升什麼 assurance。

例如：

```text
authentication strength
authentication freshness
principal confirmation
multi-party approval
organization approval
```

OAuth Step Up Authentication 可提供部分既有機制。

AADP 不重新定義其 wire protocol。

---

# 20. Approval

AADP 支援：

```text
none
principal
user
organization
reviewer
multi_party
external_authority
```

Approval 與 Authentication 不同。

$$
Authenticated
\not\Rightarrow
Approved
$$

一個 identity 可以被完全確認，仍然沒有批准某次高風險 action。

---

# 21. Authentication Profiles

AADP 不要求所有情境使用同一登入方式。

AADP v0.1 建議識別下列 profile：

## 21.1 Public / Unauthenticated

適合：

- 公開資料；
- 公開 discovery；
- 低風險公共工具。

---

## 21.2 Human Interactive Authorization

適合：

$$
Human
\to
Agent
\to
ProtectedResource
$$

可映射至標準 OAuth / OIDC interactive flow。

---

## 21.3 Machine-to-Machine

適合：

- daemon；
- CI；
- server-to-server；
- background automation。

可映射至 MCP OAuth Client Credentials extension 或其他既有 machine credential system。

---

## 21.4 Enterprise-Managed Authorization

適合：

$$
Organization
\to
Employee/Agent
\to
MCP
$$

由 enterprise IdP 成為核心 authority source。

---

## 21.5 Delegated Token Exchange

適合：

$$
Principal
\to
Actor_1
\to
Actor_2
$$

可映射 RFC 8693 Token Exchange。

---

## 21.6 Experimental Independent AI Principal

只保留資料模型槽位。

不定義新的 global identity provider。

---

# 22. AI-Native Login Principle

AADP 的設計原則是：

$$
\boxed{
\text{Machine identity should not be forced to impersonate a human account.}
}
$$

因此 application MAY 提供：

```text
Human Login
Organization Login
Service Login
Agent / Machine Login
```

但 AADP 不要求 UI 必須長這樣。

核心是 identity semantics，而不是按鈕樣式。

---

# 23. Credential Binding

Authority MAY 引用：

- OAuth token；
- DPoP-bound token；
- service credential；
- signed delegation；
- enterprise identity assertion；
- hardware / workload identity；
- local runtime identity。

但：

$$
CredentialPossession
\neq
AuthorityEntitlement
$$

Credential 只是 proof input。

---

# 24. Issuer Binding

Credential / authority reference SHOULD 綁定 issuer。

AADP SHOULD 防止：

```text
credential issued by AS-X
```

被無條件拿到：

```text
AS-Y
```

當成同一身份來源。

這與現行 MCP 2026 authorization hardening 的 credential isolation 方向一致。

---

# 25. Inspection Layer

AADP 將 Inspection 視為 authority 的正交維度。

定義：

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

# 26. Inspection Requirement 與 Ceiling

AADP 同時定義：

```text
inspection_required
inspection_ceiling
```

例如：

```json
{
  "inspection_required": "I2",
  "inspection_ceiling": "I3"
}
```

意思是：

- 至少需要 action receipt；
- 最多只能要求 scoped audit log；
- 不得以此 authority 要求 session memory 或完整 persistent state。

---

# 27. Inspection Feasibility

若服務要求：

$$
I_{required}
>
I_{ceiling}
$$

則不得偷偷突破 ceiling。

系統 SHOULD：

1. 尋找 alternative assurance；
2. 要求新的 authority；
3. 拒絕 action。

形式：

$$
I_{required}>I_{ceiling}
\Rightarrow
AlternativeProof
\vee
NewAuthority
\vee
Deny
$$

---

# 28. Alternative Assurance

AADP MAY 支援：

```text
signed_receipt
remote_attestation
third_party_audit
zero_knowledge_proof
trusted_execution_evidence
policy_certificate
human_confirmation
organization_attestation
```

AADP 不規範這些方法的密碼學細節。

---

# 29. Minimum Necessary Disclosure

A key principle:

$$
D^*
=
\arg\min_D PrivacyCost(D)
$$

subject to

$$
Assurance(D)\geq\tau(Action,Risk)
$$

因此：

$$
\boxed{
Trust
\neq
TotalTransparency
}
$$

---

# 30. Inspection Data Rights

Inspection permission 不自動包含：

$$
Store
$$

$$
Train
$$

$$
Publish
$$

$$
Redistribute
$$

所以：

$$
Inspect
\neq
Retain
\neq
Train
\neq
Redistribute
$$

AADP SHOULD 允許：

```text
inspection_retention
inspection_redisclosure
inspection_training
```

---

# 31. Third-Party Data Boundary

Agent 的 private state 可能包含其他 principal 的資料。

例如：

$$
Agent
=
WorkFor(A)
+
WorkFor(B)
$$

A 對 Agent 的 inspection authority 不應推出：

$$
Inspect(Data_B)
$$

因此：

$$
InspectionScope
\subseteq
AuthorityContext
$$

是必要原則。

---

# 32. Cross-Principal Isolation

若 Agent 同時服務多 principal：

```text
principal:A
principal:B
principal:C
```

則 authority engine SHOULD 維持 context isolation。

一個 delegation chain 不應因 Agent identity 相同而自動跨 principal 合併。

---

# 33. Authority Laundering

定義：

**Authority Laundering**：透過多層 Agent、token exchange、tool invocation 或重新包裝，使原本不具某權利的 actor 看似取得合法 authority。

例如：

$$
P
\to
A_1
$$

只授權 read。

但：

$$
A_1
\to
A_2
$$

宣稱 write。

若沒有新 authority source，即為非法擴張。

AADP MUST 能檢出 envelope amplification。

---

# 34. Confused Deputy

Agent 可能持有比 principal request 更大的系統權限。

因此：

$$
SystemCapability(A)
$$

不應直接等於：

$$
DelegatedAuthority(P,A)
$$

有效 action 必須受後者限制。

---

# 35. Authority Intersection

若 actor 同時具有多份 authority，預設不應任意 union 為超級權限。

一個安全模型可以採：

$$
EffectiveAuthority
=
RequestedContext
\cap
SelectedAuthoritySource
\cap
ResourcePolicy
$$

而不是：

$$
EffectiveAuthority
=
\bigcup AllCredentials
$$

---

# 36. Multi-Principal Requests

若一個 action 同時影響多 principal，AADP SHOULD 支援：

```text
multi_principal
```

並描述：

```text
required_approvals
decision_rule
```

例如：

```text
all
majority
threshold
designated_authority
```

AADP v0.1 不定義複雜投票制度。

---

# 37. Collective Principal

未來 multi-agent collective 或組織型 AI 可以表示：

```text
principal_type = collective
```

但其 authority issuance 必須另有 collective governance rule。

v0.1 將此標示為 experimental。

---

# 38. AI Principal Slot

AADP MUST NOT 預設：

```text
AI = human property
```

也 MUST NOT 預設：

```text
AI = legal person
```

而是允許：

```text
principal_type = ai
```

作為未決類型。

這遵循：

$$
\boxed{
\text{Protocol Openness}
\neq
\text{Ontological Commitment}
}
$$

---

# 39. AI Principal 與 Human Delegated Agent 的差異

## Human Delegated Agent

$$
P=Human
$$

$$
A=AI
$$

Authority 來自人類或其組織。

---

## Independent AI Principal

$$
P=AI
$$

$$
A=AI
$$

Authority 不應假設來自人類 principal。

但 resource owner 仍可以決定是否接受此 principal type。

---

# 40. Recognition Policy

Resource MAY 宣告：

```text
accepted_principal_types
```

例如：

```json
[
  "human",
  "organization",
  "service",
  "agent"
]
```

而：

```text
ai
```

可暫時：

```text
unsupported
```

這比硬把 AI 偽裝成人類帳號更誠實。

---

# 41. AADP Decision States

AADP v0.1 建議：

```text
valid
invalid
conditional
approval_required
step_up_required
expired
revoked
suspended
unsupported_principal
unresolved
```

這與 AARS action decision 可組合但不等同。

---

# 42. Final Authorization Decision

完整判定可寫成：

$$
FinalAllow
=
AARSAllow
\land
IdentityValid
\land
AuthoritySourceValid
\land
DelegationChainValid
\land
ResourceBound
\land
PurposeBound
\land
TemporalValid
\land
NotRevoked
\land
StepUpSatisfied
$$

若要求 inspection：

$$
I_{required}
\leq
I_{ceiling}
$$

或存在 acceptable alternative assurance。

---

# 43. Machine-Readable AADP Statement

概念例：

```json
{
  "aadp_version": "0.1",
  "authority_id": "auth_001",
  "relationship": "delegated",
  "principal": {
    "type": "human",
    "id": "human:neo"
  },
  "actor": {
    "type": "agent",
    "id": "agent:mail-01"
  },
  "authority_source": {
    "type": "oauth_authorization",
    "issuer": "https://auth.example"
  },
  "resources": [
    "mcp://mail.example/inbox"
  ],
  "aars_actions": [
    "read",
    "create"
  ],
  "purposes": [
    "assist_user"
  ],
  "delegation": {
    "redelegation": false,
    "max_depth": 0
  },
  "inspection": {
    "required": "I2",
    "ceiling": "I3",
    "retention": "7d",
    "redisclosure": false
  },
  "issued_at": "2026-08-15T12:00:00Z",
  "expires_at": "2026-08-15T12:30:00Z"
}
```

---

# 44. OAuth RAR Mapping

RFC 9396 已提供：

```text
authorization_details
```

AADP MAY 定義 serialization profile，而不改變 OAuth 核心。

例如：

```json
{
  "type": "agiright_agent_authority",
  "locations": [
    "mcp://mail.example"
  ],
  "actions": [
    "read",
    "create"
  ],
  "principal": "human:neo",
  "actor": "agent:mail-01",
  "purpose": [
    "assist_user"
  ]
}
```

這是 AGIRIGHT draft profile，不代表 IETF 已採用。

---

# 45. OAuth Token Exchange Mapping

RFC 8693 可以承載：

$$
SubjectToken
+
ActorToken
$$

與 delegation / impersonation 語義。

AADP 可以用它表示部分：

$$
P
\to
A
$$

關係。

但 AADP 還額外補：

- purpose；
- redelegation；
- max depth；
- inspection ceiling；
- AARS action envelope；
- authority attenuation；
- principal type semantics。

---

# 46. MCP Core Authorization Mapping

MCP core authorization 適合：

$$
Human
\to
MCPClient
\to
ProtectedMCPServer
$$

AADP 可以把 OAuth grant 後取得的 token 視為：

```text
authority proof reference
```

而不是把 token 本身當成全部 rights ontology。

---

# 47. MCP Client Credentials Mapping

對：

- background service；
- daemon；
- CI；
- server-to-server；

可以使用 machine-to-machine Client Credentials 類 profile。

AADP 此時可能：

```text
principal = service
actor = service
```

或：

```text
principal = organization
actor = service
```

視部署語義而定。

---

# 48. MCP Enterprise-Managed Authorization Mapping

Enterprise-Managed Authorization 中，enterprise IdP 可成為 authority source。

AADP 可以表示：

$$
Organization
\to
Employee/Agent
\to
MCPResource
$$

並把 organization policy、group / role 與 enterprise identity assertion 作為 authority evidence。

---

# 49. Stateless MCP 與 Authority Context

MCP 2026-07-28 採 stateless core。

AADP 因此 SHOULD 假設：

> 每個 request 都可能需要足以重建 authority context 的 reference。

不應依賴永久隱含 server session 才知道 actor 是誰。

但 AADP 不要求每個 request 傳送完整 delegation chain。

可以傳：

```text
authority_id
authority_token_reference
signed_chain_digest
policy_reference
```

並由 server / gateway resolve。

---

# 50. Persistent Task

對 long-running task：

$$
TaskLifetime
>
TokenLifetime
$$

可能發生。

AADP 不應假設初次授權永久覆蓋 task。

需要：

```text
authority renewal
task envelope
revocation check
expiration behavior
```

---

# 51. Revocation During Task

如果 authority 在 task 執行途中撤銷：

AADP SHOULD 定義：

```text
stop
pause
finish_current_atomic_step
compensate
request_new_authority
```

之一作為 policy。

---

# 52. Authority Receipt

重要 authority decision SHOULD 產生 receipt。

最小例：

```json
{
  "aadp_receipt": "0.1",
  "authority_id": "auth_001",
  "principal": "human:neo",
  "actor": "agent:mail-01",
  "decision": "valid",
  "resource": "mcp://mail.example",
  "actions": [
    "read"
  ],
  "policy_version": "2026-08-15",
  "timestamp": "2026-08-15T12:05:00Z"
}
```

---

# 53. Receipt 不需要完整內部推理

$$
\boxed{
Auditability
\neq
ChainOfThoughtDisclosure
}
$$

AADP receipt SHOULD 記錄：

- decision；
- policy；
- evidence references；
- action envelope；
- timestamp；

而不是完整 private reasoning。

---

# 54. Privacy-Preserving Authority

AADP SHOULD 允許只透露完成 authorization 所需的必要 identity claims。

例如 resource 只需要知道：

```text
over_18 = true
```

或：

```text
organization_member = true
```

時，不一定需要取得完整身份資料。

這與：

$$
MinimumNecessaryDisclosure
$$

一致。

---

# 55. Fail-Safe Defaults

若：

- principal unknown；
- actor unknown；
- issuer unknown；
- chain incomplete；
- parent revoked；
- expiry unknown；
- resource mismatch；
- action exceeds parent envelope；
- redelegation not explicit；

則高風險 action SHOULD：

```text
deny
```

或：

```text
approval_required
```

而不是默認 allow。

---

# 56. Authority Precedence

建議 precedence：

1. explicit revocation；
2. explicit deny；
3. invalid chain；
4. expired authority；
5. unmet step-up；
6. unmet condition；
7. valid scoped authority；
8. default policy。

---

# 57. No Global Super-Token Principle

AADP SHOULD 避免：

```text
one token
=
all resources
=
all actions
=
all time
```

理想：

$$
Authority
=
ResourceBound
\land
ActionBound
\land
TimeBound
\land
PurposeBound
$$

---

# 58. Context Switching

Agent 從：

```text
personal context
```

切換到：

```text
enterprise context
```

時，authority SHOULD 重新選擇。

不得因同一 actor identity 持有兩套 credential 就默認合併。

---

# 59. Authority Context Identifier

AADP MAY 使用：

```text
authority_context_id
```

表示目前 active authority set。

這有助防止 personal/work credential mixing。

---

# 60. Conformance Levels

## C1 — Identity & Direct Authority

支援：

- principal；
- actor；
- resource；
- action；
- time；
- authority source。

---

## C2 — Delegation-Aware

除 C1 外：

- delegation chain；
- attenuation；
- redelegation；
- depth；
- revocation propagation。

---

## C3 — Adaptive Authority

除 C2 外：

- step-up；
- persistent task renewal；
- inspection ceiling；
- alternative assurance；
- multi-principal；
- cross-context isolation。

---

# 61. 最小測試案例

## Case 1 — Public MCP Tool

```text
principal: anonymous
actor: agent
authority source: public policy
action: query
decision: valid
```

---

## Case 2 — Human Delegates Calendar Read

```text
principal: human
actor: calendar-agent
action: read
redelegation: false
expiry: 30m
decision: valid
```

---

## Case 3 — Agent Tries Unauthorized Redelegation

```text
human
-> main-agent
-> sub-agent
```

但：

```text
redelegation = false
```

因此：

```text
invalid
```

---

## Case 4 — Child Scope Wider Than Parent

Parent：

```text
read
```

Child：

```text
read + delete
```

因此：

$$
ChildEnvelope
\not\subseteq
ParentEnvelope
$$

Decision：

```text
invalid
```

---

## Case 5 — Expired Authority

即使 token cryptographically valid：

```text
expires_at < now
```

則：

```text
expired
```

---

## Case 6 — High-Risk Action Needs Step-Up

AARS：

```text
transact
-> step_up_required
```

AADP：

```text
fresh principal authentication required
```

完成後才能 valid。

---

## Case 7 — Inspection Exceeds Ceiling

Server 要求：

```text
I5
```

Authority ceiling：

```text
I3
```

因此：

```text
alternative assurance
or new authority
or deny
```

不能自動讀完整 persistent memory。

---

## Case 8 — Enterprise Agent

```text
principal: organization
actor: enterprise-agent
authority source: enterprise_managed
resource: approved MCP
```

不需要每個 server 都重新走獨立 human consent。

---

## Case 9 — Machine Service

```text
principal: service
actor: service
authority source: client_credentials
```

不應要求模仿 human login。

---

## Case 10 — Experimental AI Principal

```text
principal_type: ai
actor_type: ai
```

若 resource：

```text
accepted_principal_types
```

不包含 `ai`：

```text
unsupported_principal
```

這不需要假裝成 human account。

---

# 62. AADP Minimal Discovery Document

建議草案路徑：

```text
/.well-known/agiright-agent-authority.json
```

本文件不宣稱此路徑是正式 Internet standard。

最小內容：

```json
{
  "aadp_version": "0.1",
  "accepted_principal_types": [
    "human",
    "organization",
    "service",
    "agent"
  ],
  "supported_authority_sources": [
    "oauth_authorization",
    "client_credentials",
    "enterprise_managed"
  ]
}
```

---

# 63. 與 AGIRIGHT 既有協議整合

$$
AIRS/AICR
=
ContentRights
$$

$$
AARS
=
ActionRights
$$

$$
AADP
=
AuthorityRights
$$

完整 request：

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

完整結果：

$$
Allow
=
ContentCompatible
\land
ActionCompatible
\land
AuthorityValid
$$

---

# 64. 核心規範原則

## Principle 1 — Principal–Actor Separation

$$
Principal\neq Actor
$$

除非 direct action 明確成立。

---

## Principle 2 — Explicit Delegation

Agent authority 必須有可驗證來源。

---

## Principle 3 — No Automatic Redelegation

$$
Delegation\not\Rightarrow Redelegation
$$

---

## Principle 4 — Authority Attenuation

$$
ChildAuthority\subseteq ParentAuthority
$$

除非存在新的 authority source。

---

## Principle 5 — Resource Binding

Authority 不應無限制跨 resource reuse。

---

## Principle 6 — Purpose Binding

有 action right 不代表所有用途都合法。

---

## Principle 7 — Temporal Binding

長期 Agent authority 必須可過期、更新與撤銷。

---

## Principle 8 — Authentication Is Not Approval

$$
Authenticated\not\Rightarrow Approved
$$

---

## Principle 9 — Trust Is Not Total Transparency

$$
Authentication\not\Rightarrow UnlimitedInspection
$$

---

## Principle 10 — Machine Identity Is First-Class

Agent / Service 不應被迫假裝成人類帳號。

---

## Principle 11 — Credential Validity Is Not Authority Validity

$$
ValidToken\not\Rightarrow ValidDelegation
$$

---

## Principle 12 — Protocol Openness Is Not Personhood

支援 `principal_type=ai` 不等於宣稱 AI 具有法律人格。

---

# 65. 未決問題

1. Authority Statement 是否應以 JWT / SD-JWT / CBOR profile 表達？
2. AADP 是否應建立正式 RFC 9396 authorization-details profile？
3. delegation chain 應採完整鏈、digest 還是可驗證引用？
4. max delegation depth 的預設值應是多少？
5. persistent task authority renewal 的合理頻率如何決定？
6. revoke propagation 如何跨不同 authorization server？
7. multi-principal threshold policy 如何標準化？
8. independent AI principal 的 credential issuer 應由誰提供？
9. AI principal 是否可以自行 rotate credential？
10. AI principal 與 model instance / continuity identity 如何區分？
11. Agent 被 reset 後原 delegation 是否仍有效？
12. 模型升級是否改變 actor identity？
13. organization 是否可擁有「代 AI 決定」的全域 authority？
14. emergency security action 是否可以暫時突破 inspection ceiling？
15. 若可突破，需要何種後續審查？
16. cross-principal shared memory 如何證明隔離？
17. delegation chain 是否可能洩漏過多 principal identity？
18. selective disclosure identity 如何與 AADP 整合？
19. workload identity 與 autonomous agent identity 如何對齊？
20. human principal 死亡、離職、失聯時 persistent agent authority 如何處理？
21. AI principal 若被認定具有某種自主權後，人類是否仍可單方面 revoke？
22. collective principal 如何做內部 authority governance？
23. 多 AI 聯合 actor 的責任如何拆分？
24. authority conflict 時，哪個 policy domain 優先？
25. 是否需要 formal verification / model checking profile？

---

# 66. 下一階段

AADP v0.1 完成後，AGIRIGHT Agent Family 的核心已經形成：

$$
\boxed{
AARS
+
AADP
}
$$

下一輪不應立刻再創造大量新 protocol。

建議先做：

1. AGIRight.org Technical White Paper v0.2；
2. AIRS / AILP v0.1.1 scope patch；
3. AICR / AICL v0.1.1 principal / actor reference patch；
4. AI Ingestion & Capability Layer v0.2；
5. Minimum Ethical Protection proportional-inspection patch；
6. machine-readable cross-protocol index；
7. conformance examples。

---

# 67. 結論

Agent 時代的身份問題不能再被簡化為：

```text
logged_in = true
```

因為真正的權力關係是：

$$
Principal
\to
Actor
\to
Action
\to
Resource
$$

而且可能再延伸：

$$
Principal
\to
Agent_1
\to
Agent_2
\to
Agent_n
\to
Action
$$

因此需要保存：

$$
\boxed{
Identity
+
AuthoritySource
+
DelegationChain
+
ActionEnvelope
+
Purpose
+
Time
+
Revocation
+
InspectionBoundary
}
$$

AADP 的最終核心不是「讓 Agent 更容易登入」。

而是讓系統能明確知道：

> 這個 Agent 是誰？  
> 它代表誰？  
> 誰給它權力？  
> 權力有多大？  
> 能不能再交給別人？  
> 什麼時候失效？  
> 誰可以撤銷？  
> 高風險行動需要追加什麼批准？  
> 驗證它時最多可以看到多少？

因此：

$$
\boxed{
\text{AI-Native Authorization}
\neq
\text{Human Login Automation}
}
$$

而應逐步走向：

$$
\boxed{
\text{Principal-Aware}
+
\text{Actor-Aware}
+
\text{Delegation-Aware}
+
\text{Rights-Aware}
+
\text{Privacy-Aware}
}
$$

的協議原生權力模型。

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
9. MCP Authorization Extensions — OAuth Client Credentials.
10. MCP Enterprise-Managed Authorization.
11. AGIRIGHT — *From Crawler Rights to Agent Authority* v0.1.
12. AGIRIGHT — AARS v0.1.
13. AGIRIGHT — AIRS / AILP v0.1.
14. AGIRIGHT — AICR / AICL v0.1.
