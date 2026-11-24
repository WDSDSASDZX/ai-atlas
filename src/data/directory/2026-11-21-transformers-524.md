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

## 旧接口会在哪里出问题

直接调用 forward、封装 generate 和从输出读缓存是三处不同接口。兼容期间旧字段会出现弃用告警，同时传新旧参数会报错。包内的静态缓存改动也会影响自定义 Cache.update 的入参签名。把库、PEFT、模型仓库自定义代码的版本放在同一份锁文件中。

## 测试样例

准备一个传统注意力模型、一个带线性层的混合模型和一个图文模型。将完整序列生成与分步带缓存生成对照，同时测试 batch 内不同长度，记录输出类型、dtype 和生成文本。适配器用单独一轮验证加载和切换，以区分模型代码兼容与 PEFT 依赖问题。

## 影响与验证

有自定义生成循环的库需要测首步无缓存、连续几步有缓存、batch 不同长度，以及旧字段过渡。若代码按各模型专属输出类分支，检查输出类型判断与序列化。
