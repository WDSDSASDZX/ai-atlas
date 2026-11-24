---
title: "MAI Code 2 与 Code 2 Flash：多文件实现和低延迟修复"
description: "微软发布自研编程模型 Code 2 与 Code 2 Flash，并宣布面向受信任客户的 MAI 模型权重授权。"
category: model
recordedAt: "2026-11-23"
eventDate: "2026-11-17"
tags: ["2026-11-月度","Microsoft","coding","企业 AI"]
link: "https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/"
source: "Microsoft 官方博客"
featured: false
draft: false
topics: ["models", "coding"]
---

Code 2 面向多文件实现和调试，Flash 面向更快的局部修改和解释。首发渠道包括 GitHub Copilot 与 Microsoft Foundry。MAI Licensed Weights 是对特定客户提供的授权方式，实际开放范围需要看微软的具体条款。

## 两种模型怎么验证

Code 2 适合用需要理解跨文件依赖、补测试和修复构建的任务来测。Code 2 Flash 可以先做短修、小块代码解释与重复修改。为两者提供相同仓库修订和可执行测试，由 diff 和测试结果判断，记录失败后的额外工具轮数。

## 接入与部署边界

GitHub Copilot 与 Foundry 的工具环境、上下文注入和访问范围可能不同。在同一平台内比较两档模型，并保留实际使用的模型 ID。授权权重另看适用客户、部署条件与许可；云端可调用的模型与可本地加载的权重是两类入口。
