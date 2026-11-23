# AI Atlas · 个人 AI 信息库

基于 [Minted Directory Astro](https://github.com/masterkram/minted-directory-astro) 改造，使用 Astro、Tailwind CSS 和 [Pages CMS](https://pagescms.org/)。

分类收录 AI 模型、工具、GitHub 项目和资讯；支持全文关键词搜索（名称、简介、标签、评价、正文）、分类与标签筛选、排序、推荐、草稿和详情笔记。搜索在浏览器内完成，无需数据库或 API Key。

## 网站与后台

- 网站：https://wdsdsasdzx.github.io/ai-atlas/
- 内容后台：https://app.pagescms.org/
- 部署状态：https://github.com/WDSDSASDZX/ai-atlas/actions
- Pages 设置：https://github.com/WDSDSASDZX/ai-atlas/settings/pages

**首次设置**：进入仓库 Settings → Pages，将 Build and deployment → Source 改为 **GitHub Actions**。然后在 Actions 中运行 “Build and deploy AI Atlas”，或重新运行失败的部署作业。后续推送到 main 会自动构建并部署。

## 在网页上填写信息

1. 打开 Pages CMS，用 GitHub 登录。
2. 第一次使用需要安装 Pages CMS GitHub App，**只选择 ai-atlas 仓库**即可。
3. 选中本仓库的 main 分支，点击 **AI 信息 → 新增**。
4. 填好必填项：名称、简介、分类、收录日期。其余字段可按需要添加。
5. 新记录默认是草稿。准备发布时关闭“草稿”并保存。
6. 等 Actions 构建与部署完成后刷新网站。

CMS 直接写入仓库，网站内容不会只保存在浏览器本地。Pages CMS 授权需要仓库所有者本人完成。

**仓库公开，草稿仅从生成的网站隐藏，原文和历史仍可在 GitHub 查看。不要保存密钥和私人信息。** CMS 登录也不会让网站具有私密访问控制。

## 字段

| 字段 | 用途 |
| --- | --- |
| title / description | 名称与一句话简介，必填 |
| category | model / tool / project / news，必填 |
| recordedAt | 收录日期 YYYY-MM-DD，必填 |
| eventDate | 真实事件或发布日期，可选 |
| link / source | 官网、仓库或原文链接与来源名称 |
| tags | 任意标签数组，如 agent、coding、本地部署 |
| pricing | 自己核实后的费用说明 |
| note | 首页也会显示的简短评价 |
| image | 可选封面图 |
| featured | 推荐优先显示 |
| draft | 从生成网站隐藏 |
| 正文 | Markdown 长文笔记 |

预置条目的 2026-11-23 是收录日期，**不是项目发布日期**。条目仅为起始收藏，不构成最新榜单或自动资讯源。

## 在 GitHub 中直接编辑

复制 `examples/entry-template.md` 到 `src/data/directory/英文文件名.md`。此目录下每个 Markdown 文件就是一条信息。使用独立的 `/entry/文件名/` 详情路由，避免与首页和使用指南冲突。

后台上传的图片位于 `public/media`；`.pages.yml` 已将输出前缀设为 `/ai-atlas/media`。

## 本地开发

要求 Node.js 22、pnpm 10.11.0。

```powershell
git clone https://github.com/WDSDSASDZX/ai-atlas.git
cd ai-atlas
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

本地地址通常为 http://localhost:4321/ai-atlas/ 。执行 `pnpm build` 会进行类型检查、静态构建、站内链接和资源检查，以及草稿排除检查。

## 部署与更新

`.github/workflows/deploy.yml` 负责构建和部署。提交到 main 或在 CMS 保存都会触发；PR 只构建，不部署。如果保存后没有触发构建，请在 Actions 手动运行部署，并检查仓库的 Actions 设置。

GitHub Pages 的站点地址配置在 `astro.config.mjs`，内部链接统一通过 `src/util/paths.ts`。更换仓库名称或自定义域名时，同时检查 `.pages.yml` 的媒体输出路径和 `scripts/check-output.mjs` 的 base。部署失败时保留上一版网站，查看 Actions 日志修复后再发布。

## 开源来源

原模板：Minted Directory Astro，作者 Mark Bruderer，MIT License，原始许可保留在 LICENSE。保留 Astro 内容加载、配置与模板结构，在此基础上调整中文界面、信息字段、卡片、搜索筛选、详情页与部署流程。Pages CMS 独立提供编辑后台，本项目不重写内容管理系统。
