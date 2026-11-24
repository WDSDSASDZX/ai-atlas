---
title: "whisper.cpp v1.9.5 同步 ggml 与 Vulkan 修复"
description: "维护版升级 ggml 到 0.26.0，同步 Vulkan Flash Attention 等底层修复。"
category: "news"
projectId: "whisper-cpp"
version: "v1.9.5"
eventDate: "2026-10-07"
recordedAt: "2026-11-24"
link: "https://github.com/ggml-org/whisper.cpp/releases/tag/v1.9.5"
source: "GitHub Releases"
tags: ["release", "local", "multimodal", "inference", "open-source"]
draft: false
---

## 具体改动

- 同步 ggml 0.26.0，Vulkan Flash Attention 的共享内存边界与缓存复用问题有修复。
- 底层 CUDA 与 Vulkan 更新了若干量化和调度路径，这些改动的实际影响取决于选择的后端。
- 示例 `talk-llama` 的 llama.cpp 依赖升级到 v0.6.0，相关示例构建环境值得重新确认。

## 影响与验证

升级后对同一段长音频比较纯 CPU 与使用的 GPU 后端，并保留相同模型和解码选项。若项目基于 talk-llama 构建，单独验证联动示例的依赖与产物。
