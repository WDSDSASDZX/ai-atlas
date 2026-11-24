---
title: "llama.cpp b12669 可按目标体积选量化类型"
description: "量化工具新增目标大小和目标平均位宽选项，可在预算内给不同张量分配不同量化类型。"
category: "news"
projectId: "llama-cpp"
version: "b12669"
eventDate: "2026-11-24"
recordedAt: "2026-11-24"
link: "https://github.com/ggml-org/llama.cpp/releases/tag/b12669"
source: "GitHub 构建发布"
tags: ["release", "local", "inference", "open-source"]
draft: false
---

## 具体改动

- 为量化流程增加 `--target-size` 与 `--target-bpw`，在设定文件体积或平均每权重位数后，由工具搜索各张量的量化类型组合。
- 优化过程能读取 imatrix 统计量，并提供 `--target-exclude` 等选择控制，便于保留需要单独处理的张量。
- 版本记录包含不同模型与目标尺寸下的优化工作；文件预估与生成结果仍应以具体模型和量化选择为准。

## 影响与验证

如果 GGUF 必须塞进一个确定的存储或内存档位，用同一源权重和同一校准集产出传统固定档与目标大小档。记录实际文件体积、同样提示词上的质量、推理内存和速度。
