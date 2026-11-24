---
title: "FastMCP v4.2.0 将 Skill 集中放在 MCP 服务端"
description: "Skill 可用普通 MCP 资源读取，也提供实验性的 Skill 清单协议；Python 最低版本升到 3.11。"
category: "news"
projectId: "fastmcp"
version: "v4.2.0"
eventDate: "2026-11-14"
recordedAt: "2026-11-24"
link: "https://github.com/jlowin/fastmcp/releases/tag/v4.2.0"
source: "GitHub Releases"
tags: ["release", "agent", "mcp", "coding", "open-source"]
draft: false
---

## 具体改动

- 新的 `Skill` 类型和 `SkillCatalogProvider` 可把同一套技能放在服务端，由客户端读取。支持实验性 Skills 扩展的客户端可获取带摘要的清单。
- 此前的 4.1 技能 API 已标记为弃用，旧传输模型称为 `MCPSkill`，旧导入预计在 4.3 移除。
- 最低运行版本升至 Python 3.11，依赖注解可使用 `Annotated` 与 `Depends` 保留工具参数的类型。

## 影响与验证

从单个只读 Skill 测起，分别用普通资源客户端和支持扩展的客户端读取同一份资料。对照展开后的 manifest 与工具 schema，并把旧导入迁移、Python 镜像更新一同纳入验证。
