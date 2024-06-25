<template>
  <div class="relative contact w-full h-screen flex-shrink-0 -z-10">
    <ImageComponent src="/SECCIONCONTACT.jpeg" class="h-screen" />
    <!-- <ImageComponent src="/ContactGif.gif" class="h-80 w-80 absolute top-0 z-10" /> -->
  </div>
  <div class="text-white text-lg font-normal top-10 absolute">
    <p>Nuestras Ubicaciones</p>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.contact {
  background: linear-gradient(0deg, rgba(0, 58, 49, 0.5) 0%, #000 100%);
  background-blend-mode: multiply;
  mix-blend-mode: multiply;
}
</style>
