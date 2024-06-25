<template>
  <section class="flex relative min-w-full md:min-h-screen">
    <div class="w-full h-[245px] sm:h-screen">
      <ImageComponent
        class="w-full h-full object-fill hidden sm:block min-h-screen"
        alt="Desktop Image"
        height="100%"
        src="/SECCION1.png"
      />
      <ImageComponent
        class="w-full h-full object-cover block sm:hidden"
        alt="Mobile Image"
        src="/Seccion1Mobile.png"
      />
    </div>
    <Desktop />
    <Mobile />
  </section>
</template>

<script lang="ts" setup></script>
