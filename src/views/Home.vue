<template>
  <section
    class="relative text-center flex items-center justify-center w-full h-full"
  >
    <h5
      class="
        absolute
        lora
        top-[30px]
        text-md
        tracking-wider
        white-space-nowrap
        text-[#6d442e]
        after:absolute
        after:w-[1px]
        after:left-1/2
        after:mt-5
        after:h-[80px]
        after:bg-[#6d442e]/70
        after:block
        after:text-center
      "
    >
      Save the date
    </h5>
    <div
      class="
        cover
        relative
        w-[350px]
        h-[300px]
        before:w-[350px]
        before:h-[300px]
        before:block
        before:bg-cover
        before:bg-center
        after:w-[130px]
        after:h-[130px]
        after:mt-3
        after:absolute
        after:rounded-full
        after:top-1/2
        after:left-1/2
        after:-translate-x-1/2
        after:-translate-y-1/2
        after:content-['A&C']
        after:bg-[#fbf0ec]
        after:flex
        after:justify-center
        after:items-center
        after:text-5xl
        after:text-[#6d442e]
        clicker-script
      "
    ></div>
    <h5
      class="
        absolute
        lora
        bottom-[30px]
        text-md
        tracking-wider
        white-space-nowrap
        text-[#6d442e]
        after:absolute
        after:w-[1px]
        after:left-1/2
        after:mt-5
        after:h-[80px]
        after:bg-[#6d442e]/70
        after:block
        after:text-center
        after:-top-[120px]
      "
    >
      09.12.2022
    </h5>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover::before {
  background-image: url("../assets/img/2/Asset3.png");
}
/* /* .cover::after {
  font-family: "Clicker Script", cursive;
} */
/* h5 {
  font-family: "Lora", serif;
} */
</style>