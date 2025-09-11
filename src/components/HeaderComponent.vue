<template>
  <header class="flex flex-col gap-15 font-bricolage-grotesque text-white">
    <div class="flex justify-between">
      <img class="w-35 h-8" src="\src\assets\img\logo.svg" alt="logo">
      <!-- // -->
      <dropdown :btnText="test"/>
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

<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";
const test = "test";

const btnClasses ="flex justify-center relative items-center gap-2 px-4 py-3 bg-widget-color rounded-xl";
// change to descriptive (id?, key, value etc)
const ddValues = ["Switch to Imperial", "Temperature", "Celsius (C)", "Fahrenheit (F)", "Wind Speed", "km/h", "mph", "Precipitation", "Millimeters (mm)", "Inches (in)"];
const c1 = "hi";
const e1 = "p";
const cl1 = "bg-gray-300";
</script>