<template>
   <div class="flex w-full flex-col items-center border-t bg-contact bg-gradient-to-b from-trasparent bg-cover bg-center to-app-blightgreen/60 ">
    <!-- <ImageComponent src="/SECCIONCONTACT.jpeg" class="border-t contact inset-0 h-full w-full object-cover" /> -->
    <ContactForm />
    <section class="mt-20">
      <h3 class="text-2xl text-white font-semibold">Nuestras Ubicaciones</h3>
    </section>
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