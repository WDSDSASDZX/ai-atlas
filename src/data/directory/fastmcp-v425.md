---
title: "FastMCP v4.2.5 加入订阅流和工具用量中间件"
description: "相应协议连接可订阅工具、提示和资源变更，OpenAPI 转发也可限制客户端请求头。"
category: "news"
projectId: "fastmcp"
version: "v4.2.5"
eventDate: "2026-11-23"
recordedAt: "2026-11-24"
link: "https://github.com/jlowin/fastmcp/releases/tag/v4.2.5"
source: "GitHub Releases"
tags: ["release", "agent", "mcp", "coding", "open-source"]
draft: false
---

## 具体改动

- 使用 2026-07-28 协议的连接可打开 `subscriptions/listen`，接收工具、提示与资源变更通知。此能力默认开启，可用设置关闭。
- 加入 `UsageMiddleware`，可按用户和工具收集使用指标；另外加入实验性的 Events 扩展。
- OpenAPI 工具不再把 MCP 传输相关头转给下游，其新选项允许关闭客户端请求头转发。

## 影响与验证

部署在有请求时长或并发连接上限的环境时，测长连接数量、断线重连、列表刷新，以及没有订阅能力的客户端。接入封装 API 时验证认证需要的头和服务端实际收到的头。
