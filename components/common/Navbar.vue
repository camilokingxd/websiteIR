<template>
  <div class="navbar absolute top-0 p-0 z-50 ">
    <div class="absolute w-full" style="background-color: transparent;">
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="287" viewBox="0 0 1920 287" fill="none">
        <path
          d="M1920.99 178.244C1915.51 187.926 1905.46 195.595 1892.19 196.708L1883.75 197.426L52.25 286.679C25.14 288.945 1.35 268.549 0 240.221L0.42 210.588L0.24 208.241V0.171991L1921.08 0L1920.99 178.244Z"
          fill="url(#paint0_linear_605_2549)" />
        <defs>
          <linearGradient id="paint0_linear_605_2549" x1="966.53" y1="287.865" x2="966.53" y2="1.01171"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.08445e-07" stop-color="#003A31" stop-opacity="0.5" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="navbar-start ml-2">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <i class="fas fa-bars"></i>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Inicio</a></li>
          <li><a>Compañía</a></li>
          <li><a>Servicios</a></li>
          <li><a>Contactos</a></li>
        </ul>
      </div>
      <Icon class="z-20 " />
      <div class="w-[356.44px] h-[112.92px] relative">
        <div class="left-0 top-0 absolute text-white text-[51.21px] font-bold font-['Guess Sans']">INTELLIGENT</div>
        <div class="left-[78.44px] top-[43.92px] absolute text-white text-[51.21px] font-bold font-['Guess Sans']">
          RESERVOIR</div>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex z-20">
      <ul class="flex space-x-4">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="company">Compañía</Link>
        </li>
        <li>
          <Link to="services">Servicios</Link>
        </li>
        <li>
          <Link to="contact">Contactos</Link>
        </li>
      </ul>
    </div>

    <div class="navbar-end z-20">

      <div class="bg-gradient-to-r from-yellow-400 to-lime-500"></div>
      <div class="text-white text-[29.02px] font-bold font-['Poppins']">Acceder</div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue';
import Link from '~/components/common/Link.vue';
import Icon from '~/components/common/Icon.vue';


const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style></style>