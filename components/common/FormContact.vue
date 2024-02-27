<template>
    <div class="contact-form sm:w-12 p-10 rounded-lg  border border-rose-500">
        <form class="mb-4">
            <h1 class="text-center text-black text-2xl font-bold mb-6">Contáctanos</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="name">
                    Nombre
                </label>
                <input 
                    class="bg-input w-full py-2 px-3 text-white-700 focus:outline-none" 
                    id="name" type="text" 
                    placeholder="Nombre"
                >
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="email">
                    Correo
                </label>
                <input 
                    class="bg-input w-full py-2 px-3 text-white-700 focus:outline-none" 
                    id="email" 
                    type="email" 
                    placeholder="Correo" 
                >
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="message">
                    Mensaje
                </label>
                <textarea 
                    class="bg-input h-[10rem] w-full py-2 px-3 text-white-700 focus:outline-none" 
                    id="message" 
                    placeholder="Mensaje"></textarea>
            </div>
        </form>
    </div>
</template>

<script lang="ts" >
    export default {
        name: 'FormContactComponent',
    }
</script>
<style>
    .contact-form {
        background: #838383
    }
    .bg-input {
        background: #6A7400;
    }
</style>