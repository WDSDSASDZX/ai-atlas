---
title: "TensorRT-LLM v1.3.0 预览 Rubin，扩展多模型与 KV 缓存"
description: "新增 Rubin 预览、默认 KV Cache Manager V2 及部分模型的 NVFP4 KV 缓存，服务端扩展 Messages、Responses 和 gRPC。"
category: "news"
projectId: "tensorrt-llm"
version: "v1.3.0"
link: "https://github.com/NVIDIA/TensorRT-LLM/releases/tag/v1.3.0"
source: "GitHub Releases"
eventDate: "2026-11-20"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["deployment", "industry"]
tags: ["release", "inference", "serving", "GPU", "open-source"]
availability: "released"
openness: "source"
related: ["inference-engine-benchmark", "vllm", "sglang"]
draft: false
---

## 具体改动

- 新增 Vera Rubin（SM107）预览并适配 DeepSeek-V4、Kimi K3 等模型。Qwen3.5 等混合 Mamba 模型新增前缀缓存。
- 大多数模型族默认选用 KV Cache Manager V2。增加磁盘缓存、按会话复用缓存块、部分 NVFP4 KV 缓存与连接器。共享提示词可由前缀感知调度减少重复预填充。
- 服务增加 Anthropic Messages API、gRPC 服务并扩展 Responses API 和 Prometheus 指标。发布还提供旧 TensorRT 后端移除的迁移指南。

## 机制与运行边界

缓存块可以复用已处理的历史，但需要同时满足模型、输入及缓存配置。对 Rubin，NVFP4 MoE 的局部域优化将通信局限在 GPU 芯粒附近，属于特定硬件路径。模型在 Blackwell、Hopper 或 Rubin 的量化、并行和解码支持并不完全相同，Rubin 在这一版仍是预览。

## 影响与验证

先在正式使用的 GPU 上确认镜像能加载生产模型与量化类型。选一套 32K 级长输入，再对同一聊天前缀发多轮请求，观察缓存命中、首 token 和每个输出 token 的耗时。旧后端部署需要比较迁移前后的启动参数、客户端流式事件及工具返回。
