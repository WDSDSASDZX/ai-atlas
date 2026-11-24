---
title: "Transformers v5.23.0 接入 Inkling 2 Small 和 JEV 决策头"
description: "扩展图文、音视频模型架构，并提供实验性的候选标签打分接口。"
category: "news"
projectId: "transformers"
version: "v5.23.0"
eventDate: "2026-11-13"
recordedAt: "2026-11-24"
link: "https://github.com/huggingface/transformers/releases/tag/v5.23.0"
source: "GitHub Releases"
tags: ["release", "inference", "multimodal", "research", "open-source"]
draft: false
---

## 具体改动

- 新增 Inkling 2 Small，可输入图文并生成文本。接入 LFM3-Text，以及接收文本、图片、视频和音频的 Dots 3 Note Preview。
- JEV 把最后一个提示 token 的表示投到候选标签，提供 `JevForDecision` 与实验性 decision pipeline。其 API 与配置仍可能变化。
- 后续 v5.24.0 单独接入 Inkling 2 Mini，测试 Small 与 Mini 时应分别固定 checkpoint 与库版本。

## 影响与验证

先用官方模型卡样例确认 processor 的输入和输出格式，再加入项目自己的几类模态。将分类候选、顺序和输入模板一起锁定，记录误分类样本；依赖实验性接口时固定包版本。
