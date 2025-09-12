<template>
  <button v-if="el.tag === 'btn'" id="" :class="el.classes">
    {{ el.btnTxt }}
  </button>
  <h3 v-else-if="el.tag === 'h3'"></h3>
  <div v-else-if="el.tag === 'div'"></div>
  <hr v-else-if="el.tag === 'hr'">
  <li v-else> {{ el.tag }} </li>
</template>

<script setup>
  defineProps(["el"]);
</script>