---
title: "SGLang v0.5.22 加入 InstantTensor，修复结构化输出状态"
description: "切到 Python 3.11 起步，新增权重加载器，并修复混合线性模型在特定组合下的恢复错误。"
category: "news"
projectId: "sglang"
version: "v0.5.22"
eventDate: "2026-10-19"
recordedAt: "2026-11-24"
link: "https://github.com/sgl-project/sglang/releases/tag/v0.5.22"
source: "GitHub Releases"
tags: ["release", "inference", "serving", "open-source"]
draft: false
---

## 具体改动

- 新增 InstantTensor 加载器。HiSparse 可在 KV 缓存位于 CPU 内存的长上下文场景中使用 EAGLE 和 MTP。
- Apple Silicon 可使用标准 PyTorch 后端运行。SGLang Diffusion 新增 ComfyUI 中的 MiniMax-H3、Qwen-Image 2.1 接入，支持社区 GGUF 和 LoRA。
- 修复混合线性模型同时使用推测解码与结构化输出时，可能恢复到错误 Mamba 状态的问题。此版起最低 Python 为 3.11。

## 影响与验证

把模型加载时间与进入健康状态的时间分开记录。使用结构化输出的团队可以拿同一组 schema 与长上下文请求，分别比较旧版与新版的 JSON 校验通过率和稳定性。
