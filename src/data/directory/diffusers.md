---
title: "Hugging Face Diffusers"
description: "用 Python 组装图像、视频以及扩散模型推理管线，控制组件、采样与模型适配器。"
category: "project"
link: "https://github.com/huggingface/diffusers"
source: "Hugging Face Diffusers 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["multimodal", "research"]
tags: ["multimodal", "图像生成", "open-source"]
openness: "source"
draft: false
---

## 管线由什么组成

扩散管线通常包含条件编码器、生成网络、采样调度器和解码器。控制这些组件可以复用权重、调整采样过程，或给固定任务加载 LoRA。模型支持更换的范围以对应管线的文档为准。

## 适合怎样验证

适合在代码里保存推理参数和模型 revision、批跑素材，或替换调度器研究输出。先用官方最小样例验证权重与依赖，再调分辨率、步数、随机种子和卸载策略。显存和延迟随模型、输入尺寸和硬件变化，需要用同一组素材对照。

## 与节点工具怎么配合

Diffusers 适合以脚本控制张量、推理路径和生成参数。ComfyUI 适合在图上反复组合图像与视频操作。两边复现同一个结果时，核对权重、图像预处理、噪声初始化与调度器。

## 官方资料

- [项目文档](https://huggingface.co/docs/diffusers/)
- [GitHub 发布记录](https://github.com/huggingface/diffusers/releases)
