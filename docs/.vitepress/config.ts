import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UI Components',
  description: 'ArtyomInc UI Components',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'script',
      { defer: '', src: 'https://umami.arduc.ch/script.js', 'data-website-id': 'c20de7c5-60e1-4d3c-8355-dc387c11b078' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: 'UI Components',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/get-started' },
      { text: 'Components', link: '/components/accordion' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/get-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Input', link: '/components/input' },
          { text: 'NumberField', link: '/components/number-field' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Select', link: '/components/select' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Sonner', link: '/components/sonner' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Table', link: '/components/table' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'TextArea', link: '/components/text-area' },
          { text: 'ThemeButton', link: '/components/theme-button' },
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Tooltip', link: '/components/tooltip' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ArtyomInc/' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} ArtyomInc`
    }
  },
  vite: {
    clearScreen: false,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url))
      }
    }
  }
})
