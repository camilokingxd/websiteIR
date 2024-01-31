<template>
  <div class="absolute w-full">
    <div class="absolute right-0 block sm:hidden">
      <div class="">
        <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
        <p class="right-5 top-5 absolute text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Nuestra Filosofia</p>
      </div>
    </div>
    <div
      class="btn btn-circle btn-active  bg-white shadow-xl w-40 h-5 flex flex-col justify-center items-center absolute right-0 top-32  ">
      <p class="text-xs font-['Poppins']">Mas Informacion</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MaskHome from "~/assets/MaskHome.svg"
</script>

<style></style>