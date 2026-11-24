---
title: "Qwen"
description: "通义千问的语言、多模态与图像模型系列，记录可调用的服务版本、公开权重和推理兼容性。"
category: "model"
link: "https://github.com/QwenLM"
source: "Qwen 官方组织"
recordedAt: "2026-11-23"
tags: ["open-source"]
featured: false
draft: false
note: "按具体版本继续补充评测和使用成本，避免混淆模型系列与某一版本。"
---

## 从任务找模型

长文档、视觉理解、实时音视频和图像生成是不同的能力。需要从截图提取事实时，优先核对视觉输入、识别精度和多图支持；要输出带透明通道的素材时，则看图像生成和编辑家族的版本。

## 评估时记录什么

使用云端服务时记录模型 ID、接口和输入模态，避免把系列名混成某一个快照。下载权重时同时记录模型卡许可、精确版本、量化档和 Transformers、llama.cpp 或 vLLM 的具体版本。实际比较可以分别跑短输入、长文档和图像样例，再检查质量差异与延迟。

## 官方资料

- [Qwen 官方 GitHub](https://github.com/QwenLM)
- [Qwen 发布与研究](https://qwen.ai/research)
