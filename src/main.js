import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function showUnitsDropdown() {
  document.querySelector("#units_dt").classList.toggle("hidden");
}

document.querySelector("#units").addEventListener("hover", () => {
  document.querySelector("#units_dt").classList.toggle("cursor-pointer");
});
document.querySelector("#units").addEventListener("click", showUnitsDropdown);