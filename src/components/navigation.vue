<template>
  <nav
    class="bg-white fixed h-[60px] w-[480px] bottom-0 left-1/2 -translate-x-1/2"
  >
    <ul class="flex justify-between h-full text-gray-800">
      <li class="w-[100px]">
        <router-link
          :to="{ name: 'home' }"
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Home
          </span>
        </router-link>
      </li>
      <li class="w-[100px]">
        <router-link
          :to="{ name: 'cover' }"
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Cover
          </span>
        </router-link>
      </li>
      <li class="w-[100px]">
        <router-link
          :to="{ name: 'pengantin' }"
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Pengantin
          </span>
        </router-link>
      </li>
      <li class="w-[100px]">
        <router-link
          :to="{ name: 'acara' }"
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Acara
          </span>
        </router-link>
      </li>
      <li class="w-[100px]">
        <router-link
          :to="{ name: 'lokasi' }"
          class="w-full h-full flex items-center justify-center"
        >
          <span class="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Lokasi
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>