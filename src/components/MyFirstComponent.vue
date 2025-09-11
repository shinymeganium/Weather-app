<script setup>
defineProps(["foo", "img_src", "img_classes"]);
</script>

<template>
  <div class="bg-gray-300">
    <img :src="img_src" alt="alt" :class="img_classes">
  </div>
</template>