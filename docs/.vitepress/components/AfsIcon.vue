<!-- AfsIcon.vue -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="var(--vp-c-brand-3)"
      stroke="var(--vp-c-brand-2)"
      stroke-width="2"
    />

    <!-- seta -->
    <path
      d="M70 50 L80 45 L80 55 Z"
      fill="var(--vp-c-brand-1)"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 60 }
})
</script>