import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/mac-sticker-sheet/',
  title: "Mac PoTi.MD",
  description: "Mac Shortcut and Command Cheat Sheet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],

    sidebar: [
      {
        items: [
          { text: 'MAC PoTi', link: '/mac-poti' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Guide', link: '/guide' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/studiomic/mac-sticker-sheet' }
    ]
  }
})
