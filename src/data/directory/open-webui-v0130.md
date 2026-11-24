---
title: "Open WebUI v0.13.0 把文件、终端和预览搬进会话标签页"
description: "新工作区支持并排查看聊天、文件与产物，增加内嵌 MCP App 和知识库文件限制。"
category: "news"
projectId: "open-webui"
version: "v0.13.0"
eventDate: "2026-11-03"
recordedAt: "2026-11-24"
link: "https://github.com/open-webui/open-webui/releases/tag/v0.13.0"
source: "GitHub Releases"
tags: ["release", "local", "rag", "workflow"]
draft: false
---

## 具体改动

- 聊天顶部加入标签式工作区。文件、终端、预览与评论可同时打开，宽屏可以扩展当前标签。浏览器和桌面标签依赖配置了相应能力的 Open Terminal。
- 带界面的 MCP 工具执行后可以在聊天内显示应用。应用触发的工具调用仍需用户确认。
- 新增 Side Chat 权限，默认关闭；管理员还可配置单知识库文件数、文件大小和单次上传数量的上限。

## 影响与验证

先用普通成员账号检查侧聊、评论和工具审批，再用包含文件、终端和预览的会话测试宽屏与窄屏操作。RAG 部署需验证已有知识库和接近上传上限的文件。
