<template>
  <Teleport to="body">
    <transition name="symbol-modal-fade">
      <div
        v-if="modelValue"
        class="symbol-modal-overlay"
        @click="close"
      >
        <div
          class="symbol-modal"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          @click.stop
        >
          <button
            class="symbol-modal-close"
            type="button"
            aria-label="Fechar modal"
            @click="close"
          >
            ×
          </button>

          <div class="symbol-modal-icon">
            <slot name="icon" />
          </div>

          <h3 :id="titleId" class="symbol-modal-title">
            {{ title }}
          </h3>

          <p class="symbol-modal-text">
            {{ text }}
          </p>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const titleId = `symbol-modal-title-${Math.random().toString(36).slice(2, 9)}`

function close() {
  emit('update:modelValue', false)
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
    } else {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
    }
  }
)
</script>

<style scoped>
.symbol-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 18, 22, 0.62);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.symbol-modal {
  position: relative;
  width: min(100%, 680px);
  background: var(--vp-c-bg);
  border: 1px solid rgba(107, 130, 153, 0.18);
  border-radius: 24px;
  padding: 28px 24px 24px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.22);
}

.symbol-modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
}

.symbol-modal-close:hover {
  color: var(--vp-c-text-1);
  transform: scale(1.08);
}

.symbol-modal-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}

.symbol-modal-title {
  margin: 0 0 12px;
  text-align: center;
  font-size: 1.4rem;
  color: var(--vp-c-text-1);
}

.symbol-modal-text {
  margin: 0;
  text-align: center;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

.symbol-modal-fade-enter-active,
.symbol-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.symbol-modal-fade-enter-from,
.symbol-modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .symbol-modal {
    padding: 24px 18px 20px;
    border-radius: 20px;
  }

  .symbol-modal-title {
    font-size: 1.2rem;
  }

  .symbol-modal-text {
    font-size: 0.95rem;
    line-height: 1.65;
  }
}
</style>