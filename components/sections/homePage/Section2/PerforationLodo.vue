<template>
  <div class="relative flex flex-col">
    <div class="w-40 h-1 flex-shrink-0 bg-[#B65122] self-center relative top-10"></div>
    <p class="w-[400px] h-[20px] text-[#161616] z-10 self-center relative top-12 text-center">
      El lodo de perforación es la sangre del pozo(sistema), ya que algunas de sus funciones son la limpieza, la
      lubricación y el mantenimiento de la presión para prevenir explosiones
    </p>
    <EvaluationVector class="w-[500px] h-[144px] text-[#E6E6E6]" :fontControlled="false" />
    <div class="w-40 h-1 flex-shrink-0 bg-[#B65122] self-center bottom-4 relative"></div>
  </div>
</template>

<script lang="ts" setup>
import EvaluationVector from "~/assets/EvaluationVector.svg";

</script>

<style></style>