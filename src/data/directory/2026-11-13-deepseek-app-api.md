---
title: "DeepSeek 把客户端的工具能力开放到 API"
description: "应用里的搜索、网页读取、OCR、语音识别及语音合成等能力可作为独立接口使用。"
category: tool
recordedAt: "2026-11-23"
eventDate: "2026-11-13"
tags: ["2026-11-月度", "DeepSeek", "中国", "agent", "API", "release", "multimodal", "research"]
link: "https://api-docs.deepseek.com/news/news261113/"
source: "DeepSeek API 官方更新"
featured: false
draft: false
verifiedAt: "2026-11-24"
availability: "released"
openness: "hosted"
access: "DeepSeek API"
related: ["src/data/directory/deepseek.md"]
links:
  - title: "Responses API 文档"
    url: "https://api-docs.deepseek.com/api/create-response/"
projectId: "deepseek"
version: "应用 API"
---

对想自己搭建资讯整理流程的人，这次更新增加了可组合的工具接口。例如，可以先读取网页，再把结果交给模型提取标题、日期和来源。使用时应对照文档区分由平台执行的工具和应用端需要处理的步骤。

## 具体改动

- `deepseek-flash` 通过 Messages、Responses 与 Chat Completions 接入这些能力，工具执行和上下文组装由服务端处理。
- 非思考模式可搜索网页或图片并提供引用；思考模式可以多步搜索及读取页面。文件输入覆盖 PDF、Office 文件与图片等格式。
- 搜索、抓取、OCR、ASR 和 TTS 也可以单独调用。使用内置工具会在普通 token 费用之外产生相应工具用量。

## 影响与验证

用一个公开网页、一个扫描 PDF 和一个带图表的 Office 文件测试。检查引用是否对应原文、解析失败如何反馈、客户端如何统计工具次数。

## 补充资料

- [DeepSeek 聊天应用 API 指南](https://api-docs.deepseek.com/guides/build_a_chatbot)
