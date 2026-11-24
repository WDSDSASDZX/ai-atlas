---
title: "OpenCode v2.4.1 修复 macOS 12 存档与 Ollama 模型列表"
description: "旧版 macOS 可重新保存助手消息，仅通过配置定义的 provider 也能出现在模型选择器。"
category: "news"
projectId: "opencode"
version: "v2.4.1"
eventDate: "2026-11-23"
recordedAt: "2026-11-24"
link: "https://github.com/anomalyco/opencode/releases/tag/v2.4.1"
source: "GitHub Releases"
tags: ["release", "agent", "coding", "open-source"]
draft: false
---

## 具体改动

- 修复 v2.4.0 使用的 SQLite JSON 运算符在 macOS 12 系统版 SQLite 上导致助手消息存不下来的问题。
- Ollama 等只写在配置里的 provider，无需先走 `/connect`，模型也可在 `/models` 里显示。
- 修正会话压缩有时保留超出 `keep.tokens` 的历史。后台侧聊完成时标签会显示未读标记。

## 影响与验证

在 macOS 12 中新建会话、收一条回复、退出再打开，检查助手消息是否保留。用只配置 Ollama 的环境测试模型列表，并在长会话跑过一次压缩。
