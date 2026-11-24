---
title: "Ollama"
description: "本地大模型运行和管理工具，提供 CLI、模型库与 HTTP API，可连接聊天界面或开发工具。"
category: "tool"
link: "https://github.com/ollama/ollama"
source: "Ollama 官方仓库"
recordedAt: "2026-11-23"
tags: ["local","open-source"]
featured: true
draft: false
note: "本地模型使用入口，可继续记录显存需求与实际运行体验。"
---

## 项目做什么

Ollama 把模型下载、加载、生成和模型生命周期管理放进一个服务。模型标签和 Modelfile 能记录模型来源、模板与默认参数，同一服务也可以被多种客户端连接。

## 适合的场景

适合在个人电脑验证小模型、尝试本地工具调用，或给 Open WebUI 提供本机模型。对于固定设备上的实验，从能跑通的量化档开始，再逐步增加上下文和并发。

## 评估时看什么

记录模型标签、量化格式、上下文长度和实际使用的 GPU 后端。测试首轮冷启动、连续请求和工具调用返回的 JSON。模型标签相同也可以随库中的模型更新而变动，涉及可复现性时记录具体摘要。

## 官方资料

- [GitHub 仓库](https://github.com/ollama/ollama)
- [官方文档或发布索引](https://docs.ollama.com/)
