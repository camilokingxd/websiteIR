<template>
  <div class="relative flex flex-col">
    <div class="w-40 h-1 flex-shrink-0 bg-[#B8C636] self-center relative top-10"></div>
    <p class="w-[400px] h-[20px] text-[#161616] z-10 self-center relative top-12 text-center">
      Cada pozo tiene su huella dactilar única. La geología es muy heterogénea debido a las variaciones verticales y
      horizontales.
    </p>
    <EvaluationVector class="w-[500px] h-[144px] text-[#E6E6E6]" :fontControlled="false" />
    <div class="w-40 h-1 flex-shrink-0 bg-[#B8C636] self-center bottom-4 relative"></div>
  </div>
</template>

<script lang="ts" setup>
import EvaluationVector from "~/assets/EvaluationVector.svg";

</script>

