<template>
  <section class="relative w-full  md:flex md:min-h-screen">
    <div class="w-full h-[320px] sm:h-screen">
      <ImageComponent height="100%" src="/SECCION7.png" alt="Desktop Image"
        class="w-full h-full object-fill hidden sm:block min-h-screen" />
      <ImageComponent src="/Seccion7Mobile.png" alt="Mobile Image"
        class="w-full h-full object-cover block sm:hidden opacity-70" />
    </div>
    <div
      class="absolute left-10 bottom-[15%] hidden md:flex w-[562px] max-w-full flex-col items-stretch ml-14 mt-24 mb-3 max-md:mt-10">
      <p class=" h-[86.07px] text-white text-[54.68px] font-semibold font-['Poppins']">
        Nuestro Equipo
      </p>

    </div>

    <div
      class="flex flex-col mb-7 right-0 absolute top-10 md:top-44 w-[393px] md:w-[900px] h-[135px] md:h-[650px] justify-between items-center bg-[#00000099] md:bg-transparent">
      <div class=" hidden md:block w-full h-2 self-end"
        style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
      <p
        class=" mr-6 w-[363px] md:w-[640px] text-white text-xs md:text-lg xl:text-2xl text-center  font-semibold font-['Poppins'] ">
        Somos un grupo de profesionales multidisciplinarios con experiencia en los sectores de I+D, Academia,
        Gubernamental,Servicios y E&P.
        La diversidad y el talento joven son factores clave que se valoran y promueven dentro de nuestra organización,
        ¡siempre asesorados por nuestro personal senior!
        Los miembros de nuestro equipo han publicado en importantes asociaciones académicas, industriales y profesionales
        como AAPG, SPWLA, ACS, entre otras.
      </p>
      <div class="hidden md:block w-full  h-2  self-end"
        style=" background: linear-gradient(90deg, #CEDF00 0%, #92BA00 100%)">
      </div>
      <p
        class="hidden md:block mr-6 w-[640px] text-white text-lg xl:text-2xl text-center  font-semibold font-['Poppins'] ">
        Nuestras Alma Maters
      </p>

      <ImageComponent src="/AlmaMater.png" height="100%" class="hidden md:block" />

    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>