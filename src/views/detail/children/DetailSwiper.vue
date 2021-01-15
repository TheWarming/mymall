<template>
  <div>
    <swiper class="detailSwiper" v-if="topImages.length">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="img" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detailSwiper {
  height: 300px;
}
</style>