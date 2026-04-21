<!-- MetisIcon.vue -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100">
    <polygon
      points="50,5 90,30 90,70 50,95 10,70 10,30"
      fill="var(--vp-c-brand-1)"
      stroke="var(--vp-c-brand-2)"
      stroke-width="2"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 60 }
})
</script>