---
title: "LiteLLM"
description: "多模型 API 网关与 Python SDK，在同一入口管理模型路由、回退、用量与预算。"
category: "project"
link: "https://github.com/BerriAI/litellm"
source: "LiteLLM 官方仓库"
recordedAt: "2026-11-24"
tags: ["gateway", "serving", "open-source"]
featured: false
draft: false
---

## 项目做什么

LiteLLM Proxy 可以把请求送往不同模型部署，按模型组管理路由与回退，并在网关侧统计虚拟密钥和团队的用量。各上游 provider 的流式行为和参数支持仍有差别。

## 适合的场景

适合几个应用共同接入多家模型、需要统一配额与日志的团队。接入后从一个模型组、一个回退组和少量客户端开始验证。

## 评估时看什么

跑一组正常与中途断流的请求，校验流式事件顺序、上游请求次数、成本日志和实际回退目标。升级生产网关时固定镜像版本并核验发布产物。

## 官方资料

- [GitHub 仓库](https://github.com/BerriAI/litellm)
- [官方文档或发布索引](https://docs.litellm.ai/)
