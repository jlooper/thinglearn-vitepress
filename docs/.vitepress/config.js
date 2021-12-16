const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
  title: 'ThingLearn',
  description: 'It\'s a Curriculum. It\'s a Community. It\'s also a lot of fun! Let\'s learn about the Internet of Things together!',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
  ],
  base: base,
  themeConfig: {
    repo: 'jlooper/thinglearn-vitepess',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',

    algolia: {
      appId: 'X51HWTCQJJ',
      apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      indexName: 'vitepress-demo'
    },

    // nav
    nav,

    // sidebar
    sidebar,

    // page meta
    editLinks: true,
    lastUpdated: 'Last updated',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

  }
}