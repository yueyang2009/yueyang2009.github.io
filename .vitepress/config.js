import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '李岳阳 · 财税顾问',
  description: '注册会计师·律师·高级管理会计师 — 财税合规、经营诊断、数字化改造',
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yueyang2009' },
    ],
    footer: {
      message: '专业不是一切，信任才是第一步。',
      copyright: '© 2026 李岳阳',
    },
  }
})
