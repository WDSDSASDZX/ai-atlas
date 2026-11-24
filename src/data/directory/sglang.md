---
title: "SGLang"
description: "关注长上下文、共享前缀与多机调度的大模型推理引擎，也覆盖扩散模型工作负载。"
category: "project"
link: "https://github.com/sgl-project/sglang"
source: "SGLang 官方仓库"
recordedAt: "2026-11-24"
tags: ["inference", "serving", "open-source"]
featured: true
draft: false
---

## 项目做什么

SGLang 提供语言模型服务和扩散推理。服务端可缓存共享提示词前缀，并把提示处理与逐 token 生成拆给不同资源池。模型支持表和硬件特性需要按具体版本交叉核对。

## 适合的场景

适合系统提示词较长、前缀重复或者模型存在多种并行方案的服务。先使用真实请求的长度和前缀分布进行压测，再决定是否引入额外推理节点。

## 评估时看什么

分别记录缓存命中和未命中的首 token 延迟，给结构化输出、工具调用与长上下文增设回归样例。评估可选内核时固定 GPU 和并行配置，并保存原配置便于对照。

## 官方资料

- [GitHub 仓库](https://github.com/sgl-project/sglang)
- [官方文档或发布索引](https://docs.sglang.io/)
