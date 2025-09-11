<template>
  <li :class="classes">
    {{ text }}
  </li>
</template>

<script setup>
  defineProps(["text", "classes"]);
</script>