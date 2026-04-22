<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    class="shape-icon symbol-icon metis-icon"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="metis-hex-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--vp-c-brand-3)" />
        <stop offset="100%" stop-color="var(--vp-c-brand-1)" />
      </linearGradient>

      <linearGradient id="metis-hex-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8ba0b5" />
        <stop offset="100%" stop-color="var(--vp-c-brand-2)" />
      </linearGradient>

      <linearGradient id="metis-hex-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6b8299" />
        <stop offset="100%" stop-color="var(--vp-c-brand-1)" />
      </linearGradient>

      <linearGradient id="metis-hex-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="var(--vp-c-brand-2)" />
        <stop offset="100%" stop-color="#2c3136" />
      </linearGradient>

      <filter id="metis-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.22" />
      </filter>
    </defs>

    <g filter="url(#metis-shadow)">
      <!-- base externa -->
      <polygon
        points="50,6 86,28 86,72 50,94 14,72 14,28"
        fill="url(#metis-hex-main)"
        stroke="var(--vp-c-brand-1)"
        stroke-width="2.5"
      />

      <!-- face topo -->
      <polygon
        points="50,12 77,28 50,44 23,28"
        fill="url(#metis-hex-top)"
      />

      <!-- face esquerda -->
      <polygon
        points="23,28 50,44 50,78 23,62"
        fill="url(#metis-hex-left)"
      />

      <!-- face direita -->
      <polygon
        points="77,28 50,44 50,78 77,62"
        fill="url(#metis-hex-right)"
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