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
          <span class="text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
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
          <span class="text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
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
          <span class="text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-auto"
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
          <span class="text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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
          <span class="text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
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