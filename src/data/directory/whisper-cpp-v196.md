---
title: "whisper.cpp v1.9.6 更新 ggml，修复脚本输出与 Go 链接"
description: "底层 ggml 升到 1.0.0，修复 CLI 的 wts 输出和 Go 绑定的 OpenMP 链接选项。"
category: "news"
projectId: "whisper-cpp"
version: "v1.9.6"
eventDate: "2026-11-24"
recordedAt: "2026-11-24"
link: "https://github.com/ggml-org/whisper.cpp/releases/tag/v1.9.6"
source: "GitHub Releases"
tags: ["release", "local", "multimodal", "inference", "open-source"]
draft: false
---

## 具体改动

- 同步 ggml 1.0.0，并在发布流程加入 API/ABI 检查。Whisper 内部日志符号调整为隐藏。
- CLI 修复 wts 输出，Go 绑定 cgo 链接项由 `-fopenmp` 改为 `-lgomp`。Windows ARM64 的部分构建也有底层修复。
- 发布说明以构建与底层修复为主，未公布新的 Whisper 权重。

## 影响与验证

使用目标平台的构建跑一份固定音频，对照转写文本、时间戳、wts 文件与已有导出。如果通过 Go 绑定或动态库集成，重新链接应用并复测一次初始化和退出。
