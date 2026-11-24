---
title: "有状态 Agent 的可靠性验证：恢复、审批、工具与追踪"
description: "用固定输入和模拟工具复测 checkpoint、人工审批、MCP 重连、重试与可观测性。"
category: note
recordedAt: "2026-11-24"
topics: ["coding", "governance", "research"]
tags: ["agent", "mcp", "workflow", "可观测性"]
link: "https://docs.langchain.com/oss/python/langgraph/persistence"
source: "AI Atlas 工程笔记"
related: ["langgraph", "dify", "fastmcp", "langfuse"]
draft: false
---

## 一条工作流覆盖四类失败

用一个示例任务先检索资料，再生成草稿、请求人工批准并写入测试存储。为运行、工具调用和写入设置可关联的 ID。外部工具用受控 mock，能返回成功、超时和拒绝。

1. **断电或进程退出**。在工具返回之后、持久化之前停掉 worker；用同一 thread 恢复。检查节点执行次数、已写入数据与后续计划。检查点恢复和外部写入不共享事务时，外部写入需用幂等键或唯一约束保护。
2. **人工审批**。分别从批准、拒绝、到期三条路径继续。检查恢复时拿到的是对应节点的状态；重复送达审批事件只推进一次。对没有权限的测试账号确认无法代替审批人。
3. **MCP 服务重连**。标记客户端、服务端的协议版本。在测试连接中令工具列表发生变化并断开连接，检查订阅与重新读取的行为。固定工具参数和 schema，对照升级前后同一输入。
4. **上游模型中途断流**。分别在有效输出之前与之后中断。检查客户端是否收到重复事件，记录实际请求和失败次数；使用工具调用时还要定位是否发生重复动作。

## 如何读追踪证据

对照用户请求、父运行、子图和工具 span。如果审批暂停以后换了 trace，确认可通过事件或运行 ID 回到上一段。追踪和工作流分别验证，因为遥测采样、队列和上报失败可能造成可见记录缺失。跟踪工具次数、端到端延迟、可恢复比例与重复副作用，结合测试任务的正确性判断是否可以上线。

- [LangGraph 持久化机制](https://docs.langchain.com/oss/python/langgraph/persistence)
- [Dify 1.20.0 追踪与审批发布说明](https://github.com/langgenius/dify/releases/tag/1.20.0)
- [FastMCP v4.2.5 的订阅发布说明](https://github.com/jlowin/fastmcp/releases/tag/v4.2.5)
