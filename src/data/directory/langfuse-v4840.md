---
title: "Langfuse v4.84.0 增加批量标注入口与可选原生 OTEL 处理"
description: "MCP 加入批量创建标注项，worker 接入可选原生 OpenTelemetry 处理，标注页展示更多分数和会话信息。"
category: "news"
projectId: "langfuse"
version: "v4.84.0"
link: "https://github.com/langfuse/langfuse/releases/tag/v4.84.0"
source: "GitHub Releases"
eventDate: "2026-11-23"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["governance", "research", "coding"]
tags: ["release", "可观测性", "OpenTelemetry", "评测", "agent"]
availability: "released"
openness: "source"
related: ["dify-1200"]
draft: false
---

## 具体改动

- MCP 加入 `batchCreateAnnotationQueueItems`，可以一次把多条样本放入标注队列。队列详情使用更新后的会话视图，并展示项目的评分。
- 暴露原生 OTEL 批次生命周期，并在 worker 加入显式启用的原生直处理路径。此处是服务端的处理路径变化，客户端 SDK 是否需要配合以实际部署方式为准。
- 对使用相关功能的部署，发布还包含 ClickHouse 用量账本迁移与 AI Gateway 组织级用量预算。

## 接入层与边界

链路追踪用于定位一次请求的步骤，人工标注用于判断具体结果是否正确。要把这两者对上，检查主 trace、子 span 与队列项指向同一条样本。新采集路径涉及字段、时序、错误和队列行为，不能只看界面上出现一条 trace。

## 影响与验证

在沙箱发送固定的多步骤请求，覆盖成功、工具错误和缺少可选成本字段。分别对照旧路径和启用原生路径后的父子关系、token、入库延迟及条数。将几条固定记录加入标注队列，检查评分保存后能关联回原始运行；使用新用量账本的部署在升级前确认数据库迁移状态。
