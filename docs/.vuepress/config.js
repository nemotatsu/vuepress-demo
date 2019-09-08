module.exports = {
  base: '/', // base URL
  locales: {
    '/': {
      lang: 'ja', // 言語設定
      title: 'vuepress-demo', // タイトルの設定
      description: 'vuepress-demoです',  // meta descriptionの設定
    }
  },
  head: [
    ['meta', { // meta keywordsの設定
      name: "keywords", content: "vuepress, netlify"
    }]
  ],
  themeConfig: {
    nav: [ // NavBarの設定
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [ // SideBarの設定
      {
        title: 'Home',
        path: '/'
      },
    ]
  }
}