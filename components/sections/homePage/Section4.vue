<template>
  <section class="flex relative min-w-full md:min-h-screen">
    <div class="w-full h-[320px] sm:h-screen">
      <ImageComponent height="100%" src="/SECCION4.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion4Mobile.png" alt="Mobile Image"
        class="w-full h-full object-cover block sm:hidden opacity-70" />
    </div>

    <div class="md:hidden w-[165px] absolute flex flex-col items-center bottom-28 ">
      <div v-for="item in development" :key="item.alt">
        <ImageComponent :src="item.source" :alt="item.alt" height="100%" :width="item.width" />
      </div>
    </div>


    <div class=" hidden md:block absolute w-[800px] right-1 bottom-[20%]">
      <div class="flex flex-col mb-6">
        <p class="text-white text-right text-lg font-['Poppins']">
          Ofrecemos una solución unica a nuestros clientes mediante la recopilacion e integracion de datos producidos en
          pozo
          de
          una manera diferente.
        </p>
        <div class="self-end"
          style="width: 500px; height: 7.76px; background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)"></div>
      </div>

      <div class="carousel w-[800px] h-[550px] ">
        <div id="slide1" class="carousel-item relative w-full flex-col">
          <div class="bg-white w-full relative h-32 flex-shrink-0">
            <div class="absolute flex justify-normal transform left-[40%] bottom-[40%]">
              <Radar class="w-52" :fontControlled="false" />
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-16">
            <a href="#slide4" class="">
              <Back />
            </a>
            <a href="#slide2" class="">
              <Right />
            </a>
          </div>

          <div class="bg-white w-[800px] h-72 mt-12 rounded-tl-[120px] flex flex-col">
            <div class="self-center mt-3">
              <Radar class="w-52" :fontControlled="false" />
            </div>

            <p class="text-center text-black text-xl p-10 font-['Poppins']">
              iD RADAR© es un programa de analítica automática de toma de datos de
              puerto WITS de la consola de control de equipo mecanizado de
              perforación y procesamiento en tiempo real (WITS) de algoritmo que
              compone la energía hidro-mecánica específica (HMSE) aplicada y de
              los asociados a la integridad de la operación para presentar tablero
              de control (dashboard) en la red de datos del pozo (intranet) con
              respaldo local y remoto de base de datos (WITSML)
            </p>

          </div>
        </div>

        <div id="slide2" class="carousel-item relative w-full flex-col">
          <div class="bg-white w-full relative h-32 flex-shrink-0">
            <div class="absolute flex justify-normal transform left-[40%] bottom-[40%]">
              <Sarah class="w-60" :fontControlled="false" />
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-16">
            <a href="#slide1" class="">
              <Back />
            </a>
            <a href="#slide3" class="">
              <Right />
            </a>
          </div>

          <div class="bg-white w-[800px] rounded-tl-[120px] h-52 mt-12 flex flex-col">
            <div class=" flex self-center mt-3">
              <Sarah class="w-52" :fontControlled="false" />
            </div>
            <p class="text-center text-black text-xl p-16 font-['Poppins']">
              Sistema Automatizado para un Rápido Análisis de Hidrocarburos.
            </p>
          </div>
        </div>

        <div id="slide3" class="carousel-item relative w-full flex-col">
          <div class="bg-white w-full relative h-32 flex-shrink-0 flex flex-col justify-center">
            <RockD class="w-80 self-center" :fontControlled="false" />
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-16">
            <a href="#slide2" class="">
              <Back />
            </a>
            <a href="#slide4" class="">
              <Right />
            </a>
          </div>
          <div class="bg-white w-[800px] rounded-tl-[120px] h-52 mt-12 flex flex-col">
            <div class=" flex self-center mt-3">
              <RockD class="w-52 text-black " :fontControlled="false" />
            </div>


            <p class="text-center text-black text-xl p-16 font-['Poppins']">
              Integración de datos mecánicos, geológicos y petrofísicos con énfasis en nuestra Metodología Geochemistry
              While Drilling®
            </p>
          </div>
        </div>

        <div id="slide4" class="carousel-item relative w-full flex-col">
          <div class="bg-white w-full relative h-32 flex-shrink-0 flex flex-col justify-center">
            <Tornado class="w-72 self-center" :fontControlled="false" />
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-16">
            <a href="#slide3" class="">
              <Back />
            </a>
            <a href="#slide1" class="">
              <Right />
            </a>
          </div>
          <div class="bg-white w-[800px] rounded-tl-[120px] h-52 mt-12 flex">
            <div class=" flex self-center mt-3">
              <Tornado class="w-52 text-black " :fontControlled="false" />
            </div>
            <div class="flex flex-col">
              <p class="text-center text-neutral-600 text-[50px] mt-5 mb-5 font-bold font-['Poppins']">
                TORNADO
              </p>
              <p class="text-center text-black text-xl font-['Poppins'] ">
                Integración de datos mecánicos, geológicos y petrofísicos con énfasis en nuestra Metodología Geochemistry
                While Drilling®
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>



  </section>
</template>

<script lang="ts" setup>
import Back from '~/assets/Back.svg'
import Right from '~/assets/Right.svg'
import Radar from '~/assets/Radar.svg'
import Sarah from '~/assets/Sarah.svg'
import Tornado from '~/assets/Tornado.svg'
import RockD from '~/assets/RockD.svg'


const development = [
  {
    alt: "strata-d",
    source: "/STRATA ID LOGO BLANCO.png",
    width: 165
  }
  , {
    alt: "d-link",
    source: "/ID-LINK-LOGO-BLANCO-FINAL-COPYRIGHT.png",
    width: 117,
  }, {
    alt: "d-daq",
    source: "/ID-DAQ-LOGO-BLANCO.png",
    width: 114
  }
]
</script>

<style></style>
