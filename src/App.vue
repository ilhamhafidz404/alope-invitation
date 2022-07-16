<script setup>
import navBottom from "./components/navigation.vue";
import musicToggle from "./components/musicTonggle.vue";
</script>

<template>
  <section
    id="container"
    class="w-[480px] mx-auto flex items-center justify-center relative"
  >
    <img src="./assets/img/atas.png" class="absolute top-0" />
    <div class="text-center text-white">
      <h3 class="font-semibold mb-5">THE WEDDING OF</h3>
      <h1 class="text-7xl text-[#bfa590]">
        Ilham
        <span class="block text-2xl">and</span>
        Ira
      </h1>
      <div class="mt-7">
        <h3 class="font-semibold">SAVE THE DATE</h3>
        <h2 class="text-xl">26 . 02 . 2022</h2>
      </div>
    </div>
    <img src="./assets/img/bawah.png" class="absolute bottom-0" />
  </section>
  <navBottom></navBottom>
  <musicToggle></musicToggle>
</template>

<style>
h1 {
  font-family: "Grand Hotel", cursive;
}
h2 {
  font-family: "Montserrat", sans-serif;
}
h3 {
  font-family: "Cormorant Garamond", serif;
}
body {
  background-color: #41454f;
  max-height: 100vh;
}
#container {
  height: calc(100vh - 60px);
}
</style>
