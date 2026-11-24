import type { CollectionEntry } from "astro:content";

export type DirectoryEntry = CollectionEntry<"directory">;
export type DirectoryData = DirectoryEntry["data"];
type Topic = DirectoryData["topics"][number];

export const categories = {
  model: "模型", tool: "工具", project: "开源项目",
  news: "技术动态", thought: "想法 / 灵感", note: "实践笔记",
} satisfies Record<DirectoryData["category"], string>;

export const topicLabels: Record<Topic, string> = {
  models: "模型架构与发布", coding: "AI 编程、Agent 与 MCP", deployment: "推理与部署",
  rag: "RAG 与数据工程", training: "训练与微调",
  multimodal: "多模态与机器人", research: "研究与评测", governance: "安全与可靠性",
  industry: "硬件与算力", products: "开发工具与应用",
};

export const availabilityLabels = {
  released: "已发布", preview: "预览", announced: "已宣布",
  restricted: "受限开放", tracked: "持续跟踪", retired: "已停用",
} satisfies Record<NonNullable<DirectoryData["availability"]>, string>;

export const opennessLabels = {
  source: "代码开源", weights: "开放权重", hosted: "托管使用",
} satisfies Record<NonNullable<DirectoryData["openness"]>, string>;

const topicTags: Record<Topic, string[]> = {
  models: ["模型"],
  coding: ["coding", "agent", "mcp", "workflow", "agent 工具链", "开发者生态"],
  deployment: ["部署", "本地部署", "local", "推理", "inference", "serving", "gateway", "量化"],
  rag: ["rag", "vector-search", "向量检索", "文档解析", "知识库", "数据基础设施"],
  training: ["training", "fine-tuning", "微调", "训练"],
  multimodal: ["多模态", "multimodal", "世界模型", "图像生成", "视频生成", "机器人", "具身智能"],
  research: ["research", "科研", "数学", "物理", "评测"],
  governance: ["安全", "可靠性", "可观测性", "权限"],
  industry: ["gpu", "算力", "硬件"],
  products: ["浏览器", "macos", "应用", "开发工具"],
};

export function topicsFor(data: DirectoryData): Topic[] {
  if (data.topics?.length) return data.topics;
  const labels = new Set(data.tags.map(tag => tag.toLocaleLowerCase()));
  const topics = (Object.keys(topicTags) as Topic[]).filter(topic => topicTags[topic].some(tag => labels.has(tag)));
  const defaultTopic = { model: "models", project: "deployment", tool: "products" } as const;
  if (data.category in defaultTopic) {
    const topic = defaultTopic[data.category as keyof typeof defaultTopic];
    if (!topics.includes(topic) && (data.category !== "project" || topics.length === 0)) topics.unshift(topic);
  }
  return topics;
}

export function isEdition(entry: DirectoryEntry) {
  return entry.data.tags.includes("月度导读");
}

export function byEventDate(a: DirectoryEntry, b: DirectoryEntry) {
  return (b.data.eventDate ?? "").localeCompare(a.data.eventDate ?? "")
    || a.data.title.localeCompare(b.data.title, "zh-CN");
}

export function getEvents(entries: DirectoryEntry[]) {
  return entries.filter(entry => entry.data.eventDate && !isEdition(entry)).sort(byEventDate);
}

export function groupEvents(entries: DirectoryEntry[]) {
  const groups = new Map<string, DirectoryEntry[]>();
  for (const entry of entries) {
    const date = entry.data.eventDate;
    if (!date) continue;
    const group = groups.get(date);
    if (group) group.push(entry);
    else groups.set(date, [entry]);
  }
  return groups;
}

export function entryPath(entry: DirectoryEntry) {
  return "entry/" + entry.id + "/";
}

export function relatedEntries(entry: DirectoryEntry, entries: DirectoryEntry[]) {
  const byId = new Map(entries.map(item => [item.id, item]));
  const byPath = new Map(entries.map(item => [item.filePath, item]));
  const resolve = (value: string) => byId.get(value) ?? byPath.get(value.replace(/^\//, ""));
  const selected = (entry.data.related ?? []).map(resolve);
  const linkedBack = entries.filter(item => item.data.related?.some(value => resolve(value)?.id === entry.id)).sort(byEventDate);
  return [...new Set([...selected, ...linkedBack])]
    .filter((item): item is DirectoryEntry => Boolean(item && item.id !== entry.id))
    .slice(0, 6);
}
