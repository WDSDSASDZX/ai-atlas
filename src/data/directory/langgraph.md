---
title: "LangGraph"
description: "在代码里组织有状态 Agent，支持图式编排、检查点、暂停与恢复。"
category: "project"
link: "https://github.com/langchain-ai/langgraph"
source: "LangGraph 官方仓库"
recordedAt: "2026-11-23"
tags: ["agent","coding","open-source"]
featured: false
draft: false
note: "可以重点研究状态管理、流程控制与长任务恢复。"
---

## 项目做什么

LangGraph 将 Agent 的步骤定义为节点与边。状态更新由 reducer 合并，检查点负责在同一个 thread 中保存执行状态，interrupt 可以让流程等到人工输入再继续。

## 适合的场景

适合持续时间长、可以暂停的流程，比如报告交给人工审核后再发布，或现场检查失败之后从保留的状态继续。带外部副作用的节点要能安全重试。

## 评估时看什么

用持久化检查点模拟进程重启，检查历史 thread 能否恢复。重点覆盖子图命名空间、人工暂停后的续跑、流式事件和消息状态清空。

## 官方资料

- [GitHub 仓库](https://github.com/langchain-ai/langgraph)
- [官方文档或发布索引](https://docs.langchain.com/oss/python/langgraph/overview)
