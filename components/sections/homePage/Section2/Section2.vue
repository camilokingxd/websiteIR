<template>
  <section class="flex relative min-w-full sm:min-h-screen">

    <div class="w-full h-[320px] sm:h-screen">
      <ImageComponent height="100%" src="/SECCION2.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion2Mobile.png" alt="Mobile Image" class="w-full h-full object-cover block sm:hidden" />
    </div>
    <div
      class="ml-5 md:ml-0 md:flex flex-col box-border justify-center items-center absolute  md:right-0 bottom-5 lg:bottom-[10%]">
      <div class="hidden md:flex flex-col mb-7">
        <p class="w-[939.19px] text-white text-lg xl:text-3xl  text-right font-semibold font-['Poppins'] self-end">
          Durante la perforacion, los datos geologicos y mecanicos se registran como fuente principal de informacion
        </p>
        <div class="w-[900px] h-2 xl:w-[996px] self-end"
          style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
        </div>
      </div>

      <div v-for="item in components" :key="item.name"
        class="ml-0 md:ml-32 flex self-start gap-3 mb-3 items-center md:h-[89px]">
        <div class="flex gap-6 ">
          <div @click="setActiveComponent(item.name)" class="cursor-pointer">
            <component :is="item.component" class=" w-8 sm:w-16" :style="{ color: item.color }" :fontControlled="false" />
          </div>
        </div>
        <div class="w-[2.88px] h-6 sm:h-20" :style="{ background: item.color }"></div>
        <div class="">
          <p class="md:text-base top-3 text-white font-['Poppins'] font-medium text-sm w-[100px] md:w-full">
            {{ item.text }}
          </p>
        </div>

        <div class="hidden md:block" v-if="activeComponent === item.name">
          <component :is="item.vector" />
        </div>
      </div>

    </div>
    <div class="flex absolute right-0 mt-72 z-50 flex-col">
      <div style="border-radius:15px 0px 0px 15px; background: linear-gradient(268.18deg, #CEDF00 9.85%, #92BA00 42.83%);"
        class=" sm:hidden w-72 h-16  z-20  flex items-center">
        <p class="text-black text-center text-xs font-medium font-['Poppins']">Durante la perforación los datos geológicos
          y
          mecánicos se registran como fuente principal de información </p>
      </div>
      <div class="flex flex-col items-center self-end relative">
        <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
        <p class="absolute top-1/4 text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Nuestra filosofía</p>
      </div>
      <div
        class="btn btn-circle btn-active bg-white shadow-xl mt-20 w-40 h-5 flex flex-col justify-center items-center absolute right-0 top-32 ">
        <p class="text-xs font-normal text-black font-['Poppins']">Mas Informacion</p>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Huella from "~/assets/Huella.svg";
import Evaluation from "~/assets/Evaluation.svg";
import Information from "~/assets/Information.svg";
import PerforacionLodo from "~/assets/PerforacionLodo.svg";
import Mecanico from "~/assets/Mecanico.svg";
import EvaluationVector from "./EvaluationVector.vue";
import HuellaVector from "./HuellaVector.vue";
import PerforationLodo from "./PerforationLodo.vue";
import InformationVector from "./InformationVector.vue";
import CompartimientoVector from "./CompartimientoVector.vue";

const activeComponent = ref("");

const components = [
  {
    name: "Information",
    component: Information,
    color: "#9893F5",
    text: "Información Geológica",
    vector: InformationVector,

  },
  {
    name: "Evaluation",
    component: Evaluation,
    color: "#20ACA4",
    text: "Evaluación",
    vector: EvaluationVector,

  },
  {
    name: "Huella",
    component: Huella,
    color: "#C6DA00",
    text: "Huella Dactilars",
    vector: HuellaVector,


  },

  {
    name: "PerforacionLodo",
    component: PerforacionLodo,
    color: "#B65122",
    text: "Lodo de Perforación",
    vector: PerforationLodo,


  },
  {
    name: "Mecanico",
    component: Mecanico,
    color: "#6BD762",
    text: "Comportamiento Mecanico",
    vector: CompartimientoVector,


  },
]


const setActiveComponent = (component: string) => {
  activeComponent.value = component;
};
</script>

<style></style>