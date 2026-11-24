---
title: "DeepSeek-V4.1-Flash-1017 更新端到端编程并公开权重"
description: "新检查点上线网页、App 与 API，并在 Hugging Face、ModelScope 提供权重。"
category: "model"
projectId: "deepseek"
version: "V4.1-Flash-1017"
eventDate: "2026-10-17"
recordedAt: "2026-11-24"
link: "https://api-docs.deepseek.com/news/news261017/"
source: "DeepSeek 官方公告"
tags: ["release", "multimodal", "research"]
draft: false
---

## 具体改动

- 官方称通过自反馈强化学习改善项目从零到可运行结果的过程，并公开了以相同工具集比较任务通过率与成本的结果。
- 新模型覆盖网页、App 与 API。对 DeepSeek Harness，公告建议使用 v0.2.1-rc.1 或更新版本。
- 权重以该具体检查点标识提供。进行本地评估时，同时固定权重、推理框架和 Agent 工具集，便于重现结果。

## 影响与验证

适合复测真实开发任务，包括带单元测试的仓库修复和小应用产物。除了测试是否通过，也记录人工纠正次数、实际输出 token 与完成时间。官方评测分数可以作为选题依据。

## 补充资料

- [DeepSeek-V4.1-Flash-1017 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
