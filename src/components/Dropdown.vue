<template>
  <slot name="btn"/>
  <div v-if="show" :class="ddClasses">
    <slot name="dd"/>
  </div>
</template>

<script setup>
defineProps(["show", "ddClasses"]);
</script>