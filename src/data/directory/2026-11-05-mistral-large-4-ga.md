---
title: "Mistral Large 4 进入正式可用阶段"
description: "法国 Mistral 的旗舰多模态模型进入 GA，文档列出开放权重和专用许可。"
category: model
recordedAt: "2026-11-23"
eventDate: "2026-11-05"
tags: ["2026-11-月度","Mistral","法国","开放权重","多模态"]
link: "https://docs.mistral.ai/models/mistral-large-latest"
source: "Mistral 官方模型文档"
featured: false
draft: false
verifiedAt: "2026-11-23"
availability: "released"
openness: "weights"
access: "官方模型文档，下载和再分发须核对许可"
related: ["src/data/directory/2026-11-16-vllm-034.md"]
topics: ["models", "multimodal", "deployment"]
---

这条记录采用文档标注的 11 月 5 日 GA 日期。文档给出约 1.05 万亿总参数、520 亿激活参数，并列出 Mistral Ecosystem Open Weight License v26.10。计划商用、托管或再分发时，需要按权重版本核对许可条件。

## 规模、视觉与长上下文

官方文档给出的 52B 是每 token 的激活参数规模，完整权重覆盖所有专家。部署空间还要预算视觉编码器、量化权重、KV 缓存和工作区。模型卡列出独立视觉编码器与百万 token 上下文。实际输入上限应根据模型 ID、接口和服务的输出预算核对。

## API 路径与权重路径

开发者可对照结构化输出、函数调用、文档问答的接口支持，自托管则先核对模型和权重格式是否在引擎支持表中。使用相同的图表、长文和最小工具组合，测长输入的首 token、输出格式与引用。部署前在精度、并行与显存之间找符合实际任务的配置。
