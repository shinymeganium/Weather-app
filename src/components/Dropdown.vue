<template>
  <button :id="btnID" :class="btnClasses">
    <template v-for="element in btnContent" :key="element.id">
      <img v-if="element.tag === 'img'" :src="element.src" :alt="element.alt" :class="element.classes">
      <span v-else :class="element.classes">{{ element.text }}</span>
    </template>
    <template :id="ddID" :class="ddClasses">
      asd
    </template>

  </button>
</template>

<script setup>
defineProps(["btnID", "btnClasses", "btnContent", "ddID", "ddClasses", "metric"]);
</script>