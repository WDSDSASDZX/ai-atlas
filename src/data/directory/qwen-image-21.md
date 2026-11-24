---
title: "Qwen-Image-2.1 合并文生图与编辑，支持原生透明图"
description: "同一模型支持文字生成、图像编辑和透明图，官方公布生成组件为 7B 参数。"
category: "model"
projectId: "qwen"
version: "Qwen-Image-2.1"
eventDate: "2026-09-20"
recordedAt: "2026-11-24"
link: "https://qwen.ai/blog?id=qwen-image-2.1"
source: "Qwen 官方公告"
tags: ["release", "multimodal", "research"]
draft: false
---

## 具体改动

- 将文生图与图像编辑合并到一个模型，并支持由文本生成透明图、对透明图层编辑和从照片中提取主体。
- 官方确认视觉生成组件的参数量为 7B，并在公告中链接公开权重与项目入口。
- 部署侧的可用能力还取决于推理工具和流程节点。SGLang v0.5.22 的发布说明也记录了通过 SGLang Diffusion 接入 ComfyUI 的支持。

## 影响与验证

用同一组提示词测试透明边缘、主体细节和图层后续编辑。输出后检查 PNG 的 alpha 通道，在图像合成里验证透明区域是否符合预期。
