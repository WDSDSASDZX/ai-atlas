---
title: "Qdrant"
description: "向量数据库，支持向量相似度、结构化 payload 过滤和混合检索。"
category: "project"
link: "https://github.com/qdrant/qdrant"
source: "Qdrant 官方仓库"
recordedAt: "2026-11-24"
tags: ["rag", "vector-search", "open-source"]
featured: false
draft: false
---

## 项目做什么

Qdrant 的 collection 存储向量、ID 与 payload，可为字段建索引。HNSW、向量压缩、全文检索与排名组合属于不同配置层，效果需要结合实际的数据分布。

## 适合的场景

适合向量检索之外还要过滤租户、目录或文档元数据的 RAG 应用，也适合实验关键词与语义混合召回。

## 评估时看什么

对照相同 collection 和 query 集合，用精确搜索或标注样本建立基线。分开记录命中率、P95 延迟、索引大小与重建耗时，带过滤与不带过滤都要测。

## 官方资料

- [GitHub 仓库](https://github.com/qdrant/qdrant)
- [官方文档或发布索引](https://qdrant.tech/documentation/)
