<template>
  <section class="min-h-screen">
    <ImageComponent src="/SECCION8.png" class="min-h-screen" />
    <div class="flex flex-col right-0 absolute top-40 w-[900px] h-[650px]  items-end">
      <p class="mr-3 w-[640px] text-white text-lg xl:text-2xl text-right font-semibold font-['Poppins'] ">
        Somos un grupo de profesionales multidisciplinarios con experiencia en los sectores de I+D, Academia,
        Gubernamental,Servicios y E&P.
      </p>
      <div class="w-[800px] h-2  self-end " style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
      <div class="flex w-[800px] h-2/3 justify-evenly mt-10">
        <div class="flex flex-col gap-5 ">
          <div v-for="item in firstColumn" :key="item.name">
            <div class="flex gap-4">
              <component :is="item.component" class=" w-10" :style="{ color: item.color }" :fontControlled="false" />
              <div :style="{ width: '2.88px', height: '70.17px', background: item.color }"></div>
              <div class="w-36 h-14 self-center">
                <p class="text-white font-['Poppins'] font-medium text-base ">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-5 ">
          <div v-for="item in secondColumn" :key="item.name">
            <div class="flex gap-4">
              <component :is="item.component" class=" w-10" :style="{ color: item.color }" :fontControlled="false" />
              <div :style="{ width: '2.88px', height: '70.17px', background: item.color }"></div>
              <div class="w-36 h-14 self-center">
                <p class="text-white font-['Poppins'] font-medium text-base  ">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import AnalisisGrano from "~/assets/AnalisisGrano.svg";
import AnalisisServices from "~/assets/AnalisisServices.svg";
import BioestratigrafiaServices from "~/assets/BioestratigrafiaServices.svg";
import Bioestratigrafia2Services from "~/assets/Bioestratigrafia2Services.svg";
import DifraccionServices from "~/assets/DifraccionServices.svg";
import Fluorescencia from "~/assets/Fluorescencia.svg";
import GeocienciaServices from "~/assets/GeocienciaServices.svg";
import Geonavegacion from "~/assets/Geonavegacion.svg";
import Geoquimica from "~/assets/Geoquimica.svg";
import GeoquimicaServices from "~/assets/GeoquimicaServices.svg";
import PerforacionServices from "~/assets/PerforacionServices.svg";
import PetrografiaServices from "~/assets/PetrografiaServices.svg";

const activeComponent = ref("");


const components = [
  {
    name: "perforación",
    component: PerforacionServices,
    color: "#9A93F7",
    text: "Perforación inteligente",
  },

  {
    name: "geoquimica",
    component: Geoquimica,
    color: "#00D758",
    text: "Geoquímica durante la perforación®",
  },

  {
    name: "bioestratigrafia",
    component: BioestratigrafiaServices,
    color: "#00ADA4",
    text: "Bioestratigrafía durante la perforación",
  },
  {
    name: "geociencia",
    component: GeocienciaServices,
    color: "#B3C619",
    text: "Geociencia durante la perforación®",
  },

  {
    name: "geonavegacion",
    component: Geonavegacion,
    color: "#CF5018",
    text: "Geonavegación",
  },
  {
    name: "grano",
    component: AnalisisGrano,
    color: "#8D6A50",
    text: "Analisis del tamano de grano",
  },
  {
    name: "fluorescencia",
    component: Fluorescencia,
    color: "#57B900",
    text: "Fluoresente de rayos X",
  },
  {
    name: "difraccion",
    component: DifraccionServices,
    color: "#EEEEEE",
    text: "Difracción de rayos X",
  },
  {
    name: "petrografia",
    component: PetrografiaServices,
    color: "#F3EA70",
    text: "Petrografía",
  },
  {
    name: "bioestratigrafia",
    component: Bioestratigrafia2Services,
    color: "#B1D34C",
    text: "Bioestratigrafia ",
  },
  {
    name: "geoquimica",
    component: GeoquimicaServices,
    color: "#00D758",
    text: "Geoquímica clasica",
  },
  {
    name: "analisis",
    component: AnalisisServices,
    color: "#A383FC",
    text: "Analisis de nucleo especial",
  },

]
const firstColumn = components.slice(0, 6);
const secondColumn = components.slice(6, 12);

</script>

<style></style>