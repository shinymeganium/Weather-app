<template>
  <section>
    <h1 class="text-5xl">Page title</h1>
    <MyFirstComponent :foo="foo"
      :img_src="img_src"
      :img_classes="img_classes"
       />
    <!-- <p>Parent also has foo: {{ foo }}</p> -->
  </section>
</template>

<script setup>
import { ref } from "vue";
import MyFirstComponent from "./MyFirstComponent.vue";

const foo = ref("yo");
const img_src = "src/assets/img/icon-units.svg";
const img_classes = "class='w-35 h-8'";
</script>