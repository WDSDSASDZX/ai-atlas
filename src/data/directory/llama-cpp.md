---
title: "llama.cpp"
description: "以 C/C++ 实现的大模型推理工具链，覆盖 GGUF 模型转换、量化、基准测试和本地服务。"
category: "project"
link: "https://github.com/ggml-org/llama.cpp"
source: "llama.cpp 官方仓库"
recordedAt: "2026-11-24"
tags: ["local", "inference", "open-source"]
featured: true
draft: false
---

## 项目做什么

常用入口包括交互式推理、HTTP 服务、量化工具和基准工具。项目持续演进 CPU、Metal、CUDA、HIP、Vulkan 等后端，支持范围随模型架构、量化格式和构建版本变化。

## 适合的场景

适合需要掌控构建后端、线程数和 GPU 分层卸载的场景，也适合用同一个 GGUF 对比不同机器。模型量化实验可以保留同权重的多个档位，再做速度与结果质量对照。

## 评估时看什么

记录具体构建号、编译选项、量化档和提示词模板。分别比较提示处理速度、生成速度与内存占用。多模态模型还要核对投影文件和对应构建的支持情况。

## 官方资料

- [GitHub 仓库](https://github.com/ggml-org/llama.cpp)
- [官方文档或发布索引](https://github.com/ggml-org/llama.cpp/releases)
