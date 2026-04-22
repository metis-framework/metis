<template>
  <div class="symbol-card-wrapper">
    <button
      type="button"
      class="symbol-card-button"
      :aria-label="ariaLabel || `Abrir explicação do símbolo ${title}`"
      @click="isOpen = true"
    >
      <component :is="iconComponent" :size="size" class="symbol-card-icon" alt="Icon"/>
    </button>

    <span v-if="hint" class="symbol-card-hint">
      {{ hint }}
    </span>

    <SymbolInfoModal
      v-model="isOpen"
      :title="title"
      :text="text"
    >
      <template #icon>
        <component :is="iconComponent" :size="modalIconSize" />
      </template>
    </SymbolInfoModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SymbolInfoModal from './SymbolInfoModal.vue'
import MetisIcon from './MetisIcon.vue'
import AfsIcon from './AfsIcon.vue'
import PrpIcon from './PrpIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator: (value: string) => ['metis', 'afs', 'prp'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 140
  },
  modalIconSize: {
    type: Number,
    default: 110
  },
  hint: {
    type: String,
    default: 'Clique para entender este símbolo'
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const isOpen = ref(false)

const iconMap = {
  metis: MetisIcon,
  afs: AfsIcon,
  prp: PrpIcon
}

const iconComponent = computed(() => iconMap[props.icon as keyof typeof iconMap])
</script>

<style scoped>
.symbol-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  margin: 24px 0 32px;
}

.symbol-card-button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.symbol-card-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-3);
  outline-offset: 8px;
  border-radius: 16px;
}

.symbol-card-icon {
  transform-origin: center;
}

.symbol-card-button:hover :deep(svg) {
  animation: symbolWobble 0.9s ease-in-out;
  filter: brightness(1.06);
}

.symbol-card-hint {
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

@keyframes symbolWobble {
  0%   { transform: rotate(0deg) scale(1); }
  20%  { transform: rotate(6deg) scale(1.03); }
  40%  { transform: rotate(-5deg) scale(1.03); }
  60%  { transform: rotate(3deg) scale(1.02); }
  80%  { transform: rotate(-2deg) scale(1.01); }
  100% { transform: rotate(0deg) scale(1); }
}
</style>