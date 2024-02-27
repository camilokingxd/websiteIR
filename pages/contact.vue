<template>
   <div class="relative  w-full h-screen">
    <ImageComponent src="/SECCIONCONTACT.jpeg" class="absolute contact inset-0 h-full w-full object-cover" />
    <ContactForm />
  </div>
</template>

<script lang="ts" setup>
    import ContactForm from '~/components/common/ContactComponent.vue'
</script>

<style>
.contact {
    background: linear-gradient(0deg, rgba(0, 58, 49, 0.50) 0%, #000 100%);
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
}
</style>