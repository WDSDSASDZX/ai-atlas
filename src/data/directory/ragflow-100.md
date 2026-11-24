---
title: "RAGFlow v1.0.0 正式版改用 Go，聊天加入多步检索"
description: "官方发布 1.0 正式版，核心以 Go 重写，Agentic Chat 迭代检索并判断证据是否足够。"
category: "news"
projectId: "ragflow"
version: "v1.0.0"
eventDate: "2026-11-06"
recordedAt: "2026-11-24"
link: "https://github.com/infiniflow/ragflow/releases/tag/v1.0.0"
source: "GitHub Releases"
tags: ["release", "rag", "workflow", "open-source"]
draft: false
---

## 具体改动

- Go 重写覆盖部署与运行路径，官方报告镜像、启动和并发有显著改善。实际改善幅度取决于硬件、数据库、文档类型和并发模型。
- Agentic Chat 取代旧思考等级。流程可在多轮中调用检索和工具，Jev 判断当前证据是否足以回答；历史会话可记录提示词、token 用量和执行时间。
- 从 v1.0.0-rc3 可直接升级。从 v0.27.2 升级时 Docker 启动会运行数据迁移；更早版本应按项目的迁移文档操作。

## 影响与验证

以备份副本测试索引、权限和旧引用能否读取。比较简单单文档问题与需要跨多份文档的难题，记录检索轮数、引用准确度、总延迟和 token 用量。

## 补充资料

- [RAGFlow 官方版本说明和迁移入口](https://ragflow.io/docs/release_notes)
