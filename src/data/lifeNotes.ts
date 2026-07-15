/**
 * /notes 生活记录数据
 * 五个系列（与首页趣味杂货铺一致）：
 *   title  线上方主题文字（20px）
 *   desc   线下方描述文字（15px）
 *   caption 右侧大图上方的详情文字（20px）
 * 每组 4-6 张占位图（ar 比例 / cap 图下描述，真实素材放 public/media/notes/ 后替换 src）
 */

export interface LifeItem {
  /** public 下的图片路径（缺失时显示渐变占位） */
  src: string;
  ph: "warm" | "sage" | "blue" | "rose";
  /** 宽高比（如 "4 / 3"） */
  ar: string;
  /** 右侧大图上方的详情文字（随图切换） */
  note: string;
  /** 图集页图下描述（可选） */
  cap?: string;
}

export interface LifeTheme {
  key: string;
  title: string;
  desc: string;
  caption: string;
  items: LifeItem[];
}

const item = (
  key: string,
  n: number,
  ph: LifeItem["ph"],
  ar: string,
  note: string,
  cap?: string
): LifeItem => ({
  src: `/media/notes/${key}-${String(n).padStart(2, "0")}.jpg`,
  ph,
  ar,
  note,
  cap,
});

export const lifeThemes: LifeTheme[] = [
  {
    key: "daily",
    title: "日常杂记",
    desc: "生活的碎片，攒起来就是日子。",
    caption: "今天也是认真生活的一天。",
    items: [
      item("daily", 1, "warm", "4 / 3", "楼下的猫今天肯赏脸了。", "楼下的猫，见过三次了。"),
      item("daily", 2, "sage", "3 / 4", "下班路上的天色，值得停三秒。"),
      item("daily", 3, "blue", "16 / 10", "周末的早餐，做慢一点也没关系。", "周末的早餐，做慢一点。"),
      item("daily", 4, "rose", "1 / 1", "桌面收拾干净的第一天。"),
      item("daily", 5, "warm", "4 / 3", "今天也是认真生活的一天。"),
    ],
  },
  {
    key: "workootd",
    title: "职业ootd",
    desc: "认真穿衣，认真上班。",
    caption: "职场也可以有自己的风格。",
    items: [
      item("workootd", 1, "blue", "3 / 4", "开会日的安全牌穿搭。", "开会日的安全牌。"),
      item("workootd", 2, "warm", "3 / 4", "衬衫第三种穿法实验中。"),
      item("workootd", 3, "sage", "4 / 5", "换季第一天，风衣登场。"),
      item("workootd", 4, "rose", "3 / 4", "通勤十分钟，穿搭五分钟。", "通勤十分钟，穿搭五分钟。"),
    ],
  },
  {
    key: "hanfu",
    title: "汉服ootd",
    desc: "衣冠之美，也是一种表达。",
    caption: "穿上它，走路都慢半拍。",
    items: [
      item("hanfu", 1, "rose", "3 / 4", "第一套自己搭的宋制。", "第一套自己搭的宋制。"),
      item("hanfu", 2, "warm", "3 / 4", "袖子比想象中能装东西。"),
      item("hanfu", 3, "sage", "1 / 1", "配饰是朋友帮忙挑的。"),
      item("hanfu", 4, "blue", "4 / 5", "拍照那天风很配合。", "拍照那天风很配合。"),
      item("hanfu", 5, "rose", "16 / 10", "路人问了三次链接。"),
      item("hanfu", 6, "warm", "3 / 4", "穿上它，走路都慢半拍。"),
    ],
  },
  {
    key: "travel",
    title: "环游记",
    desc: "去看看别处的日常。",
    caption: "世界很大，慢慢走。",
    items: [
      item("travel", 1, "sage", "16 / 10", "山里的雾十分钟换一次形状。", "山里的雾，十分钟换一次形状。"),
      item("travel", 2, "blue", "4 / 3", "陌生城市的清晨最好逛。"),
      item("travel", 3, "warm", "3 / 4", "小巷尽头有家旧书店。"),
      item("travel", 4, "rose", "16 / 10", "路边摊比景点好吃。", "路边摊比景点好吃。"),
      item("travel", 5, "sage", "1 / 1", "世界很大，慢慢走。"),
    ],
  },
  {
    key: "dream",
    title: "梦到什么发什么系列",
    desc: "梦里的事，醒来也想记下来。",
    caption: "昨晚的梦，今天的帖。",
    items: [
      item("dream", 1, "blue", "1 / 1", "梦见考试，卷子是空白的。", "梦见考试，卷子是空白的。"),
      item("dream", 2, "rose", "4 / 3", "梦里的电梯永远不到顶层。"),
      item("dream", 3, "warm", "3 / 4", "梦里的城市，路牌都是乱码。", "梦里的城市，路牌都是乱码。"),
      item("dream", 4, "sage", "4 / 3", "醒来只记得一种颜色。"),
    ],
  },
];
