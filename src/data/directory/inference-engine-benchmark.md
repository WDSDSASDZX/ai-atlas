---
title: "推理引擎选型与基准：从模型兼容到并发尾延迟"
description: "用同一权重和负载比较 llama.cpp、Ollama、vLLM、SGLang 与 TensorRT-LLM，区分加载、首 token、解码和长上下文。"
category: note
recordedAt: "2026-11-24"
topics: ["deployment", "industry", "research"]
tags: ["inference", "serving", "评测", "量化"]
link: "https://docs.vllm.ai/en/latest/cli/bench/serve/"
source: "AI Atlas 工程笔记"
related: ["llama-cpp", "ollama", "vllm", "sglang", "tensorrt-llm"]
featured: true
draft: false
---

## 先确定比较对象

| 使用条件 | 先检查 | 可做的对照 |
| --- | --- | --- |
| 单台电脑、GGUF 量化模型 | 转换工具、量化档和 GPU 卸载 | llama.cpp 的后端与 Ollama 的模型管理 |
| 多用户服务、同一模型并发生成 | 芯片、权重格式、OpenAI 兼容接口和工具结果 | vLLM 和 SGLang 的调度、缓存与分布式组合 |
| NVIDIA 集群、固定硬件和模型 | 模型支持矩阵、精度路径、容器和 GPU 互联 | 将 TensorRT-LLM 加入同一轮压测 |

同一名称的模型可能经由不同权重转换、模板和量化加载。能统一时锁定 model revision、tokenizer、聊天模板、精度、上下文和生成参数。只能使用不同格式时，在结果注明，并加一组输出质量对照。

## 准备四类负载

1. **短问短答**。相同长度的请求先以低并发跑通，验证返回类型、输入输出 token 与基础延迟。
2. **长输入**。准备不同长度的输入，在前、中、后分别放有标注的信息，检查输出是否能定位事实。记录首 token 时间和显存峰值。
3. **共享前缀**。发送多条具有相同系统提示词的请求，再换成不同前缀。分别记录缓存冷启动和热命中。使用两个样本类型可以区分常见系统提示词的收益与全新请求的代价。
4. **突发并发**。逐步提高请求到达速率，保留超时、排队和被拒绝的请求。复现真实输入长度及工具调用等业务结构。

## 指标怎么读

- **首 token 延迟（TTFT）**包括客户端看到首个有效生成事件前的时间。用流式请求，固定客户端网络路径。
- **每输出 token 时间（TPOT）**反映首 token 之后的生成节奏。记录中位和尾部数据，一次请求只有一个 token 时该指标无意义。
- **吞吐**同时记录输出 token/s、成功请求/s 和失败率。达到延迟预算的成功量才适合估算容量。
- **资源与质量**记录模型加载时间、GPU 内存峰值、上下文上限以及输出检查。工具调用要解析参数，结构化输出要通过 schema。
- **成本**基于硬件、并发和真实运行时间换算每个成功请求的费用。长期运行服务还需要考虑空闲资源。

## 升级判断

先确定应用的延迟和错误预算，再跟旧版本对照。保留每轮的引擎版本、GPU、驱动、模型、batch 和配置。升级涉及缓存默认值时，查看启动日志确认实际容量，并跑一次持续负载观察显存；涉及 API 时，保存成功与中断的事件序列做回归。

- [vLLM 服务基准工具](https://docs.vllm.ai/en/latest/cli/bench/serve/)
- [SGLang 文档](https://docs.sglang.io/)
- [TensorRT-LLM 支持和部署指南](https://nvidia.github.io/TensorRT-LLM/)
