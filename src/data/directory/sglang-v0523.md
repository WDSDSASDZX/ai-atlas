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

## 影响与验证

若目的是在显存有限的节点跑 MoE，比较默认模式、Paged Experts 和已有卸载方案，记录专家加载开销与 P95。上线 LoRA 前也要测试两个不同 adapter 的请求交织，以及长上下文下的缓存行为。
