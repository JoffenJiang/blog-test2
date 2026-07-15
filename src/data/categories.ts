/** /skills 技能干货分类（胶囊过滤栏顺序） */
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
