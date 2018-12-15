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
        text: "JAVA",
        items: [
          { text: "基础", link: "/java/index.html" },
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
