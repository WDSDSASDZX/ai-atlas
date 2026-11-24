---
title: "LiteLLM v1.110.2 修复 Responses 流重复与网关内存增长"
description: "已向客户端发出事件的流不会再从头重试，另有 Claude 参数兼容和请求生命周期修复。"
category: "news"
projectId: "litellm"
version: "v1.110.2"
eventDate: "2026-11-20"
recordedAt: "2026-11-24"
link: "https://github.com/BerriAI/litellm/releases/tag/v1.110.2"
source: "GitHub Releases"
tags: ["release", "gateway", "serving", "open-source"]
draft: false
---

## 具体改动

- 修复 Responses API 已发送输出或推理事件后还重新尝试上游的问题，减少客户端收到重复事件与多次上游调用。
- 部分不接受采样参数的 Claude 模型，收到默认温度时不再因此返回 400。转发 Anthropic 凭据时的自定义价格记录也得到修正。
- 修复完成请求一直留存、直到完整 GC 才释放带来的内存增长。

## 流式回退为何需要区分输出前后

尚未发送有效内容时，代理可以尝试另一个模型组，客户端仍只看见一次逻辑响应。已经读取输出时再从头重试，会出现重复事件、响应 ID 改变或额外上游用量。采集端到端事件时同时核对一次用户请求对应多少上游调用。

## 兼容范围

不同供应商的采样参数和计量方式不同。包含 Anthropic、Vertex AI 或 Azure AI 的路由要分供应商验证参数透传。网关的修复不能替代客户端对中断流的处理，需要保留首事件之前和之后中断的两份测试样本。

## 影响与验证

用测试上游分别在首事件之前与之后断流。对照客户端事件、上游调用次数和计费记录。长时间压测时比较进程 RSS 的趋势，并覆盖实际使用的 Claude provider。
