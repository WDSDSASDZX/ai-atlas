---
title: "Diffusers v0.43.0 扩展模块化图像、视频与世界模型管线"
description: "新增 MiniMax-H3-Image、Pika H3 Flex、Kandinsky S2V 和 PAN 2 等管线，改善注意力后端和 LoRA 组合。"
category: "news"
projectId: "diffusers"
version: "v0.43.0"
link: "https://github.com/huggingface/diffusers/releases/tag/v0.43.0"
source: "GitHub Releases"
eventDate: "2026-11-12"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["multimodal", "research"]
tags: ["release", "multimodal", "图像生成", "open-source"]
availability: "released"
openness: "source"
related: ["2026-11-10-pan-2", "comfyui"]
draft: false
---

## 具体改动

- 接入 MiniMax-H3-Image 的文生图和参考图编辑，以及 Pika H3 Flex 生成同步立体声音的视频流程。Kandinsky S2V 1.0 根据图像和语音做人像动画，按五秒分段并在段间传递记忆。
- PAN 2 的 29B 生成模拟器接入模块化文生视频和图生视频管线。生成器与负责组织提示的独立推理模型有各自的加载路径。
- 增加 RDNA4 gfx1201 的 SageAttention 后端，遇到不满足条件的输入形状可回退到原生 SDPA。修正跨多个适配器的组件权重广播与部分 LoRA alpha 保留。

## 工作机制与兼容性

模块化加载让多个工作流共享已加载的组件。切换文生图、参考图编辑或带声音的视频时，输入约定和检查点仍要按管线分别配置。硬件后端的可用性与设备和输入形状有关，比较速度时应同时记录实际走到的后端。

## 影响与验证

固定种子、分辨率和采样参数，先完成一张单参考图编辑，再加入第二张参考图。视频测试选择超过五秒的语音，检查分段边界、口型、画面和音轨。多 LoRA 流程先分别加载两个适配器，再组合并调权重，比较显存、时间和输出变动。
