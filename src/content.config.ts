/**
 * 内容集合定义
 * skills —— 技能干货文章（src/content/skills/*.md，文件名即路由 slug）
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    /** 分类（与 /skills 页胶囊一致：飞书/设计/财税合规/市场活动/个人理财/产品经理/AI应用） */
    category: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    /** 封面占位渐变风格 */
    ph: z.enum(["warm", "sage", "blue", "rose"]),
    /** 封面图路径（public 下，缺失时显示渐变占位） */
    cover: z.string(),
    /** 列表与轮播的排序 */
    order: z.number(),
    /** 首页精选（4 篇） */
    featured: z.boolean().default(false),
  }),
});

export const collections = { skills };
