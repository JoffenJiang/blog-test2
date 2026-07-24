export interface Post {
  title: string;
  category: string;
  readTime: string;
  /** 封面占位渐变，后续替换为真实图片路径 */
  ph: "warm" | "sage" | "blue" | "rose";
  /** 封面图路径（public 下），素材就位后生效，缺失时显示渐变占位 */
  cover: string;
  featured?: boolean;
}

/** 技能干货文章（featured 的 4 篇展示在首页） */
export const posts: Post[] = [
  {
    title: "我从 0 学 Figma：先掌握这几个功能就够用",
    category: "技能干货",
    readTime: "6 分钟",
    ph: "blue",
    cover: "/media/post-figma.jpg",
    featured: true,
  },
  {
    title: "商业计划书就是把生意讲清楚",
    category: "技能干货",
    readTime: "8 分钟",
    ph: "warm",
    cover: "/media/post-bp.jpg",
    featured: true,
  },
  {
    title: "市场活动应以价值为锚，真正服务业务目标",
    category: "职业发展",
    readTime: "7 分钟",
    ph: "rose",
    cover: "/media/post-marketing.jpg",
    featured: true,
  },
  {
    title: "B 端产品需求从提出到上线，要经历什么",
    category: "技能干货",
    readTime: "9 分钟",
    ph: "sage",
    cover: "/media/post-b2b.jpg",
    featured: true,
  },
  {
    title: "写好提示词的核心：把需求讲清楚，新手从零上手指南",
    category: "技能干货",
    readTime: "10 分钟",
    ph: "blue",
    cover: "/media/post-prompt.jpg",
  },
  {
    title: "公司为什么也要懂一点财税合规？",
    category: "技能干货",
    readTime: "8 分钟",
    ph: "warm",
    cover: "/media/post-tax.jpg",
  },
  {
    title: "多维表格不只是表格，而是一个轻量业务系统",
    category: "技能干货",
    readTime: "8 分钟",
    ph: "sage",
    cover: "/media/post-base.jpg",
  },
  {
    title: "SOP 怎么写：把经验变成别人也能执行的流程",
    category: "技能干货",
    readTime: "7 分钟",
    ph: "rose",
    cover: "/media/post-sop.jpg",
  },
];
