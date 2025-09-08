<script setup>

</script>

<template>
  <header class="flex flex-col gap-15 font-bricolage-grotesque text-white">
    <div class="flex justify-between relative">
      <img class="w-35 h-8" src="\src\assets\img\logo.svg" alt="logo">
      <div id="units" class="flex justify-center items-center gap-2 px-4 py-3 bg-widget-color rounded-xl">
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