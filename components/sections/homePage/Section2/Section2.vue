<template>
  <section class="flex relative min-w-full min-h-screen">

    <ImageComponent src="/SECCION2.png" height="100%" />

    <div class="flex flex-col box-border justify-center items-center absolute right-0 bottom-0 lg:bottom-[10%]">
      <div class="flex flex-col mb-7">
        <p class="w-[939.19px] text-white text-lg xl:text-3xl  text-right font-semibold font-['Poppins'] self-end">
          Durante la perforacion, los datos geologicos y mecanicos se registran como fuente principal de informacion
        </p>
        <div class="w-[900px] h-2 xl:w-[996px] self-end"
          style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
        </div>
      </div>

      <div v-for="item in components" :key="item.name" class="ml-32 flex self-start gap-3 mb-3 items-center h-[89px]">
        <div class="flex gap-6 ">
          <div @click="setActiveComponent(item.name)" class="cursor-pointer">
            <component :is="item.component" class=" w-16" :style="{ color: item.color }" :fontControlled="false" />
          </div>
        </div>
        <div :style="{ width: '2.88px', height: '89.17px', background: item.color }"></div>
        <div class="w-36 h-14 self-center">
          <p class="text-white font-['Poppins'] font-medium text-base top-3 ">
            {{ item.text }}
          </p>
        </div>

        <div v-if="activeComponent === item.name">
          <component :is="item.vector" />
        </div>
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