---
title: "LangChain"
description: "面向模型应用的 Python Agent 框架，提供统一模型接口、工具、结构化输出和中间件。"
category: "project"
link: "https://github.com/langchain-ai/langchain"
source: "LangChain 官方仓库"
recordedAt: "2026-11-24"
tags: ["agent", "coding", "open-source"]
featured: false
draft: false
---

## 项目做什么

LangChain 负责较高层的编程接口，如构建 Agent、注册工具和读取消息。其执行流程可由 LangGraph 承载。官方仓库同时发布核心库、主包、拆分器及各家模型集成，每个包各自编号。

## 适合的场景

适合用少量代码做出调用模型、读取资料与输出结构化结果的应用。需要手动控制有向图或从指定节点接续执行时，可以到 LangGraph 层组织流程。

## 评估时看什么

审查 lockfile 中的 langchain、langchain-core 和 provider 包。用同一组工具请求覆盖流式 message、工具异常与结构化输出，尤其注意 provider 返回字段的差异。

## 官方资料

- [GitHub 仓库](https://github.com/langchain-ai/langchain)
- [官方文档或发布索引](https://docs.langchain.com/oss/python/langchain/overview)
