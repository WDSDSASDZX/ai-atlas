---
title: "vLLM v0.33.0 转向 CUDA 13.0，新增决策接口"
description: "切换 PyTorch 2.14 和 CUDA 13.0 发布产物，并加入分类用的决策接口和 AWS EFA 镜像。"
category: "news"
projectId: "vllm"
version: "v0.33.0"
eventDate: "2026-11-02"
recordedAt: "2026-11-24"
link: "https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3"
source: "GitHub Releases"
tags: ["release", "inference", "serving", "open-source"]
draft: false
---

## 具体改动

- PyTorch 升到 2.14.0。CUDA 发布轮子和镜像改为 CUDA 13.0，移除 `-cu129` 系列镜像。AMD 默认镜像改为 ROCm 10.0，此版本仍发布 `-rocm72`。
- 受支持的生成模型提供 `/v1/decisions`，适合用候选标签做分类。新增一批模型支持，包括 MiniCPM-OCR 1.0 与 ColUltraVBERT。多节点部署增加 AWS EFA 镜像。
- 移除 Medusa、MLP speculator 和旧 Ray compiled-graph executor。DFlash 和 DSpark 的草稿位置不再占用实际 token 预算。

## 影响与验证

先检查基础镜像、内核驱动和分布式队列，再在相同模型与硬件上重新标定吞吐。GitHub 将该正式发布说明挂在 `v0.33.0rc3` 标签上，部署时也应分别核对包或镜像的实际版本。
