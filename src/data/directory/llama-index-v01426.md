---
title: "LlamaIndex v0.14.26 调整集成包 Python 约束，修复 LangChain 桥接"
description: "核心包修复桥接导入，多组集成包重新锁定依赖并提高 Python 版本要求。"
category: "news"
projectId: "llama-index"
version: "v0.14.26"
link: "https://github.com/run-llama/llama_index/releases/tag/v0.14.26"
source: "GitHub Releases"
eventDate: "2026-11-14"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["rag", "coding"]
tags: ["release", "rag", "agent", "open-source"]
availability: "released"
openness: "source"
related: ["rag-pipeline-evaluation", "qdrant"]
draft: false
---

## 具体改动

- `llama-index-core` 0.14.26 修复 LangChain bridge 因 `langchain-community` 弃用变化而报错的导入。
- 发布说明先列出仅调整集成包锁文件的变更，随后列出提高多个集成包 `requires-python` 的变更。实际门槛由部署中安装的包决定。
- 一些此前限制 `llama-index-llms-openai<0.8` 的集成包允许 0.8.x。发布清单按核心、嵌入、向量库、回调等包列出版本。

## 依赖与数据边界

生产里的入口可能只直接安装核心包，模型、Qdrant 和追踪适配器各自由其他包提供。现有环境里的旧轮子可能掩盖导入问题，冷启动容器更容易暴露依赖不一致。此次发布说明的上述变更涉及代码与依赖，旧索引是否可用仍要用生产相同的嵌入模型和存储适配器验证。

## 影响与验证

在干净容器里从锁文件安装并导入真实用到的 reader、embedding、vector store 和回调插件。先查询一个旧索引，再写一条同维度的新向量，检查元数据过滤、文本和分数映射。运行一次失败的上游调用，确认错误和正确请求能分别被回调记录。
