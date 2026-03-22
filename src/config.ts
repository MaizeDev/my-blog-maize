export const SITE = {
  website: "https://6782733.xyz", // 您部署的网站 URL
  author: "星辰大海", // 您的姓名
  profile: "", // 您的个人/作品集网站URL，用于更好地进行搜索引擎优化。如果没有，请输入空字符串""。
  desc: "记录技术与思考，分享开发实践、AI探索与互联网折腾日常。", // 您的网站描述。有助于搜索引擎优化和社交媒体分享。
  title: "星辰大海", // 您的网站名称
  ogImage: "astropaper-og.jpg", // 网站的默认 OG 图片。可用于社交媒体分享。OG 图片可以是外部图片 URL，也可以放在 /public 目录下。
  lightAndDarkMode: true, // 启用或禁用网站的明暗模式。如果禁用，将使用主色调方案。该选项默认为启用。
  postPerIndex: 4, // 在主页 "最近 "部分显示的帖子数量。
  postPerPage: 4, // 您可以指定每个帖子页面显示的帖子数量。(例如：如果将 SITE.postPerPage 设置为 3，则每页只显示 3 个帖子）
  scheduledPostMargin: 15 * 60 * 1000, // 在生产模式下，发布时间在未来的帖子将不可见。但是，如果帖子的发布时间在未来 15 分钟内，则会显示。如果不喜欢默认的 15 分钟边距，可以设置 scheduledPostMargin。
  showArchives: true, // 决定是否在网站上显示 "档案 "菜单（位于 "关于 "和 "搜索 "菜单之间）及其相应页面。该选项默认设置为 "true"。
  showBackButton: true, // 决定是否在每篇博文中显示返回按钮。
  editPost: { // 此选项允许用户通过在博文标题下提供编辑链接，对博文提出修改建议。将 SITE.editPost.enabled 设为 false，即可禁用此功能。
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true, // 如果博文前言中没有指定 ogImage，该选项将控制是否生成动态 og-image。如果你有很多博文，你可能想禁用这一功能。更多详情，请参阅权衡。
  dir: "ltr", // "rtl" | "auto"  指定整个博客的文本方向。用作 <html dir="ltr"> 中的 HTML 方向属性。支持值：ltr | rtl | auto
  lang: "zh-CN", // 在 <html lang "en">中用作 HTML ISO 语言代码。默认为 en。
  timezone: "Asia/Shanghai", // 该选项允许您使用 IANA 格式指定时区。设置该选项可确保本地主机和部署网站的时间戳一致，消除时差。 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
