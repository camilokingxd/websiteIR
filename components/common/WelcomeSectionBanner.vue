<template>
  <div
    class="flex flex-col w-full h-[328px] md:h-[75%] absolute top-0 justify-center items-start max-md:max-w-full"
  >
    <img
      loading="lazy"
      src="/vectorSectionBanner.png"
      class="absolute h-full w-full object-cover object-center inset-0"
    />
    <div
      class="relative flex w-[273px] md:w-[562px] flex-col items-stretch lg:ml-14 mt-24 lg:mb-3 max-md:mt-10"
    >
      <div
        class="hidden md:block text-yellow-500 text-2xl relative whitespace-nowrap pl-8 max-md:pl-5"
      >
        <span class="text-white">Intelligent</span
        ><span class="reservoir">Reservoir</span>
      </div>
      <div
        class="flex flex-col items-stretch pl-8 max-md:max-w-full max-md:pl-5"
      >
        <p
          class="w-72 h-52 text-white font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold leading-125"
        >
          Bienvenidos a una nueva transformación digital
        </p>
        <div
          class="btn btn-circle btn-active bg-white shadow-xl w-36 md:w-48 font-['Poppins'] flex flex-col justify-center items-center md:mt-3"
        >
          <p>Nuestra Filosofia</p>
        </div>
        <div class="flex justify-start w-full py-4 gap-2">
          <a
            href="#item1"
            class="btn btn-xs btn-circle bg-slate-200"
            @click="selectItem(0)"
          ></a>
          <a
            href="#item2"
            class="btn btn-xs btn-circle bg-slate-200"
            @click="selectItem(1)"
          ></a>
          <a
            href="#item3"
            class="btn btn-xs btn-circle bg-slate-200"
            @click="selectItem(2)"
          ></a>
          <a
            href="#item4"
            class="btn btn-xs btn-circle bg-slate-200"
            @click="selectItem(3)"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['select-carousel-item'])

function selectItem(index: any) {
  emit('select-carousel-item', index)
}
</script>

<style>
.reservoir {
  color: #c6da00;
  font-family: Poppins;
  font-size: 24.974px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
