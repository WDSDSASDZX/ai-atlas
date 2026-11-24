import { z } from "zod";

const optionalHttpUrl = z.union([z.string().url().refine(v => /^https?:\/\//.test(v), "请填写 http 或 https 链接"), z.literal("")]).optional();
const dateOnly = z.preprocess(value => value instanceof Date ? value.toISOString().slice(0, 10) : value,
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "日期格式应为 YYYY-MM-DD")
    .refine(value => !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value, "日期无效"));
const optionalDate = z.preprocess(value => value === "" || value === null ? undefined : value, dateOnly.optional());
export const topicKeys = ["models", "coding", "deployment", "rag", "training", "multimodal", "research", "governance", "industry", "products"] as const;
export const availabilityKeys = ["released", "preview", "announced", "restricted", "tracked", "retired"] as const;
export const opennessKeys = ["source", "weights", "hosted"] as const;

export const directorySchema = (imageSchema: z.ZodTypeAny) =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.enum(["model", "tool", "project", "news", "thought", "note"]),
    tags: z.array(z.string()).default([]),
    icon: z.string().optional(),
    image: z.preprocess(value => value === "" || value === null ? undefined : value, imageSchema.optional()),
    link: z.preprocess(value => value === null ? undefined : value, optionalHttpUrl),
    source: z.string().optional(),
    recordedAt: dateOnly,
    eventDate: optionalDate,
    projectId: z.preprocess(value => value === "" || value === null ? undefined : value,
      z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "请填写关联项目的英文文件名，不含扩展名").optional()),
    version: z.preprocess(value => value === "" || value === null ? undefined : value, z.string().trim().min(1).optional()),
    verifiedAt: optionalDate,
    topics: z.preprocess(value => value ?? [], z.array(z.enum(topicKeys))),
    availability: z.preprocess(value => value === "" || value === null ? undefined : value, z.enum(availabilityKeys).optional()),
    openness: z.preprocess(value => value === "" || value === null ? undefined : value, z.enum(opennessKeys).optional()),
    access: z.string().nullish(),
    takeaway: z.string().nullish(),
    related: z.preprocess(value => value ?? [], z.array(z.string())),
    pricing: z.string().optional(),
    note: z.string().optional(),
    status: z.string().optional(),
    attributes: z.preprocess(v => v ?? [], z.array(z.object({ name: z.string().trim().min(1), value: z.string().default("") })).default([])),
    timeline: z.preprocess(v => v ?? [], z.array(z.object({
      date: dateOnly,
      title: z.string().trim().min(1),
      description: z.string().optional(),
      link: z.preprocess(v => v === null ? undefined : v, optionalHttpUrl),
    })).default([])),
    thoughts: z.preprocess(v => v ?? [], z.array(z.object({
      title: z.string().trim().min(1),
      date: z.preprocess(v => v === "" || v === null ? undefined : v, dateOnly.optional()),
      kind: z.string().optional(),
      content: z.string().optional(),
    })).default([])),
    strengths: z.preprocess(v => v ?? [], z.array(z.string()).default([])),
    limitations: z.preprocess(v => v ?? [], z.array(z.string()).default([])),
    tasks: z.preprocess(v => v ?? [], z.array(z.object({ title: z.string().trim().min(1), done: z.boolean().default(false) })).default([])),
    links: z.preprocess(v => v ?? [], z.array(z.object({ title: z.string().trim().min(1), url: z.string().url().refine(v => /^https?:\/\//.test(v), "请填写 http 或 https 链接"), description: z.string().optional() })).default([])),
    sections: z.preprocess(v => v ?? [], z.array(z.object({ title: z.string().trim().min(1), content: z.string().optional() })).default([])),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }).superRefine((entry, context) => {
    if (entry.draft || (!entry.projectId && !entry.version)) return;
    for (const field of ["projectId", "version", "eventDate", "link"] as const) {
      if (!entry[field]) context.addIssue({ code: "custom", path: [field], message: "版本动态须填写关联项目、版本、事件日期和原文链接" });
    }
  });
