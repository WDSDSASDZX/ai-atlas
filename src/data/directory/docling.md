---
title: "Docling"
description: "解析 PDF、Office 和其他文件，把阅读顺序、表格及页面结构整理为可检索内容。"
category: "project"
link: "https://github.com/docling-project/docling"
source: "Docling 官方仓库"
recordedAt: "2026-11-24"
verifiedAt: "2026-11-24"
topics: ["rag", "multimodal"]
tags: ["文档解析", "rag", "open-source"]
openness: "source"
draft: false
---

## 在数据链上负责哪一段

Docling 接收文档，产出带结构的 DoclingDocument，并支持导出 Markdown 等格式。它负责把原始版面变成标题、段落、表格和媒体等元素。后面还需要按任务切分，生成嵌入或关键词索引，再为模型提供检索证据。

## 选择解析方式

扫描件、复杂表格和原生文字 PDF 应分开处理。先检查阅读顺序、跨列文本和表格结构，再决定是否引入 OCR 或视觉语言模型。处理成本、可用后端与可选模型有关，固定 Docling、解析器和模型版本后才能复现。

## 用什么样本验证

选一份高密度双栏 PDF、一份扫描件和一份带大单元格的表格文档，标记原页码、标题、合并单元格和容易串行的文字。在索引前检查解析输出，可避免把错误归咎于嵌入模型。

## 官方资料

- [项目文档](https://docling-project.github.io/docling/)
- [GitHub 发布记录](https://github.com/docling-project/docling/releases)
