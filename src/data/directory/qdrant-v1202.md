---
title: "Qdrant v1.20.2 调整 HNSW 构建默认值，优化批量过滤"
description: "恢复经典 HNSW 构图为默认，并加速在同一向量字段上共享过滤条件的批量搜索。"
category: "news"
projectId: "qdrant"
version: "v1.20.2"
eventDate: "2026-11-16"
recordedAt: "2026-11-24"
link: "https://github.com/qdrant/qdrant/releases/tag/v1.20.2"
source: "GitHub Releases"
tags: ["release", "rag", "vector-search", "open-source"]
draft: false
---

## 具体改动

- 经典 HNSW 构图恢复为默认，大 segment 上的 `ef_construct` 可用于调节构图质量。
- 多条查询在同一向量索引上共用过滤条件时，批量查询路径得到优化。
- 补丁还修正 leader 选举后立即加入的新 peer 失败的问题，并支持加载缺少 `ef_construct` 的 collection 配置。

## 影响与验证

拿生产中的常用过滤组合压测 batch 请求及单请求。对于新建或重建的索引，比较不同 `ef_construct` 的搜索召回率、构建时间和索引占用。
