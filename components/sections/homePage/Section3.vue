<template>
  <section class="flex relative min-w-full md:min-h-screen">
    <div class="w-full h-[320px] sm:h-screen">
      <ImageComponent height="100%" src="/SECCION3.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion3Mobile.png" alt="Mobile Image" class="w-full h-full object-cover block sm:hidden" />
    </div>
    <div
      class="mt-20 md:mt-0 absolute w-[202px] md:w-[1200px] rounded-3xl  bg-[#00000099] md:bg-transparent p-3 md:p-0 ml-7 md:ml-0 md:right-0 md:bottom-72 flex flex-col items-center">
      <div class="hidden md:block"
        style="width: 900px; height: 3.23px; background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)"></div>
      <div class="  flex flex-col justify-center items-center w-[192px] md:w-[800px] flex-shrink-0">
        <p class="text-white  text-xs md:text-2xl text-center font-semibold font-['Poppins']">¡Entendemos que obtener
          información
          de primera
          para
          la toma de decisiones es un aspecto clave en la perforación de un pozo!
          Poreso en Intelligent Reservoir estamos haciendo la transición a las nuevas tecnologías manteniendo intacto el
          proceso orgánico de interpretación humana.
        </p>
      </div>
      <div class="hidden md:block"
        style="width: 900px; height: 3.23px; background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)"></div>
    </div>
    <div class="md:hidden flex absolute right-0 mt-72 z-50 flex-col">
      <div style="border-radius:15px 0px 0px 15px; background: linear-gradient(268.18deg, #CEDF00 9.85%, #92BA00 42.83%);"
        class=" sm:hidden w-72 h-16  z-20  flex items-center">
        <p class="text-black text-center text-xs font-medium font-['Poppins']">Ofrecemos una solución única a nuestros
          clientes mediante la recopilación e integración de datos producidos en pozo de una manera diferente. </p>
      </div>
      <div class="flex flex-col items-center self-end relative">
        <ImageComponent src="/MaskHome.png" class="w-[160px] " :fontControlled="false" />
        <p class="absolute top-1/4 text-center text-white text-xs font-semibold font-['Poppins'] leading-normal">
          Nuestros desarrollos</p>
      </div>
      <div
        class="btn btn-circle btn-active bg-white shadow-xl mt-20 w-40 h-5 flex flex-col justify-center items-center absolute right-0 top-32 ">
        <p class="text-xs font-normal text-black font-['Poppins']">Mas Informacion</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>