---
title: "Qdrant v1.20.0 新增 payload 全文 BM25 和 TurboQuant"
description: "支持在全文字段索引直接做 BM25 打分，增加向量数据类型和嵌套对象索引能力。"
category: "news"
projectId: "qdrant"
version: "v1.20.0"
eventDate: "2026-10-22"
recordedAt: "2026-11-24"
link: "https://github.com/qdrant/qdrant/releases/tag/v1.20.0"
source: "GitHub Releases"
tags: ["release", "rag", "vector-search", "open-source"]
draft: false
---

## 具体改动

- 全文 payload 索引可直接提供 BM25 打分，增加代码 tokenizer；嵌套对象可用逐元素索引加快条件筛选。
- TurboQuant 新增 `turbo8` 和 `turbo16` 向量数据类型。配置 `hnsw_config.inline_storage` 时可避免另存一份向量数据。
- 快照上传与下载扩大流缓冲，存储端快照名唯一；服务端无响应时，下载新增超时处理。

## 影响与验证

用含专有名词、代码标识符和纯语义问法的同一套查询对照 BM25 与向量结果。试用压缩配置时单独记录召回变化、磁盘占用和重建期间的延迟。
