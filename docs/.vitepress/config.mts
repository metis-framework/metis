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
      { text: 'Implementação', link: '/implementacao/' },
      { text: 'Componentes', items: [
        { text: 'Adaptive Flow System (AFS)', link: '/componentes/afs/' },
        { text: 'Priority Response Protocol (PRP)', link: '/componentes/prp/' }
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
      '/implementacao/': [
        {
          text: 'Implementação',
          items: [
            { text: 'Visão Geral', link: '/implementacao/' }
          ]
        }
      ],

      '/componentes/afs/': [
        {
          text: 'AFS',
          items: [
            { text: 'Visão Geral', link: '/componentes/afs/' },
            { text: 'Estrutura', link: '/componentes/afs/estrutura/' },
            { text: 'Fluxo', link: '/componentes/afs/fluxo/' },
            { text: 'Papéis', link: '/componentes/afs/papeis/' },
            { text: 'Métricas', link: '/componentes/afs/metricas/' },
            { text: 'Ciclos', link: '/componentes/afs/ciclos/' }
          ]
        }
      ],

      '/componentes/prp/': [
        {
          text: 'PRP',
          items: [
            { text: 'Visão Geral', link: '/componentes/prp/' },
            { text: 'Entrada', link: '/componentes/prp/entrada/' },
            { text: 'Níveis', link: '/componentes/prp/niveis/' },
            { text: 'Fluxo', link: '/componentes/prp/fluxo/' },
            { text: 'Capacidade', link: '/componentes/prp/capacidade/' },
            { text: 'Escopo', link: '/componentes/prp/escopo/' },
            { text: 'Bloqueios', link: '/componentes/prp/bloqueios/' },
            { text: 'Métricas', link: '/componentes/prp/metricas/' }
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
