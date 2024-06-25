<template>
  <NuxtImg
    sizes="320 sm:640 md:768 lg:1024 xl:1280 xxl:1536"
    loading="lazy"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="customClass"
    format="webp"
  />
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: 1980,
  },
  height: {
    type: [String, Number],
    default: 1080,
  },
  customClass: {
    type: String,
    default: '',
  },
})
</script>
