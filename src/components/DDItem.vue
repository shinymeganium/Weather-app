<template>
  <button v-if="btn"></button>
  <h3 v-else-if="h3"></h3>
  <div v-else-if="div"></div>
</template>

<script setup>
  defineProps([]);
</script>