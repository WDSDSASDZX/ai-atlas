---
title: "Ollama v0.40.18 构建优化 Inkling 2 的 Metal 推理"
description: "针对 Inkling 2 合并部分 GPU 运算、原位追加滑动窗口缓存，并缩小草稿解码的计算量。"
category: "news"
projectId: "ollama"
version: "v0.40.18"
eventDate: "2026-11-24"
recordedAt: "2026-11-24"
link: "https://github.com/ollama/ollama/releases/tag/v0.40.18"
source: "GitHub 构建标签"
tags: ["release", "local", "inference", "open-source"]
draft: false
---

## 具体改动

- Metal 新增 Inkling 2 专用内核，覆盖部分短 BF16 矩阵积、专家读取和循环层运算。按 GPU 代际和计算规模启用，每条优化都有原计算图作为回退。
- 预填充走更快的路径。有序窗口缓存可原位追加，草稿阶段采用 8 位草稿与 4 位词表头；草稿仅提出候选，发布标签说明最终输出保持一致。
- 此条对应 11 月 24 日的 GitHub 构建标签，源码标签的状态可在官方页面查看。

## 影响与验证

在 Apple Silicon 上用同一个模型标签、同一段长提示词分别测首 token 时间和输出速度。再跑一组长对话，让滑动窗口跨过边界，记录内存峰值和输出是否出现异常。
