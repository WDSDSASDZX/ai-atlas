---
title: DeepSeek
description: "记录 DeepSeek 模型检查点、API 能力更新、开放权重和工具接口。"
category: model
link: https://github.com/deepseek-ai
source: DeepSeek 官方组织
recordedAt: 2026-11-23
tags:
  - open-source
  - research
note: 把模型版本、API 服务和开源代码分别记录，方便后续对比。
timeline:
  - date: 2026-08-11
    title: 0.0.1-rc.1
featured: false
draft: false
---

## 模型与服务如何对应

发布公告可能更新模型快照，也可能为已有模型接入搜索、文件输入等服务端工具。在云端调用时核对模型 ID 与接口格式。用公开权重本地部署时，需要单独接入应用层工具并核对推理引擎兼容性。

## 评估时记录什么

编程任务先用固定仓库、相同工具和测试套件对比。文档问答则同时记录来源引用、文件解析、工具调用次数和无法找到证据时的响应。如果接入 API，分别看模型输出、服务端工具费用和重试策略。

## 官方资料

- [DeepSeek GitHub](https://github.com/deepseek-ai)
- [DeepSeek API 更新日志](https://api-docs.deepseek.com/updates/)
- [DeepSeek 官方模型卡](https://huggingface.co/deepseek-ai)
