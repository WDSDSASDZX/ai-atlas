---
title: "ComfyUI v0.46.0 移除 DirectML，改进视频拼接和通道处理"
description: "拼接时后续视频按首段帧率和音频对齐，加入通道拆分和单通道 PNG 输出。"
category: "news"
projectId: "comfyui"
version: "v0.46.0"
eventDate: "2026-11-19"
recordedAt: "2026-11-24"
link: "https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.46.0"
source: "GitHub Releases"
tags: ["release", "multimodal", "workflow", "local", "open-source"]
draft: false
---

## 具体改动

- Concatenate Video 将片段向首段的帧率和音频配置对齐；修复部分现有工作流无法正常运行的问题。
- 高级保存图片节点可保存单通道 PNG，另增加图像通道拆分节点。LTX 和 MiniMax 获得新的合作方节点，Wan、Krea 等节点迁往 Comfy Router。
- DirectML 支持被移除。Windows 部署若依赖该后端，需要先确认机器可使用的替代构建。

## 影响与验证

复用保存过的工作流测试两段帧率不同、音轨配置不同的视频，检查成片帧率、时长和音轨。用一张有透明通道的图确认拆分和各通道的 PNG 输出，碰到合作方节点时单独验证配置。
