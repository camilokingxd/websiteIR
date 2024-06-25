<template>
  <div class="relative flex flex-col">
    <div class="w-40 h-1 flex-shrink-0 bg-[#20ACA4] self-center relative top-10"></div>
    <p class="w-[400px] h-[20px] text-[#161616] z-10 self-center relative top-12 text-center">
      La evaluación de la formación y las mejores prácticas de perforación se pueden lograr mediante la comprensión del
      comportamiento geológico y mecánico del pozo
    </p>
    <EvaluationVector class="w-[500px] h-[144px] text-[#E6E6E6]" :fontControlled="false" />
    <div class="w-40 h-1 flex-shrink-0 bg-[#20ACA4] self-center bottom-4 relative"></div>
  </div>
</template>

<script lang="ts" setup>
import EvaluationVector from "~/assets/EvaluationVector.svg";

</script>

