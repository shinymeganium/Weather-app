<template>
  <header class="flex flex-col gap-15 font-bricolage-grotesque text-white">
    <div class="flex justify-between">
      <img class="w-35 h-8" src="/src/assets/img/logo.svg" alt="logo">
      <!-- // -->
      <Dropdown :show="show">
        <template v-slot:btn>
          <button @click="toggle" class="flex justify-center relative items-center gap-2 px-4 py-3 bg-widget-color rounded-xl">
            Units
          </button>
        </template>
        <template v-slot:dd>
          <button class="">Switch to Imperial</button>
          <h3 class="">Temperature</h3>
          <span class="">Celsius</span>
          <span class="">Fahrenheit</span>
          <hr>
          <h3 class="">Wind Speed</h3>
          <span class="">km/h</span>
          <span class="">mph</span>
          <hr>
          <h3 class="">Precipitation</h3>
          <span class="">Millimeters</span>
          <span class="">Inches</span>
        </template>
      </Dropdown>
    </div>

    <h1 class="w-85 m-auto text-6xl/20 text-center font-bold">
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

const show = ref(false);
const toggle = () => {
  show.value = !show.value;
};

const isMetric = true;
const ddClasses = "hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl";
const metricContent = [ {
  tag: "btn",
  htmlID: "sti",
  classes: "",
  btnTxt: "Switch to Imperial"
},
{
  tag: "h3",
  classes: "",
  txt: "Temperature"
},
{
  tag: "div",
  classes: "",
  txt: "Celsius (C)"
}
  /*
  button
  h3
  div
  div
  hr
  h3
  div
  div
  hr
  h3
  div
  div
  */ 
];

// const btnClasses ="flex justify-center relative items-center gap-2 px-4 py-3 bg-widget-color rounded-xl";
// // change to descriptive (id?, key, value etc)
// const ddValues = ["Switch to Imperial", "Temperature", "Celsius (C)", "Fahrenheit (F)", "Wind Speed", "km/h", "mph", "Precipitation", "Millimeters (mm)", "Inches (in)"];
</script>