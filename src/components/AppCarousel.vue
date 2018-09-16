<template>
  <carousel
    class="carousel"
    :perPageCustom="[[0, 1], [768, 3]]"
  >
    <slide
      class="slide"
      v-for="i in items"
      :key="i.id"
    >
      <a
        class="slide__img-link"
        :href="i.src"
        target="_blank"
      >
        <img
          class="slide__img"
          :src="i.src"
          :alt="i.title"
        />
      </a>
    </slide>
  </carousel>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';


export default {
  name: 'AppCarousel',

  components: {
    Carousel,
    Slide,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.slide__img-link {
  display: block;
  width: 100%;
}

.slide__img {
  display: block;
  width: 100%;
}
</style>
