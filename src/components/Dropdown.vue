<template>
  <button>
    {{ props.btnTxt }}
    <div>

    </div>
  </button>
</template>

<script setup>

const props = defineProps("btnTxt");
// const props = defineProps(
//   "btn", "btnTxt", "btnClasses",
//   "dd", "ddContent", "ddClasses");
  // btnText=array of elements, dd=dropdown, ddContent=array of elements
</script>