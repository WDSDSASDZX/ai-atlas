---
title: "Open WebUI v0.13.4 接入 Tether 和 OpenAI 兼容向量库"
description: "网页可使用通过 Tether 连接的个人模型和工具，外部知识源也可接入 OpenAI 兼容 vector store。"
category: "news"
projectId: "open-webui"
version: "v0.13.4"
eventDate: "2026-11-17"
recordedAt: "2026-11-24"
link: "https://github.com/open-webui/open-webui/releases/tag/v0.13.4"
source: "GitHub Releases"
tags: ["release", "local", "rag", "workflow"]
draft: false
---

## 具体改动

- Tether 将自己电脑上的 Ollama、LM Studio、OpenAI 兼容模型、工具服务和终端接到个人会话。基础连接需 Tether 0.1.14，接 MCP 服务器需 0.1.16；工具和终端依赖管理员开启工具服务。
- 外部知识源增加 OpenAI、Azure OpenAI 或 LiteLLM 的兼容向量库。检索由远端服务执行，选定的 store 可以作为只读知识库显示。
- 共享文件夹增加按状态、标签等筛选的会话视图，长 PDF 预览采用按需渲染。浏览器页内查找只覆盖附近已加载的页。

## 影响与验证

用两种账号分别查看 Tether 下的模型与共享模型，验证读者看到的资源范围。对远端向量库测试引用和访问权限，依赖浏览器搜索全文的用户可直接试长 PDF 的查找。
