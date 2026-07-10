/**
 * /skills 技能干货页数据（独立于首页的 posts.ts）
 * 分类：飞书 / 设计 / 财税合规 / 市场活动 / 个人理财 / 产品经理 / AI应用
 * 8 个主题占位，正文后续补充；featured 的进入首屏轮播
 */

export const skillCategories = [
  "全部",
  "飞书",
  "设计",
  "财税合规",
  "市场活动",
  "个人理财",
  "产品经理",
  "AI应用",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export interface SkillPost {
  slug: string;
  title: string;
  category: Exclude<SkillCategory, "全部">;
  /** 轮播 kicker（大写英文小标签） */
  kicker: string;
  /** 轮播 / 卡片简介 */
  excerpt: string;
  readTime: string;
  ph: "warm" | "sage" | "blue" | "rose";
  cover: string;
  featured?: boolean;
}

export const skillPosts: SkillPost[] = [
  {
    slug: "feishu-base",
    title: "多维表格不只是表格，而是一个轻量业务系统",
    category: "飞书",
    kicker: "FEISHU SYSTEM",
    excerpt: "从权限、审批到自动化：把散落在微信里的业务流程，一步步搬进可以被看见的系统。",
    readTime: "8 分钟阅读",
    ph: "blue",
    cover: "/media/skill-feishu-base.jpg",
    featured: true,
  },
  {
    slug: "feishu-sop",
    title: "SOP 怎么写：把经验变成别人也能执行的流程",
    category: "飞书",
    kicker: "SOP PLAYBOOK",
    excerpt: "拆节点、定责任人、留模板：一套让团队少踩坑的 SOP 撰写方法。",
    readTime: "7 分钟阅读",
    ph: "sage",
    cover: "/media/skill-feishu-sop.jpg",
  },
  {
    slug: "design-manage",
    title: "设计管理：把需求、交付和评分放进同一个系统",
    category: "设计",
    kicker: "DESIGN OPS",
    excerpt: "两名设计师、全公司的需求：一套提交、验收、评分机制如何化解沟通矛盾。",
    readTime: "6 分钟阅读",
    ph: "rose",
    cover: "/media/skill-design.jpg",
  },
  {
    slug: "tax-compliance",
    title: "跨境收付款入门：PayPal、Stripe、Wise 怎么选",
    category: "财税合规",
    kicker: "GO GLOBAL",
    excerpt: "从工具测试到合规边界：跨境业务收付款链路的实操笔记。",
    readTime: "9 分钟阅读",
    ph: "warm",
    cover: "/media/skill-tax.jpg",
  },
  {
    slug: "marketing-events",
    title: "市场活动不是热闹，而是服务业务目标",
    category: "市场活动",
    kicker: "EVENT MAKING",
    excerpt: "立主题、写方案、控现场、做复盘：一场活动从策划到落地的完整流程。",
    readTime: "7 分钟阅读",
    ph: "rose",
    cover: "/media/skill-marketing.jpg",
    featured: true,
  },
  {
    slug: "personal-finance",
    title: "工资之外，我怎么打理自己的钱",
    category: "个人理财",
    kicker: "MONEY NOTES",
    excerpt: "记账、储蓄、保险和投资：普通打工人也能上手的理财框架。",
    readTime: "6 分钟阅读",
    ph: "sage",
    cover: "/media/skill-finance.jpg",
  },
  {
    slug: "pm-b2b",
    title: "B 端产品需求从提出到上线，要经历什么",
    category: "产品经理",
    kicker: "PRODUCT DIARY",
    excerpt: "需求文档、原型、评审、排期、测试、交付：一个需求的完整一生。",
    readTime: "9 分钟阅读",
    ph: "blue",
    cover: "/media/skill-pm.jpg",
    featured: true,
  },
  {
    slug: "ai-prompt",
    title: "提示词工程：把需求讲清楚的艺术",
    category: "AI应用",
    kicker: "AI IN WORK",
    excerpt: "AI 用得好不好，取决于你能不能把一件事拆解清楚、表达明白。",
    readTime: "5 分钟阅读",
    ph: "warm",
    cover: "/media/skill-ai.jpg",
    featured: true,
  },
];

export const featuredSkillPosts = skillPosts.filter((p) => p.featured);
