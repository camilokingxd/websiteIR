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



    <div class="flex flex-col self-start absolute right-0 top-1/4 w-[800px]">
      <div class="flex flex-col mb-7">

        <p class="w-[391px] text-white text-lg xl:text-3xl   font-semibold font-['Poppins'] self-end">
          Breve historia
        </p>
        <div class="w-[391px] h-2 xl:w-[391px] self-end"
          style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
        </div>
      </div>

      <div v-for="section in sections" :key="section.name" class="flex items-center gap-5 mb-10 cursor-pointer h-[60px] "
        @click="toggleButton(section.name)">
        <div class="flex">
          <component :is="section.icon" class="w-9 h-11" :fontControlled="false" :style="{ color: section.color }" />

        </div>

        <button v-show="!section.showSecondButton"
          class=" btn btn-ghost hover:bg-transparent  text-white font-['Poppins'] text-2xl font-normal">{{
            section.label }}
        </button>
        <button v-show="section.showSecondButton" :style="{ borderColor: section.color }"
          class="btn btn-outline  hover:bg-transparent hover:text-white hover:border-[#C6DA00] text-white font-['Poppins'] text-2xl font-normal">{{
            section.label }}
          <IniciosButton class="w-8 h-8 " :style="{ color: section.color }" :fontControlled="false" />
        </button>
        <div v-show="section.showSecondButton">
          <component :is="section.vector" />
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


import SocialMediaSidebar from '~/components/common/SocialMediaSidebar.vue';
import Inicios from "~/assets/Inicios.svg";
import IniciosVector from "./IniciosVector.vue"
import IniciosButton from "~/assets/IniciosButton.svg";
import Logros from "~/assets/Logros.svg";
import Experiencia from "~/assets/Experiencia.svg";
import Reorganizacion from "~/assets/Reorganizacion.svg";

const sections = reactive([
  { name: 'Inicios', icon: Inicios, color: '#C6DA00', label: 'Los inicios', showSecondButton: false, vector: IniciosVector },
  { name: 'Logros', icon: Logros, color: '#20ACA4', label: 'Primeros Logros', showSecondButton: false },
  { name: 'Experiencia', icon: Experiencia, color: '#A7FF2F', label: 'Experiencia', showSecondButton: false },
  { name: 'Reorganizacion', icon: Reorganizacion, color: '#4680AE', label: 'Reorganizacion', showSecondButton: false },

])

const toggleButton = (sectionName: string) => {
  console.log("🚀 ~ file: Section5.vue:101 ~ toggleButton ~ sectionName:", sectionName)
  const section = sections.find(s => s.name === sectionName)
  console.log("🚀 ~ file: Section5.vue:103 ~ toggleButton ~ section:", section?.showSecondButton)
  if (section) {
    section.showSecondButton = !section.showSecondButton;
  }
};

</script>

<style></style>