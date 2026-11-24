---
title: "llama.cpp b12671 改进 Metal 张量拼接"
description: "优化连续张量的向量化装载与写入，并补充未对齐行和向量路径的测试。"
category: "news"
projectId: "llama-cpp"
version: "b12671"
eventDate: "2026-11-24"
recordedAt: "2026-11-24"
link: "https://github.com/ggml-org/llama.cpp/releases/tag/b12671"
source: "GitHub 构建发布"
tags: ["release", "local", "inference", "open-source"]
draft: false
---

## 具体改动

- Metal 拼接运算在连续区域尝试按四个元素成组复制，代替逐个元素处理，并对偏移和数据对齐做专门处理。
- 发布记录保留了实现过程：尝试多行合并发射后发现大 GPU 上部分形状会变慢，后续撤回这部分调度，保留向量化路径。
- 增加连续和未对齐行的测试，覆盖不同维度上的拼接。

## 影响与验证

适合关心 Apple Silicon 后端的读者对照。保持模型、量化和上下文不动，分别测提示处理和逐 token 解码。该提交改的是拼接内核，端到端收益取决于模型调用这个算子的频率。
