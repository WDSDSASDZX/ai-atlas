---
title: "ComfyUI v0.45.0 根据可用内存调整 SeedVR2 VAE 切片"
description: "改进 VAE 相关错误提示和内存适配，新增 Pika 图像与音频合作方节点。"
category: "news"
projectId: "comfyui"
version: "v0.45.0"
eventDate: "2026-11-11"
recordedAt: "2026-11-24"
link: "https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.45.0"
source: "GitHub Releases"
tags: ["release", "multimodal", "workflow", "local", "open-source"]
draft: false
---

## 具体改动

- SeedVR2 VAE 切片长度可随可用内存变化；错误选用 pixel-space VAE 时，界面提供更明确的提示。
- Pika 增加 H3 Flex、配乐、音效和音乐节点，另添加 Tencent HY LLM 合作方节点。工作流模板升级到 0.11.102。
- 本地 Web SSO 与合作方节点令牌相关选项改为默认开启，相关部署应核对现有设置。

## 影响与验证

用同一工作流测试两个输入分辨率档，记录运行是否稳定、峰值显存和输出时长。团队场景再确认后台相关开关和合作方节点能在预期账号上正常运行。
