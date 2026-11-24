---
title: "RAGFlow"
description: "集文档解析、索引、检索及带引用问答于一体的 RAG 平台，也支持多步 Agent 检索。"
category: "project"
link: "https://github.com/infiniflow/ragflow"
source: "RAGFlow 官方仓库"
recordedAt: "2026-11-24"
tags: ["rag", "workflow", "open-source"]
featured: true
draft: false
---

## 项目做什么

RAGFlow 适合从文档入手观察从解析到回答的全链路。文件解析后生成切片并建立索引，聊天或 Agent 按需要检索来源与引用。

## 适合的场景

适合以 PDF、扫描件、表格和长文档为主的知识库。对同一份文档用真实问题检查切片、表格读取和引用回跳是否足够可靠。

## 评估时看什么

同时保留部署版本、解析配置、嵌入模型和索引快照。遇到大版本迁移，先用生产备份的副本验证文件数、已索引切片数和引用路径。

## 官方资料

- [GitHub 仓库](https://github.com/infiniflow/ragflow)
- [官方文档或发布索引](https://ragflow.io/docs/release_notes)
