<template>
  <div>
    <NuxtLink :to="to" class="custom-link">
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<style>
.custom-link {
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
}
</style>