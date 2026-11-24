---
title: "Vercel Labs agent-desktop v1.3.0 增加 macOS 虚拟机沙盒"
description: "桌面交互工具增加沙盒命令和 macOS 虚拟机实现。"
category: project
recordedAt: "2026-11-23"
eventDate: "2026-11-13"
tags: ["2026-11-月度","GitHub","open-source","agent","macOS"]
link: "https://github.com/vercel-labs/agent-desktop/releases/tag/v1.3.0"
source: "GitHub Releases · Vercel Labs"
featured: false
draft: false
topics: ["coding", "governance", "products"]
---

对于需要重复验证桌面工作流的人，隔离环境有利于控制测试状态。发布记录同时列有 macOS 菜单和会话状态修复。

## 沙盒与会话路径

版本记录包括 macOS 虚拟机沙盒、菜单状态修复，以及通过 libproc 读取应用进程清单以减少启动外部进程的开销。虚拟机能给测试动作提供独立桌面状态，宿主系统的共享目录、网络和连接端口依然属于部署边界。

## 最小验证场景

使用空白测试账户启动一次虚拟机，打开与关闭一个非敏感测试应用，执行截图、菜单和退出流程，再从干净实例重复。检查本次会话引用是否可在退出后失效，以及两次运行的应用状态是否互相影响。将 VM 启动时间与 UI 操作时间分别记录。
