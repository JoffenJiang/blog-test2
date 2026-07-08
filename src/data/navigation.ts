export interface NavItem {
  label: string;
  href: string;
}

/** 顶部导航 */
export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "职业发展", href: "/career" },
  { label: "技能笔记", href: "/skills" },
  { label: "资源库", href: "/resources" },
  { label: "生活杂记", href: "/life" },
];

/** 首页编号导航（锚点跳转到对应 section） */
export interface SectionNavItem {
  num: string;
  label: string;
  anchor: string;
}

export const sectionNav: SectionNavItem[] = [
  { num: "01", label: "个人简介", anchor: "#about" },
  { num: "02", label: "职业发展", anchor: "#career" },
  { num: "03", label: "技能干货", anchor: "#skills" },
  { num: "04", label: "资源库", anchor: "#resources" },
  { num: "05", label: "生活杂记", anchor: "#life" },
  { num: "06", label: "最新更新", anchor: "#latest" },
];

/** 页脚栏目 */
export const footerNav: NavItem[] = [
  { label: "职业发展", href: "/career" },
  { label: "技能干货", href: "/skills" },
  { label: "资源库", href: "/resources" },
  { label: "生活杂记", href: "/life" },
];
