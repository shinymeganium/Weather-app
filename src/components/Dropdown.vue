<template>
  <button :id="props.btn" :class="props.btnClasses">
    <div v-for="elem in props.btnContent">
      <span v-if="elem.type === 'text'">
        {{ elem.value }}
      </span>
      <img v-else :src="elem.src ">
    </div>
    <div id="" class="">

    </div>
  </button>
</template>

<script setup>
import DropdownElement from './DropdownElement.vue';

const props = defineProps(["btn", "dd", "btnClasses", "ddClasses", "btnContent", "ddContent"]);
// const btnElems = ["11", " Units ", "<img class='w-35 h-8' src='\src\assets\img\icon-units.svg' alt='logo'>"];

</script>