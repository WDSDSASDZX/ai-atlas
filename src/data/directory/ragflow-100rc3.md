---
title: "RAGFlow v1.0.0-rc3 引入证据充分性判断"
description: "1.0 的最终候选版加入 Jev 决策模型、多版本导入 DSL 和更细的聊天执行记录。"
category: "news"
projectId: "ragflow"
version: "v1.0.0-rc3"
eventDate: "2026-10-30"
recordedAt: "2026-11-24"
link: "https://github.com/infiniflow/ragflow/releases/tag/v1.0.0-rc3"
source: "GitHub Releases"
tags: ["release", "rag", "workflow", "open-source"]
draft: false
---

## 具体改动

- Agent 调用工具时可使用决策模型判断证据是否足够，Categorize 节点也加入 Jev 的支持。
- 文档导入管道可处理多版本 DSL；聊天历史新增提示词、token 用量和执行用时字段。
- 候选版与 rc2 的数据库 schema 兼容。这条记录可用于理解 1.0 正式版的变更来源。

## 影响与验证

存档保留此版本便于定位 1.0 功能何时进入。若正在迁移旧版本，用含表格和图像的样本文档试跑旧 DSL，再核对新聊天记录及引用。
