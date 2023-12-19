<template>
  <SpeedInsights />
  <div v-if=isLoading
    class="relative flex justify-center items-center h-screen opacity-90 bg-gradient-to-r from-[rgba(0,58,49,0.50)] to-black">
    <ImageComponent src="/LoadingImage.png"
      class="object-cover md:object-contain md:w-full md:h-auto opacity-30 w-[430px] h-[908px] overflow-hidden" />

    <span class="w-20 h-20 loading loading-spinner text-gray-500 absolute inset-y-1/2"></span>
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
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { onMounted, ref } from 'vue';
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = false;
});


</script>

<style></style>