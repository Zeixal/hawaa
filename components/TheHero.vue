<template>
  <header class="h-80 w-full">
    <the-navbar></the-navbar>
    <div class="w-full mx-auto flex flex-col bg-primary-500 items-center p-2">
      <div
        class="h-72 m-20 w-full rounded-md overflow-hidden justify-items-end"
      >
        <img class="h-full w-full object-cover" :src="cover" alt="" />
      </div>
      <div class="w-full h-6 flex justify-center md:justify-end px-2">
        <span
          class="text-base font-semibold text-gray-100 text-right opacity-70"
          >Publié le 01/07/2021</span
        >
      </div>
    </div>
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
export default {
  props: ["cover"],
  components: { TheNavbar }
};
</script>

<style></style>
