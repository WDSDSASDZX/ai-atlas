---
title: "Opera 139 接入 Web AI 提案"
description: "Opera 让站点可以通过拟议接口使用兼容的本地 AI 模型。"
category: tool
recordedAt: "2026-11-23"
eventDate: "2026-10-27"
tags: ["2026-11-月度","Opera","local","浏览器"]
link: "https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/"
source: "Opera 官方博客"
featured: false
draft: false
links:
  - title: "Opera 139 稳定版公告"
    url: "https://blogs.opera.com/desktop/2026/10/opera-139-stable/"
---

这个方向适合尝试把轻量摘要等功能放到浏览器设备本地。公告介绍的是拟议的 Web 标准及 Opera 的实现，跨浏览器覆盖范围需要分别确认。

## API 与运行环境

Opera 的早期预览提供 Prompt、Decision 和 Semantic Embeddings 三类接口，分别用于文本生成、候选判断与语义向量。浏览器内置推理，根据系统和设备使用兼容模型。启用为用户主动选择，首次需要模型下载。公告的支持范围包括 x64 Windows 和 Apple Silicon Mac。

## 网页兼容性与验证

对网站和扩展先检测接口是否存在、用户有无启用、模型是否就绪。用同一个短分类任务分别测初次调用、缓存后的再次调用、模型不可用和关闭开关四种状态。对本地处理有要求的场景，还需要用网络面板核对页面或扩展自身有没有上传输入内容。
