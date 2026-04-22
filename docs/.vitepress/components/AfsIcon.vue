<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    class="shape-icon symbol-icon afs-icon"
    aria-hidden="true"
  >
    <defs>
      <!-- Gradiente da esfera -->
      <radialGradient id="afs-sphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="var(--vp-c-brand-2)" />
        <stop offset="45%" stop-color="var(--vp-c-brand-3)" />
        <stop offset="100%" stop-color="var(--vp-c-brand-1)" />
      </radialGradient>

      <!-- Sombra -->
      <filter id="afs-shadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.25" />
      </filter>
    </defs>

    <g filter="url(#afs-shadow)">
      <!-- Esfera (AGORA CÍRCULO) -->
      <circle
        cx="50"
        cy="50"
        r="32"
        fill="url(#afs-sphere)"
        stroke="var(--vp-c-brand-1)"
        stroke-width="2"
      />

      <!-- brilho -->
      <circle
        cx="38"
        cy="34"
        r="6"
        fill="#fff"
        opacity="0.15"
      />

      <!-- anel de fluxo (isso muda tudo) -->
      <path
        d="M50 8
           A42 42 0 0 1 90 50"
        fill="none"
        stroke="var(--vp-c-brand-2)"
        stroke-width="3"
        stroke-linecap="round"
        opacity="0.7"
      />

      <!-- seta do fluxo -->
      <path
        d="M90 50 L82 46 L82 54 Z"
        fill="var(--vp-c-brand-2)"
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