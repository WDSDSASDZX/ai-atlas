---
title: "whisper.cpp"
description: "Whisper 语音识别的 C/C++ 实现，提供本地转写、字幕输出和多平台推理后端。"
category: "project"
link: "https://github.com/ggml-org/whisper.cpp"
source: "whisper.cpp 官方仓库"
recordedAt: "2026-11-24"
tags: ["local", "multimodal", "inference", "open-source"]
featured: false
draft: false
---

## 项目做什么

whisper.cpp 可在本机处理录音，无需把音频发给托管 API。它和 llama.cpp 使用相关的底层推理生态，但模型文件、流程和版本各自独立。

## 适合的场景

适合会议录音、播客或离线字幕。短音频、长录音、背景噪声、不同口音或多语言混用应分别测试。

## 评估时看什么

固定模型、量化与音频样本，对比实时系数、文字和时间戳准确度。自定义集成还要检查目标硬件的二进制产物和 Go 等语言绑定。

## 官方资料

- [GitHub 仓库](https://github.com/ggml-org/whisper.cpp)
- [官方文档或发布索引](https://github.com/ggml-org/whisper.cpp/releases)
