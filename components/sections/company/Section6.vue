<template>
  <section id="mv" class="relative w-full md:flex md:min-h-screen">
    <div class="w-full h-[320px] sm:h-screen">
      <ImageComponent height="100%" src="/SECCION6.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion6Mobile.png" alt="Mobile Image"
        class="w-full h-full object-cover block sm:hidden opacity-70" />
    </div>
    <div class="md:hidden flex absolute top-0  z-50 flex-col">
      <div class="flex flex-col items-center self-end relative">
        <ImageComponent src="/MaskCompany.png" class="w-[160px] " :fontControlled="false" />
        <p class="absolute top-1/4 text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Misión & Visión</p>
      </div>
    </div>
    <div
      class="absolute left-10 bottom-[20%] hidden  md:flex w-[562px] max-w-full flex-col items-stretch ml-14 mt-24 mb-3 max-md:mt-10">
      <p class=" h-[86.07px] text-white text-[54.68px] font-semibold font-['Poppins']">
        Misión & Visión
      </p>

    </div>
    <div class="hidden md:flex flex-col mb-7 right-0 absolute top-52">
      <p class=" mr-6 w-[640px] text-white text-lg xl:text-3xl text-right  font-semibold font-['Poppins'] self-end">
        Buscando siempre la mejora continua y la satisfacción del cliente.
      </p>
      <div class="w-[668px] h-2  self-end" style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
    </div>

    <div class="flex flex-col absolute top-14 right-14 md:top-80 md:left-1/2 md:bottom-1/3">
      <div class="flex items-center gap-5 mb-10">
        <NuestraMision class="w-6 h-7 md:w-9 md:h-11 text-[#20ACA4]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-sm md:text-2xl font-normal">Primeros Logros </p>
      </div>

      <div class="flex items-center gap-5 mb-10">
        <NuestraVision class="w-6 h-7 md:w-9 md:h-11 text-[#A7FF2F]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-sm md:text-2xl font-normal">Experiencia </p>
      </div>
    </div>

    <div class="md:hidden flex absolute right-0 -bottom-28 z-50 flex-col">
      <div style="border-radius:15px 0px 0px 15px; background: linear-gradient(268.18deg, #CEDF00 9.85%, #92BA00 42.83%);"
        class=" right-0  sm:hidden w-72 h-16 z-20  flex items-center">
        <p class="text-black text-center text-xs font-medium font-['Poppins']">Durante la perforación los datos geológicos
          y
          mecánicos se registran como fuente principal de información </p>

      </div>
      <div class="flex flex-col items-center self-end relative">
        <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
        <p class="absolute top-1/4 text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Nuestro
          equipo</p>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import NuestraMision from "~/assets/NuestraMision.svg";
import NuestraVision from "~/assets/NuestraVision.svg";



</script>

<style></style>