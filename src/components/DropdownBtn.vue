<script setup>
import DropdownContent from './DropdownContent.vue';

const props = defineProps(["id"]);
</script>

<template>
  <button :id="props.id" class="flex justify-center items-center gap-2 px-4 py-3 bg-widget-color rounded-xl">
    <dropdown-content />
  </button>
</template>