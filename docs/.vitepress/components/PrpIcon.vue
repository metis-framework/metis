<!-- PrpIcon.vue -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100">
    <polygon
      points="50,10 90,85 10,85"
      fill="var(--vp-c-brand-2)"
      stroke="var(--vp-c-brand-1)"
      stroke-width="2"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 60 }
})
</script>