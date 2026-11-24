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

## 影响与验证

如果前端靠事件流显示进度，检查独立线程子图的事件命名空间、数量和顺序，再用数据库检查点模拟服务重启，确保子图从预期线程续跑。
