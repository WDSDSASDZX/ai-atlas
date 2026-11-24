---
title: "LangGraph 1.2.22 修复独立线程子图的事件流"
description: "调用方订阅子图事件时可收到独立线程上的子图输出，并优化宽状态与检查点读取。"
category: "news"
projectId: "langgraph"
version: "1.2.22"
eventDate: "2026-11-14"
recordedAt: "2026-11-24"
link: "https://github.com/langchain-ai/langgraph/releases/tag/1.2.22"
source: "GitHub Releases"
tags: ["release", "agent", "workflow", "coding", "open-source"]
draft: false
---

## 具体改动

- 父图请求子图流时，运行在自己 thread 上的子图可以把事件传回调用方。
- 普通消息的 `add_messages` 跳过一部分类型转换，待写入状态的处理按任务过滤；宽状态中改用集合判断更新键。
- 此次同时发布了多个有独立版本的包，包括 checkpoint 4.3.2、checkpoint-postgres 3.2.1 和 prebuilt 1.1.2。

## 区分状态、检查点和事件

检查点决定重启后能恢复什么，事件流决定调用方在运行时能观察什么。独立线程子图的事件修复应该用 `subgraphs` 启用的流单独验证。只有最终状态正确，仍可能漏过前端进度依赖的事件。

## 适用于哪些调用方

嵌套工作流、进度 UI 与日志订阅方受影响较直接。固定父子 thread 与命名空间，先验证事件不漏，再在挂起处重启检查持久化。性能改动另用包含大量状态键、消息和待写记录的图来测，简单示例的结果不宜外推。

## 影响与验证

如果前端靠事件流显示进度，检查独立线程子图的事件命名空间、数量和顺序，再用数据库检查点模拟服务重启，确保子图从预期线程续跑。
