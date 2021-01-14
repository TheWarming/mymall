<template>
  <div class="homeSwiper">
    <swiper v-if="bannerList.length">
      <swiper-item v-for="item in bannerList" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" :alt="item.link" @load="swiperImgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    bannerList: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    swiperImgLoad() {
      if (!this.isLoaded) {
        this.$emit("swiperImgLoad");
        this.isLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
</style>