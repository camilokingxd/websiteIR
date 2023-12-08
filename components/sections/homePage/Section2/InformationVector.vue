<template>
  <div class="relative top-[167px]  flex flex-col">
    <div class="w-40 h-1 flex-shrink-0 bg-[#9893F5] self-center relative top-10"></div>
    <div class="absolute self-center top-20">
      <p class="w-[400px]  text-[#161616] z-10 text-center">
        Las primeras palabras: ¡Rocas y fluidos! Las rocas (cortes) y los fluidos del subsuelo salen a la superficie
        mediante la circulación del lodo durante la perforación.
      </p>
      <p class="w-[400px]  text-[#161616] z-10 text-center">
        Estos son la fuente fundamental y directa de información proveniente de las formaciones geológicas del subsuelo.
        ¡¡Si no se adquieren y/o registran correctamente, se pierden para siempre!!
      </p>
    </div>

    <div class="flex absolute w-[444px] h-[158px] self-center right-4 top-72">
      <ImageComponent src="/Information1.png" width="148" height="158" />
      <ImageComponent src="/Information2.png" width="148" height="158" />
      <ImageComponent src="/Information3.png" width="148" height="158" />
    </div>

    <InformacionGeologica class="w-[500px] h-[500px]  text-[#E6E6E6]" :fontControlled="false" />
    <div class="w-40 h-1 flex-shrink-0 bg-[#9893F5] self-center bottom-8 relative"></div>
  </div>
</template>

<script lang="ts" setup>
import InformacionGeologica from "~/assets/InformacionGeologica.svg";

</script>

<style></style>