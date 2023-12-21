<template>
  <section class="relative w-full flex min-h-screen">
    <ImageComponent src="/SECCION5.png" height="100%" />

    <SocialMediaSidebar />
    <div
      class="absolute left-10 bottom-[20%] flex w-[562px] max-w-full flex-col items-stretch ml-14 mt-24 mb-3 max-md:mt-10">
      <p class="w-[386px] h-[86.07px] text-white text-[54.68px] font-semibold font-['Poppins']">
        Breve Historia
      </p>
      <button onclick="window.location.href='#mv'"
        class="btn btn-circle btn-active  bg-white shadow-xl w-48 font-['Poppins'] flex flex-col justify-center items-center mt-3">
        <p>M&V</p>
      </button>
    </div>
    <div class="flex flex-col mb-7 right-0 absolute top-52">
      <p class="w-[391px] text-white text-lg xl:text-3xl   font-semibold font-['Poppins'] self-end">
        Breve historia
      </p>
      <div class="w-[391px] h-2 xl:w-[391px] self-end"
        style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
    </div>

    <div class="flex flex-col absolute left-1/2 bottom-1/3">

      <div class="flex items-center gap-5 mb-10 " @click="toggleButton">
        <Inicios class="w-9 h-11 text-[#C6DA00] z-10" :fontControlled="false" />
        <button v-show="!showSecondButton"
          class="swap-on btn btn-ghost hover:bg-transparent  text-white font-['Poppins'] text-2xl font-normal">Los
          inicios
        </button>
        <button v-show="showSecondButton"
          class="btn btn-outline border-[#C6DA00] hover:bg-transparent hover:text-white hover:border-[#C6DA00] text-white font-['Poppins'] text-2xl font-normal">Los
          inicios
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32" fill="none">
            <path
              d="M21.3069 16.3076L5.76685 31.8475L0.586914 26.6675L10.9569 16.3076L0.586914 5.93756L5.76685 0.767578L21.3069 16.3076Z"
              fill="url(#paint0_linear_227_1722)" />
            <defs>
              <linearGradient id="paint0_linear_227_1722" x1="60.3268" y1="-38.2524" x2="-29.903" y2="51.9775"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#CEDF00" />
                <stop offset="1" stop-color="#92BA00" />
              </linearGradient>
            </defs>
          </svg>
        </button>


      </div>


      <div class="flex items-center gap-5 mb-10">
        <Logros class="w-9 h-11 text-[#20ACA4]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-2xl font-normal">Primeros Logros </p>
      </div>

      <div class="flex items-center gap-5 mb-10">
        <Experiencia class="w-9 h-11 text-[#A7FF2F]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-2xl font-normal">Experiencia </p>
      </div>

      <div class="flex items-center gap-5 ">
        <Reorganizacion class="w-9 h-11 text-[#4680AE]" :fontControlled="false" />
        <p class="text-white font-['Poppins'] text-2xl font-normal">Reorganizacion </p>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import SocialMediaSidebar from '~/components/common/SocialMediaSidebar.vue';
import Inicios from "~/assets/Inicios.svg";
import Logros from "~/assets/Logros.svg";
import Experiencia from "~/assets/Experiencia.svg";
import Reorganizacion from "~/assets/Reorganizacion.svg";

import { ref } from 'vue';

const showSecondButton = ref(false);

const toggleButton = () => {
  showSecondButton.value = !showSecondButton.value;
};

</script>

<style></style>