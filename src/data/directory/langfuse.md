---
title: "Langfuse"
description: "记录模型与工具调用的追踪数据，支持样本、人工标注、评估和用量分析。"
category: "project"
link: "https://github.com/langfuse/langfuse"
source: "Langfuse 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["governance", "research", "coding"]
tags: ["可观测性", "OpenTelemetry", "评测", "agent"]
openness: "source"
draft: false
---

## 哪些数据适合接入

把一次用户请求作为 trace，并把检索、模型生成、工具调用等建成子 span。保存足以排查用途的模型标识、时间、错误类型、token 和请求关联 ID。会话用于聚合多次运行，标注和自动评测可用相同记录作为输入。

## 可观测性与评测怎么配合

当问答质量变差时，先沿 trace 区分检索遗漏、模型拒答或工具异常，再用标注队列抽查具体输出。仓库内服务版本和应用内 SDK 可以独立升级，关键是核对 OTLP 数据格式以及采样、重试和字段映射。

## 部署时的边界

测试环境可用固定的示例请求验证 trace 树。实际业务流量需要明确日志留存、隐藏个人信息以及可见范围，并在监测延迟时记录采集开销。

## 官方资料

- [项目文档](https://langfuse.com/docs)
- [GitHub 发布记录](https://github.com/langfuse/langfuse/releases)
