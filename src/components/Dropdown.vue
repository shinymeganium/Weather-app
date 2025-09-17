<template>
  <slot name="btn"/>
  <div :id="ddID" class="'hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl'">
    <slot name="dd"/>
  </div>
</template>

<script setup>
defineProps(["ddID"]);
</script>