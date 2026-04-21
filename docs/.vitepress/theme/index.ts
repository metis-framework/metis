// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MetisIcon from '../components/MetisIcon.vue'
import AfsIcon from '../components/AfsIcon.vue'
import PrpIcon from '../components/PrpIcon.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('MetisIcon', MetisIcon)
    app.component('AfsIcon', AfsIcon)
    app.component('PrpIcon', PrpIcon)
  }
} satisfies Theme
