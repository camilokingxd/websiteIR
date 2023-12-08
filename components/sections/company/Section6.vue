<template>
  <section id="mv" class="relative w-full flex min-h-screen">
    <ImageComponent src="/SECCION6.png" height="100%" />
    <div
      class="absolute left-10 bottom-[20%] flex w-[562px] max-w-full flex-col items-stretch ml-14 mt-24 mb-3 max-md:mt-10">
      <p class=" h-[86.07px] text-white text-[54.68px] font-semibold font-['Poppins']">
        Misión & Visión
      </p>

    </div>
    <div class="flex flex-col mb-7 right-0 absolute top-52">
      <p class=" mr-6 w-[640px] text-white text-lg xl:text-3xl text-right  font-semibold font-['Poppins'] self-end">
        Buscando siempre la mejora continua y la satisfacción del cliente.
      </p>
      <div class="w-[668px] h-2  self-end" style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
    </div>

    <div class="flex flex-col absolute left-1/2 bottom-1/3">
      <div class="flex items-center gap-5 mb-10">
        <NuestraMision class="w-9 h-11 text-[#20ACA4]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-2xl font-normal">Primeros Logros </p>
      </div>

      <div class="flex items-center gap-5 mb-10">
        <NuestraVision class="w-9 h-11 text-[#A7FF2F]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-2xl font-normal">Experiencia </p>
      </div>


    </div>
  </section>
</template>

<script lang="ts" setup>
import NuestraMision from "~/assets/NuestraMision.svg";
import NuestraVision from "~/assets/NuestraVision.svg";
</script>

<style></style>