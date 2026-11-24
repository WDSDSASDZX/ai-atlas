---
title: "LiteLLM v1.110.3 更改 MCP 动态注册默认行为并修正回退"
description: "MCP 网关的动态客户端注册改为显式启用，模型回退按实际路由到的分组计算。"
category: "news"
projectId: "litellm"
version: "v1.110.3"
eventDate: "2026-11-24"
recordedAt: "2026-11-24"
link: "https://github.com/BerriAI/litellm/releases/tag/v1.110.3"
source: "GitHub Releases"
tags: ["release", "gateway", "serving", "open-source"]
draft: false
---

## 具体改动

- MCP 网关的动态客户端注册（DCR）改为 opt-in。依赖它的环境升级时需要核对网关策略和客户端注册路径。
- 回退基于已经被路由到的模型组，适用于请求名称与实际路由组不同的配置。该稳定分支补丁也回移了审计日志修复。
- 官方发布页给出镜像签名验证方式，可核对所用的 `v1.110.3` 镜像。

## 影响与验证

用一个以别名进入的请求模拟上游失败，检查回退去向和日志字段。若使用 MCP，分别验证已有客户端的连接与新客户端的注册行为。
