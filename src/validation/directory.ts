import { z } from "zod";

const optionalHttpUrl = z.union([z.string().url().refine(v => /^https?:\/\//.test(v), "请填写 http 或 https 链接"), z.literal("")]).optional();
const dateOnly = z.preprocess(value => value instanceof Date ? value.toISOString().slice(0, 10) : value,
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "日期格式应为 YYYY-MM-DD")
    .refine(value => !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value, "日期无效"));

export const directorySchema = (imageSchema: z.ZodTypeAny) =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.enum(["model", "tool", "project", "news"]),
    tags: z.array(z.string()).default([]),
    icon: z.string().optional(),
    image: z.preprocess(value => value === "" || value === null ? undefined : value, imageSchema.optional()),
    link: z.preprocess(value => value === null ? undefined : value, optionalHttpUrl),
    source: z.string().optional(),
    recordedAt: dateOnly,
    eventDate: z.preprocess(value => value === "" || value === null ? undefined : value, dateOnly.optional()),
    pricing: z.string().optional(),
    note: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  });
