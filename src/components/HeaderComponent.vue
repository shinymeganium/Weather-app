<template>
  <header class="flex flex-col gap-15 font-bricolage-grotesque text-white">
    <div class="flex justify-between">
      <img class="w-35 h-8" src="/src/assets/img/logo.svg" alt="logo">
      <!-- // -->
      <dropdown
        :id="btnID"
        :class="btnClasses"
        :btnContent="btnContent"
        :ddID="ddID"
        :ddClasses="ddClasses"
        @click="btnOnclick" />
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
import Dropdown from "./Dropdown.vue";

const btnID = "btnDD";
const btnClasses = "flex justify-center relative items-center gap-2 px-4 py-3 bg-widget-color rounded-xl";
const btnContent = [ {
    tag: "img",
    classes: "size-5",
    src: "src/assets/img/icon-units.svg",
    alt: "units"
  },
  {
    tag: "span",
    text: "Units"
  },
  {
    tag: "img",
    classes: "size-3",
    src: "src/assets/img/icon-dropdown.svg",
    alt: "dropdown"
  }];
  function btnOnclick() {
    document.querySelector("#ddID").classList.toggle("hidden");
  }

  const isMetric = true;
  const ddID = "ddID";
  const ddClasses = "hidden w-53 flex flex-col absolute top-15 right-0 bg-widget-color rounded-xl";
  const metricContent = [
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