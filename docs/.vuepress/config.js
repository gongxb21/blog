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
        text: "TypeScript",
        items: [
          { text: "基础", link: "/typescript/types.html" },
          { text: "类", link: "/typescript/class.html" },
          { text: "泛型", link: "/typescript/generics.html" },
          { text: "装饰器", link: "/typescript/decorator.html" },
          { text: "常见问题", link: "/typescript/other.html" },
        ],
      },{
        text: "JAVA",
        items: [
          { text: "基础", link: "/java/helloworld.html" },
          { text: "类", link: "/typescript/class.html" },
          { text: "泛型", link: "/typescript/generics.html" },
          { text: "装饰器", link: "/typescript/decorator.html" },
          { text: "常见问题", link: "/typescript/other.html" },
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
