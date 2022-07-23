<script setup>
import navBottom from "./components/navigation.vue";
import musicToggle from "./components/musicTonggle.vue";
</script>

<template>
  <!-- <section
    id="container"
    class="w-[480px] mx-auto flex items-center justify-center relative"
  >
    <router-view></router-view>
  </section> -->
  <article
    id="container"
    class="
      w-[480px]
      mx-auto
      flex
      items-center
      justify-center
      relative
      overflow-hidden
    "
  >
    <router-view></router-view>
  </article>
  <navBottom></navBottom>
  <!-- <musicToggle></musicToggle> -->
</template>

<style>
.grand-hotel {
  font-family: "Grand Hotel", cursive;
}
.montserrat {
  font-family: "Montserrat", sans-serif;
}
.cormorant-garamond {
  font-family: "Cormorant Garamond", serif;
}
.clicker-script {
  font-family: "Clicker Script", cursive;
}
.lora {
  font-family: "Lora", serif;
}
body {
  /* background-color: #41454f; */
  background-color: #fbf0ec;
  max-height: 100vh;
}
#container {
  height: calc(100vh - 60px);
}
</style>
