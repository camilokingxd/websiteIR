<template>
  <div class="relative bottom-[190px] flex flex-col">
    <div
      class="w-40 h-1 flex-shrink-0 bg-[#6BD762] self-center relative top-5"
    ></div>
    <div class="absolute self-center top-10">
      <p class="w-[400px] text-[#161616] z-10 text-center font-['Poppins']">
        Tal como cuando se conduce un automóvil: ¡la energía lo es todo!
      </p>
      <p class="w-[400px] text-[#161616] z-10 text-center font-['Poppins']">
        Una plataforma de perforación es un equipo sofisticado donde la
        instrumentación y los datos recopilados son fundamentales para
        comprender la interacción entre la formación rocosa y la broca.
      </p>
      <div class="grid grid-cols-2 mt-4 gap-4">
        <div class="flex gap-4">
          <ComportamientoVector1
            class="w-[90px] h-[90px] text-[#000000]"
            :fontControlled="false"
          />
          <p class="text-black font-['Poppins'] text-sm w-10">
            Ingenieria de perforacion
          </p>
        </div>
        <div class="flex gap-4">
          <ComportamientoVector2
            class="w-[90px] h-[90px] text-[#000000]"
            :fontControlled="false"
          />
          <p class="text-black font-['Poppins'] text-sm w-20">
            Señales Electricas
          </p>
        </div>
        <div class="flex gap-4">
          <ComportamientoVector3
            class="w-[90px] h-[90px] text-[#000000]"
            :fontControlled="false"
          />
          <p class="text-black font-['Poppins'] text-sm w-9">
            Broca y Configuracion de cadena
          </p>
        </div>
        <div class="flex gap-4">
          <ComportamientoVector4
            class="w-[90px] h-[90px] text-[#000000]"
            :fontControlled="false"
          />
          <p class="text-black font-['Poppins'] text-sm w-9">
            Parametros Mecanicos
          </p>
        </div>
      </div>
    </div>

    <ComporTamientoVector
      class="w-[588px] h-[444px] text-[#E6E6E6]"
      :fontControlled="false"
    >
    </ComporTamientoVector>
    <div
      class="w-40 h-1 flex-shrink-0 bg-[#6BD762] self-center relative bottom-4"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import ComporTamientoVector from '~/assets/ComporTamientoVector.svg'
import ComportamientoVector1 from '~/assets/ComportamientoVector1.svg'
import ComportamientoVector2 from '~/assets/ComportamientoVector2.svg'
import ComportamientoVector3 from '~/assets/ComportamientoVector3.svg'
import ComportamientoVector4 from '~/assets/ComportamientoVector4.svg'
</script>
