import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: "METIS Framework",
  description: "Framework de gestão adaptativa",
  cleanUrls: true,
  head: [
      ['link', { rel: 'icon', href: '/metis-icon.svg' }]
    ],
  themeConfig: {
    logo: '/metis-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Metis', link: '/metis/' },
      { text: 'Operação', link: '/operacao/' },
      { text: 'Metodologias', items: [
        { text: 'Adaptive Flow System (AFS)', link: '/metodologias/afs/' },
        { text: 'Priority Response Protocol (PRP)', link: '/metodologias/prp/' }
      ]}
    ],
    sidebar: {
      '/metis/': [
        {
          text: 'METIS',
          items: [
            { text: 'Visão Geral', link: '/metis/' },
            { text: 'Princípios', link: '/metis/principios/' },
            { text: 'Estrutura', link: '/metis/estrutura/' },
            { text: 'Como Aplicar', link: '/metis/como-aplicar/' },
            { text: 'Encerramento', link: '/metis/encerramento/' }
          ]
        }
      ],
      '/operacao/': [
        {
          text: 'Operação',
          items: [
            { text: 'Visão Geral', link: '/operacao/' }
          ]
        }
      ],

      '/metodologias/afs/': [
        {
          text: 'AFS',
          items: [
            { text: 'Visão Geral', link: '/metodologias/afs/' },
            { text: 'Estrutura', link: '/metodologias/afs/estrutura/' },
            { text: 'Fluxo', link: '/metodologias/afs/fluxo/' },
            { text: 'Papéis', link: '/metodologias/afs/papeis/' },
            { text: 'Métricas', link: '/metodologias/afs/metricas/' },
            { text: 'Ciclos', link: '/metodologias/afs/ciclos/' }
          ]
        }
      ],

      '/metodologias/prp/': [
        {
          text: 'PRP',
          items: [
            { text: 'Visão Geral', link: '/metodologias/prp/' },
            { text: 'Entrada', link: '/metodologias/prp/entrada/' },
            { text: 'Níveis', link: '/metodologias/prp/niveis/' },
            { text: 'Fluxo', link: '/metodologias/prp/fluxo/' },
            { text: 'Capacidade', link: '/metodologias/prp/capacidade/' },
            { text: 'Escopo', link: '/metodologias/prp/escopo/' },
            { text: 'Bloqueios', link: '/metodologias/prp/bloqueios/' },
            { text: 'Métricas', link: '/metodologias/prp/metricas/' }
          ]
        }
      ]
    },
    outline: {
      label: 'Nesta página'
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/metis-framework' }
    ]
  }
}
