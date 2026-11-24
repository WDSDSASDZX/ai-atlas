---
title: "TensorRT-LLM"
description: "NVIDIA GPU 上的大模型服务工具，覆盖硬件相关内核、并行、量化、批处理和服务接口。"
category: "project"
link: "https://github.com/NVIDIA/TensorRT-LLM"
source: "TensorRT-LLM 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["deployment", "industry"]
tags: ["inference", "serving", "GPU", "open-source"]
openness: "source"
draft: false
---

## 关心哪一层

TensorRT-LLM 在模型权重和调用接口之间安排推理运行器、并行、KV 缓存和量化内核。模型在某型号 GPU 上可启动，只是兼容性起点；量化、批处理、工具调用和跨节点配置都需要分别确认。

## 适用范围

面向 NVIDIA GPU 的推理服务与性能调优。评估前从支持矩阵筛出 GPU 架构、模型版本和可用精度。应同时考虑启动镜像、显存容量、互联带宽和可维护性。

## 如何横向对比

用同一批真实请求对照 vLLM、SGLang 或现有引擎。分别测短请求、长输入、多轮共享前缀和突发并发，报告超时与生成失败。不同权重量化的输出质量也需要复测。

## 官方资料

- [项目文档](https://nvidia.github.io/TensorRT-LLM/)
- [GitHub 发布记录](https://github.com/NVIDIA/TensorRT-LLM/releases)
