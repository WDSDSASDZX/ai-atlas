---
title: "PEFT v0.22.0 扩展 LoRA 初始化、张量并行与 FSDP2 导出"
description: "新增 PaCA、Astra 和 NoRA 方法，改善分布式训练、适配器合并与权重导出。"
category: "news"
projectId: "peft"
version: "v0.22.0"
link: "https://github.com/huggingface/peft/releases/tag/v0.22.0"
source: "GitHub Releases"
eventDate: "2026-11-19"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["training", "models"]
tags: ["release", "training", "fine-tuning", "LoRA", "open-source"]
availability: "released"
openness: "source"
related: ["transformers", "2026-11-21-transformers-524"]
draft: false
---

## 具体改动

- PaCA 通过调整预训练权重中选出的输入列做参数高效微调。LoRA 新增两类初始化：Astra 基于小批任务数据的激活统计，NoRA 对初始化后的 A 矩阵各列归一化，同时保持 B 的零初始化。
- LoRA 支持 `embedding_colwise` 张量并行方案。复制到多个 rank 的 LoRA 参数在初始化时保持一致。
- FSDP2 和 HSDP 中改进分片参数形状识别、启停适配器后的可训练性，以及保存时收集 DTensor。加了适配器健康检查，可以看设备、dtype 和可训练参数。官方说明使用这些分布式改进需搭配 Transformers 5.17 或更新版本。

## 训练和导出的区别

训练期间每张卡可能只持有参数分片。导出给普通推理环境时需要正确收集适配器，而完整断点还要另保留优化器和调度器等训练状态。发布说明指出分片导出时参与训练的 rank 都要调用 `save_pretrained()`，通过 `is_main_process` 由主进程负责实际写文件。

## 影响与验证

同一基础模型、数据切分与步数下，记录旧版和新版的可训练参数量、峰值显存及验证集质量。多卡先训练几步后保存，用新进程重载适配器并检查输出，再跑一次完整训练断点恢复。对 Astra 另计校准用时，量化组合按推理环境单独复测。
