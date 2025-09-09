<script setup>
import DropdownItem from './DropdownItem.vue';

const props = defineProps(["id", "classNames"]);
</script>

<template>
  <ul v-for="value in source" :id="props.id" class="hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl">
    <dropdown-item item="value" />
  </ul>
</template>