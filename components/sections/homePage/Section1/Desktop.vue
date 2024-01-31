<template>
  <div class="hidden sm:flex flex-col box-border justify-center items-center absolute right-0 bottom-1/4">
    <div class="flex flex-col mb-7">
      <p
        class="w-[939.19px] text-white text-lg xl:text-3xl text-right font-semibold font-['Poppins'] self-end xl:w-[996px]">
        Ofrecer un desarrollo innovador en cuanto a tecnología en recopilación de información de rocas y fluidos para
        maximizar los datos adquiridos durante la perforación. </p>
      <div class="w-[900px] h-2 xl:w-[996px] self-end"
        style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)"></div>
    </div>
    <div class="flex flex-col gap-6 xl:gap-10">
      <div class="flex gap-6 items-center xl:gap-10">
        <div @mouseover="setActiveComponent('codify')" class='cursor-pointer'>
          <Codify class=" w-24" style="color: #C6DA00 ;" :fontControlled="false" />
        </div>
        <div style="width: 2.88px; height: 89.17px; background: #C6DA00;"></div>
        <div v-if="activeComponent === 'codify'" class="w-36 h-14 xl:w-48 xl:h-16">
          <p class="text-white font-['Poppins'] font-medium text-base xl:text-xl"> Codificando a nuestra manera </p>
        </div>
      </div>
      <div class="flex gap-6 items-center xl:gap-10">
        <div @mouseover="setActiveComponent('services')" class='cursor-pointer'>
          <Services class="w-24" style="color: #20ACA4 ;" :fontControlled="false" />
        </div>
        <div style="width: 2.88px; height: 89.17px; background: #20ACA4;"></div>
        <div v-if="activeComponent === 'services'" class="w-36 h-14 xl:w-48 xl:h-16">
          <p class="text-white font-['Poppins'] font-medium text-base xl:text-xl"> Nuestros Servicios </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Services from "~/assets/Services.svg";
import Codify from "~/assets/Codify.svg";


const activeComponent = ref("");

const setActiveComponent = (component: string) => {
  activeComponent.value = component;
};
</script>

<style></style>