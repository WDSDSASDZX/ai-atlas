---
title: "Gemini 4 本月三次更新：Carbon、Hydrogen 与 Neon"
description: "Google 先提供 Carbon 开发者入口，再推出 Hydrogen 和 Neon，覆盖深度推理、日常执行和复杂高频任务。"
category: model
recordedAt: "2026-11-23"
eventDate: "2026-11-18"
tags: ["2026-11-月度","Google","agent","多模态"]
link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
source: "Google 官方发布"
featured: true
draft: false
verifiedAt: "2026-11-23"
availability: "released"
openness: "hosted"
access: "Gemini API、Gemini 应用和 Google Antigravity，部分入口需订阅"
takeaway: "三个型号覆盖长流程、日常执行和复杂高频工作。选型时可以对着自己的代码或文件测。"
related: ["src/data/directory/2026-11-17-gpt-6-2.md","src/data/directory/2026-11-19-gemini-mac-computer-use.md","src/data/directory/2026-11-10-gemini-robotics-2-5.md"]
timeline:
  - date: "2026-11-10"
    title: "Carbon 开放开发者入口"
    description: "通过 Gemini API 向付费开发者和企业提供，用于更难的长流程任务。"
    link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
  - date: "2026-11-12"
    title: "Hydrogen 发布"
    description: "偏向快速执行和日常 Agent 工作流，Google 搜索也宣布相应升级。"
    link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
  - date: "2026-11-18"
    title: "Neon 开始推广"
    description: "在深度与速度之间取平衡，开始进入 Gemini API、Gemini 应用等渠道。"
    link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
links:
  - title: "Google DeepMind 的 Neon 模型卡"
    url: "https://deepmind.google/models/model-cards/gemini-4-neon/"
---

## 三款模型分工

Carbon 面向最难的长流程工作，Hydrogen 面向高频、需要快速反馈的日常任务，Neon 则针对复杂编程和企业分析等高频任务，在速度与推理深度之间取平衡。

## Neon 的实际信息

Google 公布 Neon 有 100 万词元上下文，API 每百万输入、缓存输入、输出词元分别为 3、0.15、15 美元。公告列出的首批渠道包括 Gemini API 的付费入口，以及面向 Pro 和 Ultra 订户的 Gemini 应用。

百万上下文有利于把多份 PDF、图表和表格放在同一次任务里。实际效果值得用自己的材料检验，例如让模型同时核对三份表格并指出冲突，再检查它能否标明证据位置。
