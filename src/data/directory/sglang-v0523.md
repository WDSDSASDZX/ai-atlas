---
title: "SGLang v0.5.23 加入按需加载专家和量化 MoE 的 LoRA 服务"
description: "新版本增加按需加载专家的可选模式、TPU7x 插件支持，以及多条长上下文与低延迟优化。"
category: "news"
projectId: "sglang"
version: "v0.5.23"
eventDate: "2026-11-03"
recordedAt: "2026-11-24"
link: "https://github.com/sgl-project/sglang/releases/tag/v0.5.23"
source: "GitHub Releases"
tags: ["release", "inference", "serving", "open-source"]
draft: false
---

## 具体改动

- Paged Experts 是可选路径，允许显存装不下的 MoE 把部分专家留在其他内存并按需加载，为单卡试运行较大模型提供选择。
- 新的可选 LoRA 引擎支持 FP8、NVFP4 量化的 MoE。Google TPU7x 则通过独立插件 SGLang-TorchTPU 接入。
- DeepSeek-V4.1 在 GB300 的长提示词预填充有专项优化；NVIDIA megakernel 与 AMD monokernel 低延迟解码走可选路径，收益依赖机型与负载。

## 计算、缓存与内存的取舍

MoE 每个 token 只使用部分专家。Paged Experts 在显存预算不足时按需调入需要的专家权重，工作集频繁变化时需要额外传输。重复前缀与相近批次也会影响有效吞吐，因此单轮小样本适合观察能否运行，持续负载才能检验 P95。

## 哪些能力要分开评估

低延迟解码内核按硬件和模型适配，TPU7x 通过独立插件，量化 MoE 的 LoRA 路径也需要显式启用。把权重加载与首次请求、缓存冷热、草稿命中率和输出一致性记录到同一份结果里。性能结论只适用于测到的配置。

## 影响与验证

若目的是在显存有限的节点跑 MoE，比较默认模式、Paged Experts 和已有卸载方案，记录专家加载开销与 P95。上线 LoRA 前也要测试两个不同 adapter 的请求交织，以及长上下文下的缓存行为。
