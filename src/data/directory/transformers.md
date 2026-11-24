---
title: "Hugging Face Transformers"
description: "模型加载、预处理和生成的 Python 库，覆盖文本、图像、音频与视频模型。"
category: "project"
link: "https://github.com/huggingface/transformers"
source: "Hugging Face Transformers 官方仓库"
recordedAt: "2026-11-24"
tags: ["inference", "multimodal", "research", "open-source"]
featured: true
draft: false
---

## 项目做什么

Transformers 把不同模型的配置、权重、处理器和推理模型组织到统一接口中。使用 Auto 类时，具体输入格式仍由模型与 processor 决定。

## 适合的场景

适合读取模型权重、构建研究样例或验证新架构。需要把模型放进高并发服务时，还要单独验证要用的 serving 引擎是否支持同一模型和量化方法。

## 评估时看什么

固定模型 revision 与 Transformers 版本，确保 tokenizer 或 processor 来自同一个模型版本。升级时验证自定义生成循环、KV 缓存类、PEFT 组合，以及图像或音频输入的预处理结果。

## 官方资料

- [GitHub 仓库](https://github.com/huggingface/transformers)
- [官方文档或发布索引](https://huggingface.co/docs/transformers/)
