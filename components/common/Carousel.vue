<template>
  <div class="carousel w-full h-full  absolute">
    <div id="item1" class="carousel-item w-full h-full">
      <div class="relative w-full p-0 h-full">
        <ImageComponent src="/firstBanner.jpeg" class="w-full" height="100%" />
        <p
          class="w-[1250px] absolute right-12 bottom-16 xl:bottom-36 text-right text-white text-2xl font-semibold font-['Poppins']">
          Intelligent Reservoir, una empresa en continua evolución, ofrece una nueva generación de servicios
          durante la perforación de pozos estratigráficos, exploratorios y de desarrollo de hidrocarburos, tanto en
          convencionales como no convencionales donde somos pioneros en Latinoamérica
        </p>
      </div>
    </div>
    <div id="item2" class="carousel-item w-full">
      <ImageComponent src="/SECCION8.png" class="w-full" height="100%" />
    </div>
    <div id="item3" class="carousel-item w-full">
      <ImageComponent src="/Banner3.png" class="w-full" height="100%" />
    </div>
    <div id="item4" class="carousel-item w-full">
      <ImageComponent src="/Banner4.png" class="w-full" height="100%" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageComponent from "~/components/common/ImageComponent.vue";
</script>

<style></style>