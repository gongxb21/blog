const { name } = require("../../package.json");

module.exports = {
  base: `/${name}/`,
  title: "GXB",
  description: "My Blog.",
  themeConfig: {
    sidebar: "auto",
    nav: [
      // ...
      { text: "首页", link: "/" },
      {
        text: "我的博客",
        items: [
          { text: "Java", link: "/java/index.html" },
          { text: "数据库", link: "/database/index.html" },
          { text: "Docker", link: "/docker/index.html" },
          { text: "其他", link: "/other/index.html" },
        ],
      },
    ],
    lastUpdated: true,
    repo: "https://github.com/gongxb21/blog",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "编辑此页面！",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    "@vuepress/back-to-top",
  ],
};
