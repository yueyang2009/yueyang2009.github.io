import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '河南龙头会计服务有限公司',
  description: '财税合规、经营诊断、股权设计、数字化改造 — 做中小民企最可信赖的财税参谋',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '案例', link: '/cases' },
      { text: '关于', link: '/about' },
      { text: '联系', link: '/contact' },
    ],
    footer: {
      message: '先看局再看账，让财税为经营服务。',
      copyright: '© 2026 河南龙头会计服务有限公司',
    },
  }
})
