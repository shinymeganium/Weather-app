<template>
  <div>
    <h2 class="text-4xl text-blue-500">My first component</h2>
    <p>This is my first custom Vue component.</p>
    <p>{{ foo }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const foo = ref("yo");
</script>

