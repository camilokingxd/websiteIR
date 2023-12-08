<template>
  <NuxtImg loading="lazy" :src="src" :alt="alt" :width="width" :height="height" :class="customClass" />
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: 1980
  },
  height: {
    type: [String, Number],
    default: 1080
  },
  customClass: {
    type: String,
    default: ''
  }

})
</script>

<style></style>