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

## 检索功能解决的不同问题

全文字段 BM25 重视词面命中，适合编号或代码标识符。向量字段可用来找相近语义。嵌套索引帮助处理数组对象内部的结构化条件。量化则改变向量的存储与距离近似，需要单独测量质量与资源，不能将几项改动的收益合并到一个吞吐数字。

## 选型样本

对一批标有正确文档的查询，分别跑纯全文、纯向量和融合。针对嵌套字段构造同一个数组元素满足全部条件、跨元素分别满足条件两种样本。比较向量压缩时使用相同过滤和索引参数，记录召回、索引大小、建索引耗时与 P95。

## 影响与验证

用含专有名词、代码标识符和纯语义问法的同一套查询对照 BM25 与向量结果。试用压缩配置时单独记录召回变化、磁盘占用和重建期间的延迟。
