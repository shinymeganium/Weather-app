<template>
  <button :id="btnID" :class="btnClasses">
    <template v-for="element in btnContent" :key="element.id">
      <img v-if="element.tag === 'img'" :src="element.src" :alt="element.alt" :class="element.classes">
      <span v-else :class="element.classes">{{ element.text }}</span>
    </template>
    <template :id="ddID" :class="ddClasses">
      <template v-if="metric">
        <div v-for="element in metricContent" :key="element.id">
          <d-d-item :el="element"/>
        </div>
        metric
      </template>
      <template v-else>
        <div v-for="element in imperialContent" :key="element.id">
          <d-d-item :el="element"/>
        </div>
        imperial
      </template>
    </template>

  </button>
</template>

<script setup>
import DDItem from './DDItem.vue';

defineProps(["btnID", "btnClasses", "btnContent", "ddID", "ddClasses", "metric", "metricContent", "imperialContent"]);
</script>