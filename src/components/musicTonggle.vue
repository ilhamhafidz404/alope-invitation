<template>
  <button
    class="
      absolute
      bg-white/70
      left-1/2
      -translate-1/2
      bottom-[90px]
      w-[35px]
      h-[35px]
      p-2
      flex
      items-center
      justify-center
      rounded-full
      cursor-pointer
    "
    @click="musicToggle()"
  >
    <i class="fa-solid fa-volume-high text-gray-800" id="speakerIcon"></i>
  </button>
  <audio id="music" autoplay controls class="invisible">
    <source src="../assets/music/bg-song.mp3" type="audio/ogg" />
  </audio>
</template>

<script>
export default {
  methods: {
    musicToggle() {
      var audio = document.getElementById("music");
      var speakerIcon = document.getElementById("speakerIcon");
      audio.muted = !audio.muted;
      speakerIcon.classList.toggle("fa-volume-high");
      speakerIcon.classList.toggle("fa-volume-xmark");
    },
  },
};
</script>

<style>
</style>