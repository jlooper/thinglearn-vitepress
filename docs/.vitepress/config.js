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
    repo: 'jlooper/thinglearn-vitepress',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',
    search: false,

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