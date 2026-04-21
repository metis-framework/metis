import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: "METIS Framework",
  description: "Framework de gestão adaptativa",
  head: [
      ['link', { rel: 'icon', href: '/metis-icon.svg' }]
    ],
  themeConfig: {
    logo: '/metis-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Metis', link: '/metis/' },
      { text: 'Metodologias', items: [
        { text: 'Adaptive Flow System (AFS)', link: '/afs/' },
        { text: 'Priority Response Protocol (PRP)', link: '/prp/' }
      ]}
    ],
    sidebar: {
      '/metis/': [
        {
          text: 'METIS',
          items: [
            { text: 'Visão Geral', link: '/metis/' },
            { text: 'Princípios', link: '/metis/principios' },
            { text: 'Estrutura', link: '/metis/estrutura' }
          ]
        }
      ],

      '/metodologias/afs/': [
        {
          text: 'AFS',
          items: [
            { text: 'Visão Geral', link: '/metodologias/afs/' },
            { text: 'Fluxo', link: '/metodologias/afs/fluxo' },
            { text: 'Papéis', link: '/metodologias/afs/papeis' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/metis-framework' }
    ]
  }
}