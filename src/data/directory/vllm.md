---
title: "vLLM"
description: "面向并发服务的大模型推理引擎，重点在批处理、KV 缓存、并行与 OpenAI 兼容接口。"
category: "project"
link: "https://github.com/vllm-project/vllm"
source: "vLLM 官方仓库"
recordedAt: "2026-11-24"
tags: ["inference", "serving", "open-source"]
featured: true
draft: false
---

## 项目做什么

vLLM 把模型运行、请求调度与对外 API 组合成推理服务。批处理和 KV 缓存让多个请求共享 GPU 资源，模型、量化格式和硬件后端决定了可用的优化组合。

## 适合的场景

适合内部 API 或多用户服务。对单条请求和长输入高并发应分别压测，生产队列里的输入长度分布对吞吐的影响往往很大。

## 评估时看什么

固定镜像、GPU、模型与权重，分别记录首 token 延迟、输出速率、吞吐、峰值显存与失败率。升级时把默认值、镜像标签和客户端流式事件当成兼容性合同。

## 官方资料

- [GitHub 仓库](https://github.com/vllm-project/vllm)
- [官方文档或发布索引](https://docs.vllm.ai/)
