<template>
  <div
    class="flex md:hidden absolute bottom-5 justify-between p-5 w-[420px] h-[350px] items-end"
  >
    <div class="flex flex-col gap-2 justify-end">
      <div
        v-for="item in firstColumn"
        :key="item.name"
        class="flex gap-4 items-center"
      >
        <component
          :is="item.component"
          class="w-6"
          :style="{ color: item.color }"
          :fontControlled="false"
        />
        <div
          :style="{ width: '2.88px', height: '37px', background: item.color }"
        ></div>
        <div class="w-36 h-14 flex items-center">
          <p class="text-white font-['Poppins'] font-medium text-xs">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div
        v-for="item in secondColumn"
        :key="item.name"
        class="flex gap-2 items-center"
      >
        <component
          :is="item.component"
          class="w-6"
          :style="{ color: item.color }"
          :fontControlled="false"
        />
        <div
          :style="{ width: '2.88px', height: '37px', background: item.color }"
        ></div>
        <div class="w-36 h-14 self-center flex items-center">
          <p class="text-white font-['Poppins'] font-medium text-xs">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AnalisisGrano from '~/assets/AnalisisGrano.svg'
import AnalisisServices from '~/assets/AnalisisServices.svg'
import BioestratigrafiaServices from '~/assets/BioestratigrafiaServices.svg'
import Bioestratigrafia2Services from '~/assets/Bioestratigrafia2Services.svg'
import DifraccionServices from '~/assets/DifraccionServices.svg'
import Fluorescencia from '~/assets/Fluorescencia.svg'
import GeocienciaServices from '~/assets/GeocienciaServices.svg'
import Geonavegacion from '~/assets/Geonavegacion.svg'
import Geoquimica from '~/assets/Geoquimica.svg'
import GeoquimicaServices from '~/assets/GeoquimicaServices.svg'
import PerforacionServices from '~/assets/PerforacionServices.svg'
import PetrografiaServices from '~/assets/PetrografiaServices.svg'

const components = [
  {
    name: 'perforación',
    component: PerforacionServices,
    color: '#9A93F7',
    text: 'Perforación inteligente',
  },

  {
    name: 'geoquimica',
    component: Geoquimica,
    color: '#00D758',
    text: 'Geoquímica durante la perforación®',
  },

  {
    name: 'bioestratigrafia',
    component: BioestratigrafiaServices,
    color: '#00ADA4',
    text: 'Bioestratigrafía durante la perforación',
  },
  {
    name: 'geociencia',
    component: GeocienciaServices,
    color: '#B3C619',
    text: 'Geociencia durante la perforación®',
  },

  {
    name: 'geonavegacion',
    component: Geonavegacion,
    color: '#CF5018',
    text: 'Geonavegación',
  },
  {
    name: 'grano',
    component: AnalisisGrano,
    color: '#8D6A50',
    text: 'Analisis del tamano de grano',
  },
  {
    name: 'fluorescencia',
    component: Fluorescencia,
    color: '#57B900',
    text: 'Fluoresente de rayos X',
  },
  {
    name: 'difraccion',
    component: DifraccionServices,
    color: '#EEEEEE',
    text: 'Difracción de rayos X',
  },
  {
    name: 'petrografia',
    component: PetrografiaServices,
    color: '#F3EA70',
    text: 'Petrografía',
  },
  {
    name: 'bioestratigrafia',
    component: Bioestratigrafia2Services,
    color: '#B1D34C',
    text: 'Bioestratigrafia ',
  },
  {
    name: 'geoquimica',
    component: GeoquimicaServices,
    color: '#00D758',
    text: 'Geoquímica clasica',
  },
  {
    name: 'analisis',
    component: AnalisisServices,
    color: '#A383FC',
    text: 'Analisis de nucleo especial',
  },
]
const firstColumn = components.slice(0, 5)
const secondColumn = components.slice(5, 12)
</script>
