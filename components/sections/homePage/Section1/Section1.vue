<template>
  <section class="flex relative min-w-full md:min-h-screen">
    <div class="w-full h-[245px]">
      <ImageComponent src="/SECCION1.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion1Mobile.png" alt="Mobile Image" class="w-full h-full object-cover block sm:hidden" />
    </div>
    <Desktop />
    <Mobile />
  </section>
</template>

<script lang="ts" setup>


</script>

<style></style>