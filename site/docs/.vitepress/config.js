export default {
  title: "Puppy-ui",
  description: "一个Vue3组件库",
  themeConfig: {
    setTitle: "Puppy",
    logo: "/logo.jpeg",
    socialLinks: [
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "..." }, // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    nav: [
      { text: "博客", link: "/articles/组件库源码实现" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            {
              text: "gulp的使用",
              link: "/articles/gulp的使用",
            },
          ],
        },
        {
          collapsible: true,
          collapsed: false,
          text: "Vue教程",
          items: [
            {
              text: "Vue基础",
              link: "/articles/Vue基础",
            },
            {
              text: "pinia和vuex",
              link: "pinia和vuex",
            },
          ],
        },
      ],
    },
  },
};
