<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">

import home from './home.vue'
import company from './company.vue'
import services from './services.vue'
import contact from './contact.vue'

const route = useRoute();

const currentComponent = computed(() => {
  switch (route.path) {
    case '/':
      return home
    case '/company':
      return company
    case '/services':
      return services
    case '/contact':
      return contact
    default:
      return home
  }
})


</script>
