---
title: "LlamaIndex"
description: "在 Python 代码中组织数据导入、索引、检索、重排和生成链路。"
category: "project"
link: "https://github.com/run-llama/llama_index"
source: "LlamaIndex 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["rag", "coding"]
tags: ["rag", "agent", "vector-search", "open-source"]
openness: "source"
draft: false
---

## 在架构中负责什么

LlamaIndex 将源文档转换成节点，再组织嵌入、存储、检索和响应生成。核心库和 provider 集成以独立包发布。应用可使用自己的文档解析器、向量库或语言模型。

## 适合的使用方式

需要精细控制切分、检索过滤、重排和引用生成时，分别固定每层的输入输出。把源文档 ID 与页码放到节点元数据里，记录存储和查询时是否保留。队列、索引库和模型部署属于外部依赖，需要单独评估。

## 评估时看什么

用一条中文简称、一条精确编号和一条需要两份文档的问答，分别查看召回文档、重排结果、送入模型的上下文与最后的引用。混用多方集成时，用干净环境重装锁文件核对 Python、核心包和插件版本。

## 官方资料

- [项目文档](https://docs.llamaindex.ai/en/stable/)
- [GitHub 发布记录](https://github.com/run-llama/llama_index/releases)
