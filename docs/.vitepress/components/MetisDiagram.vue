<template>
  <div class="metis-diagram" aria-label="Ciclo do METIS">
    <svg
      viewBox="0 0 260 220"
      class="diagram-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path
            d="M0,0 L0,6 L6,3 z"
            fill="var(--vp-c-brand-2)"
          />
        </marker>
      </defs>

      <!-- arco esquerdo -->
      <path
        d="M88 128 Q92 92 112 72"
        class="flow-arrow"
        marker-end="url(#arrowhead)"
      />

      <!-- arco direito -->
      <path
        d="M148 72 Q170 92 174 128"
        class="flow-arrow"
        marker-end="url(#arrowhead)"
      />

      <!-- arco inferior -->
      <path
        d="M162 150 Q130 166 98 150"
        class="flow-arrow"
        marker-end="url(#arrowhead)"
      />
    </svg>

    <div class="node node-top">
      <MetisIcon :size="56" />
    </div>

    <div class="node node-left">
      <PrpIcon :size="50" />
    </div>

    <div class="node node-right">
      <AfsIcon :size="50" />
    </div>
  </div>
</template>

<script setup>
import MetisIcon from './MetisIcon.vue'
import AfsIcon from './AfsIcon.vue'
import PrpIcon from './PrpIcon.vue'
</script>

<style scoped>
.metis-diagram {
  position: relative;
  width: 220px;
  height: 190px;
  margin: 22px auto 12px;
}

.diagram-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.flow-arrow {
  fill: none;
  stroke: var(--vp-c-brand-2);
  stroke-width: 2.4;
  opacity: 0.78;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.node {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-top {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.node-left {
  left: 42px;
  bottom: 18px;
}

.node-right {
  right: 42px;
  bottom: 18px;
}
</style>