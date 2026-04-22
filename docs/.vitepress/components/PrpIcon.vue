<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    class="shape-icon symbol-icon prp-icon"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="prp-tri-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7f8fa1" />
        <stop offset="100%" stop-color="var(--vp-c-brand-1)" />
      </linearGradient>

      <linearGradient id="prp-tri-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#91a4b8" />
        <stop offset="100%" stop-color="var(--vp-c-brand-2)" />
      </linearGradient>

      <linearGradient id="prp-tri-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--vp-c-brand-2)" />
        <stop offset="100%" stop-color="#2c3136" />
      </linearGradient>

      <linearGradient id="prp-tri-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#24303b" />
        <stop offset="100%" stop-color="#161b20" />
      </linearGradient>

      <filter id="prp-shadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="2" dy="5" stdDeviation="3" flood-color="#000000" flood-opacity="0.24" />
      </filter>
    </defs>

    <g filter="url(#prp-shadow)">
      <!-- contorno/base -->
      <polygon
        points="50,10 88,78 12,78"
        fill="url(#prp-tri-main)"
        stroke="var(--vp-c-brand-1)"
        stroke-width="2.5"
        stroke-linejoin="round"
      />

      <!-- face esquerda -->
      <polygon
        points="50,16 50,58 20,74"
        fill="url(#prp-tri-left)"
      />

      <!-- face direita -->
      <polygon
        points="50,16 80,74 50,58"
        fill="url(#prp-tri-right)"
      />

      <!-- base inferior -->
      <polygon
        points="20,74 50,58 80,74"
        fill="url(#prp-tri-bottom)"
      />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 72 }
})
</script>

<style scoped>
.shape-icon {
  display: inline-block;
}
</style>