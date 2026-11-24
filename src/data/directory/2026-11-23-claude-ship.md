---
title: "Anthropic 推出 Claude Ship 测试版"
description: "Claude Ship 将 GitHub 拉取请求的代码审查、反馈处理和按团队规则审批放进同一流程。"
category: tool
recordedAt: "2026-11-24"
eventDate: "2026-11-23"
verifiedAt: "2026-11-24"
topics: ["coding", "governance"]
tags: ["Anthropic", "Claude Code", "GitHub", "coding", "agent"]
link: "https://claude.com/resources/articles/introducing-claude-ship"
source: "Anthropic 官方公告"
availability: "preview"
openness: "hosted"
access: "面向 Claude Team 和 Enterprise 的 GitHub 仓库"
related: ["src/data/directory/2026-10-28-github-universe-copilot.md"]
---

已有的 Code Review 负责审查代码。进入测试阶段的 PR Steward 处理审查反馈和失败的检查，Claude Approvals 按团队定义的规则决定是否批准。团队可以要求特定类型的变更由人工审批。

## 审查流程的三层输出

Code Review 生成审查反馈，PR Steward 跟进评论与失败检查，Approvals 根据团队规则判断是否批准。验证时分别查看机器生成的评论、提交及批准状态。CI 结果、仓库分支保护和人工签核仍由实际项目配置决定。

## 用三个 PR 做回归

准备只改文档、修改业务逻辑、触发人工门槛的三个分支，给业务 PR 安排可重复的测试失败。记录工具发现的错误、CI 重试与最终审批。对有误判风险的修改，检查团队规则能否将决定留给正确的审阅者，以及新增提交是否需要重新确认。
