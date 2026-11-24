---
title: "Hugging Face Transformers v5.24.0 增加 Inkling 2 Mini 和 Apertus 1.5"
description: "模型库增加两个多模态模型的支持，其中 Apertus 1.5 支持文本、图像和音频输入。"
category: project
recordedAt: "2026-11-23"
eventDate: "2026-11-21"
tags: ["2026-11-月度", "GitHub", "open-source", "多模态", "模型工具", "release", "inference", "multimodal", "research"]
link: "https://github.com/huggingface/transformers/releases/tag/v5.24.0"
source: "GitHub Releases · Hugging Face"
featured: false
draft: false
projectId: "transformers"
version: "v5.24.0"
---

这条记录的日期是框架新增支持的日期。Apertus 1.5 在该集成中输出文本，Inkling 2 Mini 则处理文本和图像输入。加载前可核对具体检查点、量化格式和设备支持。

## 具体改动

- forward、generate、生成准备函数和输出对象统一为 `cache`。旧名现阶段仍告警兼容，同时传入新旧参数会抛错。自定义 Cache 子类应接收 update 的额外 `kwargs` 参数。
- 生成式多模态模型改用共同的输出类。旧 `modeling_attn_mask_utils.py` 已移除，仍从它导入的自定义模型需迁到 `transformers.masking_utils`；PEFT 最低版本升到 0.22.0。
- 新增 Inkling 2 Mini、Apertus 1.5 和 Omnilingual ASR 等模型支持。静态缓存也接入辅助解码。

## 影响与验证

有自定义生成循环的库需要测首步无缓存、连续几步有缓存、batch 不同长度，以及旧字段过渡。若代码按各模型专属输出类分支，检查输出类型判断与序列化。
