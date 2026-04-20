import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: "METIS Framework",
  description: "Framework de gestão adaptativa",
  head: [
      ['link', { rel: 'icon', href: '/metis.ico' }]
    ],
  themeConfig: {
    logo: '/metis-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Metodologias', items: [
        { text: 'Adaptive Flow System (AFS)', link: '/afs/' },
        { text: 'Priority Response Protocol (PRP)', link: '/prp/' }
      ]}
    ],
    sidebar: {
      '/afs/': [
        {
          text: 'Adaptive Flow System',
          items: [
            { text: 'Introdução', link: '/afs/' },
            { text: 'Fluxo Detalhado', link: '/afs/fluxo' },
            { text: 'Papéis', link: '/afs/papeis' }
          ]
        }
      ],
      '/prp/': [
        {
          text: 'Priority Response Protocol',
          items: [
            { text: 'O que é o PRP?', link: '/prp/' },
            { text: 'Gestão de Crises', link: '/prp/crises' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/metis-framework' }
    ]
  }
}