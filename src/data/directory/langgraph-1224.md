---
title: "LangGraph 1.2.24 修复清空消息和空检查点"
description: "增量消息 reducer 能处理清空标记，DeltaChannel 能处理为空的检查点。"
category: "news"
projectId: "langgraph"
version: "1.2.24"
eventDate: "2026-11-20"
recordedAt: "2026-11-24"
link: "https://github.com/langchain-ai/langgraph/releases/tag/1.2.24"
source: "GitHub Releases"
tags: ["release", "agent", "workflow", "coding", "open-source"]
draft: false
---

## 具体改动

- `_messages_delta_reducer` 可识别 `REMOVE_ALL_MESSAGES`，这关系到使用增量状态时重置历史后下一步看到的消息集合。
- 同一修复补上 DeltaChannel 对 `None` 检查点的处理，影响从空状态启动或恢复的路径。

## 影响与验证

用一条持久化线程验证三步：写入两条消息、发送清空标记、加载检查点再次执行。分别检查 reducer 的内存结果和重启后持久化恢复的结果。
