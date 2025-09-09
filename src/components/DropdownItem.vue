<script setup>
const props = defineProps(["item", "classNames"]);
</script>

<template>
  <li :class="props.classNames">
    {{ props.item }}
  </li>
</template>