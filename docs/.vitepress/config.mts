import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Diary",
  description: "My Diaries",
  base: '/diary/',
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Diary',
        items: [
          { text: 'Diary Entries', link: '/diary/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})