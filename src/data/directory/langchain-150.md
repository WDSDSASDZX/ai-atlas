---
title: "LangChain 1.5.0 加入模型路由中间件并提高 Python 下限"
description: "新增 Beta 模型路由中间件，主包要求 Python 3.11 与 langchain-core 1.8.0 起步。"
category: "news"
projectId: "langchain"
version: "1.5.0"
eventDate: "2026-11-11"
recordedAt: "2026-11-24"
link: "https://github.com/langchain-ai/langchain/releases/tag/langchain%3D%3D1.5.0"
source: "GitHub Releases"
tags: ["release", "agent", "coding", "open-source"]
draft: false
---

## 具体改动

- 引入 `ModelRouterMiddleware` 与自动模式中间件，模型路由接口标记为 Beta。
- 主包停止支持 Python 3.10，最低版本为 3.11；核心包最低要求提高到 1.8.0。在 Python 3.10 环境下依赖解析会继续选择主包 1.4.x。
- 各 provider 和工具库有独立版本；本条对应 `langchain` 主包发布。

## 影响与验证

部署镜像与开发环境同时升到可用的 Python 版本，重新锁定核心与 provider 依赖。启用路由前，准备简单与复杂任务各一组，检查实际选择模型、输出 schema 和失败回退。
