---
title: "Hugging Face PEFT"
description: "为预训练模型做参数高效微调，支持 LoRA 及适配器的训练、保存、合并和加载。"
category: "project"
link: "https://github.com/huggingface/peft"
source: "Hugging Face PEFT 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["training", "models"]
tags: ["training", "fine-tuning", "LoRA", "open-source"]
openness: "source"
draft: false
---

## 训练时改动什么

参数高效微调保留大量预训练权重，通过适配器、权重子集等较少的可训练参数调整模型。以 LoRA 为例，可训练低秩矩阵的乘积对应基础线性层上的增量。rank、目标层、训练数据与基础 checkpoint 都会影响质量与成本。

## 部署时的两条路径

适配器可独立保存，需要在推理端加载匹配的基础模型。某些场景可以先把增量合并到模型权重，再按部署框架生成对应产物。量化、分布式分片和合并要求随模型与后端变化。

## 怎么验收

训练前保存无适配器基线。训练结束后核对可训练参数量、保存产物大小和通用样本回归。使用完整的新进程从基础权重和适配器重载一次，同时检查失败样例，避免内存里仍有训练状态导致假通过。

## 官方资料

- [项目文档](https://huggingface.co/docs/peft/)
- [GitHub 发布记录](https://github.com/huggingface/peft/releases)
