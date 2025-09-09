<script setup>
const props = defineProps(["button", "display", "content"]);

function showDropdown() {
  document.querySelector(props.display).classList.toggle("hidden");
}

// document.querySelector("#units").addEventListener("hover", () => {
//   document.querySelector("#units_dt").classList.toggle("cursor-pointer");
// });
document.querySelector(props.button).addEventListener("click", showDropdown);

</script>

<template>
  <!-- <div id="units" class="flex justify-center items-center gap-2 px-4 py-3 bg-widget-color rounded-xl">
    <img class="size-5" src="\src\assets\img\icon-units.svg" alt="gear">
    <span> Units </span> 
    <img class="size-3" src="\src\assets\img\icon-dropdown.svg" alt="dropdown">
      <div id="units_dt" class="hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl">
        <span class="">Switch to Imperial</span>
        <span class="">Temperature</span>
        <span class="">Celsius (C)</span>
        <span class="">Fahrenheit (F)</span>
        <hr>
        <span class="">Wind Speed</span>
        <span class="">km/h</span>
        <span class="">mph</span>
        <hr>
        <span class="">Precipitation</span>
        <span class="">Millimeters (mm)</span>
        <span class="">Inches (in)</span>
    </div>
  </div> -->
  <div id="props.button" class="flex justify-center items-center gap-2 px-4 py-3 bg-widget-color rounded-xl"> <span>test</span>
    <ul id="props.display" class="hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl">
      <li v-for="item in content" class="">
        {{ item }}
      </li>
    </ul>
  </div>
</template>