export interface NavItem {
  label: string;
  href: string;
}

/** 顶部导航（Wildbran 改版：首页 / 职业发展 / 技能干货 / 资源库 / 生活记录 / 联系我） */
export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "职业发展", href: "/career" },
  { label: "技能干货", href: "/skills" },
  { label: "资源库", href: "/resources" },
  { label: "生活记录", href: "/notes" },
  { label: "联系我", href: "/contact" },
];

/** 页脚栏目 */
export const footerNav: NavItem[] = [
  { label: "职业发展", href: "/career" },
  { label: "技能干货", href: "/skills" },
  { label: "资源库", href: "/resources" },
  { label: "生活记录", href: "/notes" },
  { label: "更多视频", href: "/videos" },
  { label: "联系我", href: "/contact" },
];

/** 资源库四个分类入口 */
export const resourceNav: (NavItem & { desc: string })[] = [
  { label: "模板", href: "/resources/templates", desc: "拿来即用的文档与页面模板" },
  { label: "清单", href: "/resources/checklists", desc: "帮你不遗漏关键步骤的检查清单" },
  { label: "工具", href: "/resources/tools", desc: "亲测好用的效率工具推荐" },
  { label: "学习资料", href: "/resources/learning", desc: "系统学习某个技能的资料合集" },
];
