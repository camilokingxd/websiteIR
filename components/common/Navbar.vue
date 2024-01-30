<template>
  <div class="navbar w-[430px] h-[60px] bg-gradient-to-t from-teal-950 to-black md:w-full md:h-full">
    <!-- <div class="absolute w-full hidden lg:block" style="background-color: transparent;">
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
    </div> -->
    <div class="navbar-start ml-2">
      <Icon class="z-20 w-[30px] md:w-[130px]" />
      <div class="w-full h-[112.92px] relative hidden lg:block">
        <div
          class="left-0 top-0 absolute text-white text-[51.21px] font-bold font-['Guess Sans'] max-md:text-[35px] max-sm:text-[28px]">
          INTELLIGENT </div>
        <div
          class="left-[78.44px] top-[43.92px] absolute text-white text-[51.21px] font-bold font-['Guess Sans'] max-md:text-[35px] max-sm:text-[28px]">
          RESERVOIR </div>
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

    <div class="navbar-end z-20 lg:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-circle swap swap-rotate ">
          <input type="checkbox" />
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Inicio</a></li>
          <li><a>Compañía</a></li>
          <li><a>Servicios</a></li>
          <li><a>Contactos</a></li>
        </ul>
      </div>
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