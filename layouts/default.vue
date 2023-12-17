<template>
  <div v-if=isLoading
    class="relative flex justify-center items-center min-h-screen opacity-90 bg-gradient-to-r from-[rgba(0,58,49,0.50)] to-black">
    <ImageComponent src="/LoadingImage.png" height="100%" class="opacity-30" />

    <span class=" w-20 h-20 loading loading-spinner text-gray-500 absolute top-1/2 bottom-1/2 "></span>


  </div>
  <div v-else class="min-h-screen relative flex flex-col w-full  ">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

onMounted(async () => {
  // Aquí implementas la lógica para cargar tus recursos
  await loadImages();

  isLoading.value = false; // Oculta la pantalla de carga una vez que todo está listo
});

async function loadImages() {

  const imageUrls = [
    '/SECCION1.png',
    "/SECCION2.png",
    "/SECCION3.png",
    "/SECCION4.png",
    "/SECCION5.png",
    "/SECCION6.png",

  ];
  await Promise.all(imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  }));
}
</script>

<style></style>