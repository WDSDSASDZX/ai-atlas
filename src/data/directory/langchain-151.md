---
title: "LangChain 1.5.1 修复并发调用中的告警过滤竞争"
description: "告警抑制改为上下文局部处理，涉及 provider 推断和 ModelRequest。"
category: "news"
projectId: "langchain"
version: "1.5.1"
eventDate: "2026-11-18"
recordedAt: "2026-11-24"
link: "https://github.com/langchain-ai/langchain/releases/tag/langchain%3D%3D1.5.1"
source: "GitHub Releases"
tags: ["release", "agent", "coding", "open-source"]
draft: false
---

## 具体改动

- 核心库和主包的发布记录修复告警过滤的并发竞争，涉及 provider 推断与 ModelRequest 路径。
- 此补丁还更新了 OpenTelemetry API 与 dnspython 依赖。

## 影响与验证

跑两组并发请求，一组预期触发 provider 相关告警，另一组走正常配置。检查告警归属、任务结果和流式输出是否稳定，避免只用串行样例证明升级结果。
