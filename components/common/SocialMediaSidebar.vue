<template>
  <div
    class="absolute w-8 sm:w-[69px] h-[150px] sm:h-[320px] rounded-tr-[25px] rounded-br-[25px] top-[400px] sm:top-60 z-10 flex flex-col gap-5 justify-center items-center "
    style=" background: linear-gradient(0deg, #CEDF00 0%, #92BA00 100%)">

    <svg @click="openLink('your_first_link')" class="cursor-pointer" :width="calculateSvgSize(34)"
      :height="calculateSvgSize(15)" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7126 14.215L31.9989 0.240234H29.0878L18.4148 12.3718L9.89646 0.240234H0.0693359L12.9536 18.5869L0.0693359 33.2402H2.98041L14.2445 20.4259L23.2422 33.2402H33.0693L19.7126 14.215ZM15.7241 18.7479L14.4167 16.9199L4.03022 2.38765H8.50223L16.8869 14.12L18.1888 15.948L29.0864 31.1974H24.6144L15.7241 18.7479Z"
        fill="white" />
    </svg>
    <svg @click="openLink('your_second_link')" class="cursor-pointer" :width="calculateSvgSize(17)"
      :height="calculateSvgSize(15)" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9393 32.4903V17.7802H15.8793L16.6193 12.0502H10.9393V8.39026C10.9393 6.73026 11.3993 5.60025 13.7793 5.60025H16.8193V0.470245C16.2893 0.400245 14.4893 0.240234 12.3993 0.240234C8.01934 0.240234 5.02934 2.91025 5.02934 7.82025V12.0502H0.0693359V17.7802H5.01934V32.4903H10.9393Z"
        fill="white" />
    </svg>
    <svg @click="openLink('your_third_link')" class="cursor-pointer" :width="calculateSvgSize(32)"
      :height="calculateSvgSize(15)" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.0893 30.6302H9.88934C4.46934 30.6302 0.0693359 26.2202 0.0693359 20.8102V10.0602C0.0693359 4.64024 4.47934 0.240234 9.88934 0.240234H22.0893C27.4993 0.240234 31.9093 4.65024 31.9093 10.0602V20.8102C31.9093 26.2302 27.5093 30.6302 22.0893 30.6302ZM9.88934 2.42023C5.67934 2.42023 2.24934 5.85024 2.24934 10.0602V20.8102C2.24934 25.0202 5.67934 28.4503 9.88934 28.4503H22.0893C26.2993 28.4503 29.7293 25.0202 29.7293 20.8102V10.0602C29.7293 5.85024 26.2993 2.42023 22.0893 2.42023H9.88934Z"
        fill="white" />
      <path
        d="M15.989 24.1802C11.169 24.1802 7.24902 20.2602 7.24902 15.4402C7.24902 10.6202 11.169 6.7002 15.989 6.7002C20.809 6.7002 24.729 10.6202 24.729 15.4402C24.729 20.2602 20.809 24.1802 15.989 24.1802ZM15.989 8.87018C12.369 8.87018 9.42902 11.8102 9.42902 15.4302C9.42902 19.0502 12.369 21.9902 15.989 21.9902C19.609 21.9902 22.549 19.0502 22.549 15.4302C22.549 11.8202 19.609 8.87018 15.989 8.87018Z"
        fill="white" />
      <path
        d="M26.4091 6.96039C26.4091 7.96039 25.5991 8.77045 24.5991 8.77045C23.5991 8.77045 22.7891 7.96039 22.7891 6.96039C22.7891 5.96039 23.5991 5.15039 24.5991 5.15039C25.5991 5.15039 26.4091 5.96039 26.4091 6.96039Z"
        fill="white" />
    </svg>
    <svg @click="openLink('your_fourth_link')" class="cursor-pointer" :width="calculateSvgSize(25)"
      :height="calculateSvgSize(15)" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.469336 8.22021H5.46934V24.2802H0.469336V8.22021ZM2.96934 0.240234C4.56934 0.240234 5.85934 1.54019 5.85934 3.13019C5.85934 4.73019 4.55934 6.03021 2.96934 6.03021C1.36934 6.03021 0.0693359 4.73019 0.0693359 3.13019C0.0693359 1.54019 1.36934 0.240234 2.96934 0.240234Z"
        fill="white" />
      <path
        d="M8.59961 8.22009H13.3896V10.4201H13.4596C14.1296 9.1601 15.7596 7.83008 18.1896 7.83008C23.2496 7.83008 24.1796 11.1501 24.1796 15.4801V24.2901H19.1896V16.4801C19.1896 14.6201 19.1496 12.2201 16.5996 12.2201C13.9996 12.2201 13.5996 14.2501 13.5996 16.3401V24.2901H8.60961V8.22009H8.59961Z"
        fill="white" />
    </svg>

  </div>
</template>

<script lang="ts" setup>
const openLink = (link: string) => {
  window.open(link, '_blank');
};

const calculateSvgSize = (originalSize: number) => {
  // Adjust this multiplier as needed based on your design
  const multiplier = 0.2;
  return `${originalSize * multiplier}vw`;
};
</script>

<style></style>