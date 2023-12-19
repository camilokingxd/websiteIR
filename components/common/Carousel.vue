<template>
  <div class="carousel w-full relative h-screen" ref="carousel">
    <div v-for="(item, index) in carouselItems" :key="item.id" :id="item.id"
      :class="{ 'carousel-item w-full carouselItem': true, 'active': index === activeIndex }">
      <ImageComponent :src="item.src" :alt="item.alt" class="w-full object-fill" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ImageComponent from "~/components/common/ImageComponent.vue";
const activeIndex = ref(0);

const carouselItems = ref([
  {
    src: "/firstBanner.jpeg", alt: "firstBanner", id: "item1"
  },
  {
    src: "/SECCION8.png", alt: "SECCION8", id: "item2"
  },
  {
    src: "/Banner3.png", alt: "Banner3", id: "item3"
  },
  {
    src: "/Banner4.png", alt: "Banner4", id: "item4"
  }
])

function updateActiveIndex(newIndex: any) {
  activeIndex.value = newIndex;
}

onMounted(() => {
  const updateCarousel = () => {
    activeIndex.value = (activeIndex.value + 1) % carouselItems.value.length;
  };

  const interval = setInterval(updateCarousel, 3000);

  this?.$on('select-carousel-item', updateActiveIndex);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style>
.carouselItem {
  width: 100%;
  height: 100%;
  display: none;
}

.carouselItem.active {
  display: block;
}

.carouselItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
</style>