---
title: "FastMCP"
description: "用于构建 MCP 服务端与客户端的 Python 框架，管理工具、资源、提示和连接。"
category: "project"
link: "https://github.com/jlowin/fastmcp"
source: "FastMCP 官方仓库"
recordedAt: "2026-11-24"
tags: ["agent", "mcp", "coding", "open-source"]
featured: false
draft: false
---

## 项目做什么

FastMCP 可将 Python 函数包装成工具，并把已有 OpenAPI 或 FastAPI 服务接入 MCP。对于远程服务，协议版本、认证、传输与会话生命周期都需要明确。

## 适合的场景

适合把内部查询、资料或可重复的工作步骤暴露给支持 MCP 的客户端。先用只读示例验证工具说明、参数校验和返回结构。

## 评估时看什么

混测新旧客户端，覆盖工具列表刷新、服务重连与资源读取。部署到连接数量受限的环境时，观察 MCP 订阅的连接持续时间和代理转发行为。

## 官方资料

- [GitHub 仓库](https://github.com/jlowin/fastmcp)
- [官方文档或发布索引](https://gofastmcp.com/)
