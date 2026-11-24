---
title: "OceanBase 发布湖库一体 AI 数据平台 OceanLake"
description: "平台将数据库、数据仓库和数据湖的能力放在一起，供企业统一管理数据并支持 AI 应用。"
category: tool
recordedAt: "2026-11-24"
eventDate: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["rag", "deployment", "coding"]
tags: ["OceanBase", "中国", "数据基础设施", "agent"]
link: "https://www.oceanbase.com/product/oceanlake"
source: "OceanBase 产品页"
availability: "released"
links:
  - title: "IT之家大会现场报道"
    url: "https://www.ithome.com/1/031/365.htm"
---

OceanBase 在北京举行的 AI 数据大会上发布 OceanLake，并宣布开放其核心 AI 数据库引擎的源代码。平台把实时事务、分析计算和开放存储结合起来，处理表格、文档等不同形态的数据。

官方产品页列出的 Agentbase 提供企业数据访问、记忆和运行评测等服务，供企业将已有数据接入智能体应用。

## 数据、语义与 Agent 如何衔接

产品页列出的 OceanLake Core 支持业务过滤、全文和向量混合检索，并用 SQL 函数覆盖解析、切分、向量化与模型推理。存储侧列出 Iceberg 和 Paimon，计算侧列出 Ray、Spark、Daft 和 Flink。业务语义层维护指标与规则，Agentbase 负责知识、记忆、运行追踪及评测。

## 选型时验证哪些接口

准备一个结构化指标表、一批 PDF 和受权限控制的向量检索任务。用同一个更新事件验证从数据变更到指标可查和文档可检索的时差，检查 Catalog、权限、删除传播和引用。官方产品页描述能力组合，部署时需分别确认使用的组件、版本与支持范围。
