---
title: "Docling v2.152.0 支持取消排队的 PDF 解析，并保留媒体轨道"
description: "停止转换时取消队列里的 PDF 任务，扩展媒体轨道和多语言标题处理，并接入 MLX 解析后端。"
category: "news"
projectId: "docling"
version: "v2.152.0"
link: "https://github.com/docling-project/docling/releases/tag/v2.152.0"
source: "GitHub Releases"
eventDate: "2026-11-23"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["rag", "multimodal"]
tags: ["release", "文档解析", "rag", "open-source"]
availability: "released"
openness: "source"
related: ["rag-pipeline-evaluation"]
draft: false
---

## 具体改动

- 停止转换时会取消尚在队列里的 PDF 解析任务。服务调用也可让服务端决定默认解析管线。
- 音视频转写和幻灯片媒体转成轨道。标题层级处理能读取更多语言的关键词标记。
- 新增 Nemotron 3.5 Parse 的原生 MLX 支持，PDFium 修复高表格单元格旁的文字和从右到左文字互相混入的问题。

## 工作机制与边界

入库前的错误会沿切分和索引传递。标题层级丢失会影响段落归属，表格行列错位会让数值对应到错误字段。取消排队作业主要影响尚未开始的 PDF，运行中任务的退出行为需按具体管线和服务配置单独验证。设置由服务器选默认管线时，要把实际使用的解析配置记入输出记录。

## 影响与验证

用带合并单元格的 PDF、含阿拉伯语和英文的文件、嵌有视频的幻灯片各跑一次。比对阅读顺序、表格结构和轨道是否保留。队列里放入若干长文件，取消其中一批，记录取消后还有多少作业启动，并确认其余文档能正常完成。
