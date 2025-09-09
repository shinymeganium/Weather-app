<script setup>
import DropdownItem from './DropdownItem.vue';
const values = ["Switch to Imperial", "Temperature", "Celsius (C)", "Fahrenheit (F)", "Wind Speed", "km/h", "mph", "Precipitation", "Millimeters (mm)", "Inches (in)"];
const test1 = "yay yay";
const test2 = "bg-gray-300 font-bold";
</script>

<template>
  <header class="flex flex-col gap-15 font-bricolage-grotesque text-white">
    <div class="flex justify-between relative">
      <img class="w-35 h-8" src="\src\assets\img\logo.svg" alt="logo">
      <!-- // -->
      <div class="">
        <ul>
          <dropdown-item :item="test1" :class-names="test2"/>
        </ul>
      </div>
    </div>

    <h1 class="px-15 text-6xl/20 text-center font-bold">
      How's the sky looking today?
    </h1>

    <form action="" class="flex flex-col gap-3">
      <input type="text" class="h-14 bg-widget-color rounded-xl" placeholder="Search for a place...">
      <button type="submit" class="h-14 bg-button-color rounded-xl">Search</button>
    </form>
  </header>
</template>