<template>
  <div class="absolute w-full sm:hidden">
    <div class="absolute right-0 block ">
      <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
      <p class="right-5 top-5 absolute text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
        Nuestra Filosofia</p>
    </div>
    <div
      class="btn btn-circle btn-active  bg-white shadow-xl w-40 h-5 flex flex-col justify-center items-center absolute right-0 top-32 ">
      <p class="text-xs font-normal font-['Poppins'] text-black">Mas Informacion</p>
    </div>

    <div class="absolute left-10 top-20 flex flex-col gap-4">
      <div class="flex gap-2  items-center w-44">
        <Codify class="w-8" style="color: #C6DA00 ;" :fontControlled="false" />
        <div style="width: 2.88px; height: 26px; background: #C6DA00;"></div>
        <p class="text-white font-['Poppins'] font-medium text-sm "> Codificando a nuestra manera </p>

      </div>
      <div class="flex gap-2  items-center w-44">
        <Services class="w-8" style="color: #20ACA4 ;" :fontControlled="false" />
        <div style="width: 2.88px; height: 26px; background: #20ACA4;"></div>
        <p class="text-white font-['Poppins'] font-medium text-sm "> Nuestros Servicios </p>

      </div>

    </div>

    <div style="border-radius:15px 0px 0px 15px; background: linear-gradient(268.18deg, #CEDF00 9.85%, #92BA00 42.83%);"
      class="w-72 h-16 absolute top-[215px] right-0 z-20">
      <p class="text-black text-center text-xs font-medium font-['Poppins']">Ofrecer un desarrollo innovador en cuanto a
        tecnología en recopilación de información de rocas y fluidos para
        maximizar los datos adquiridos durante la perforación. </p>
      <div class="absolute right-0">
        <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
        <p class="right-0 top-5 absolute text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Todo comienza en el pozo</p>
        <div
          class="btn btn-circle btn-active  bg-white shadow-xl w-40 h-5 flex flex-col justify-center items-center absolute right-0 top-32 ">
          <p class="text-xs font-normal text-black font-['Poppins']">Mas Informacion</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Services from "~/assets/Services.svg";
import Codify from "~/assets/Codify.svg";
</script>

