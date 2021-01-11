<template>
  <div>
    <homenav></homenav>
    <home-swiper :bannerList="banner"></home-swiper>
    <home-recommend :recommendList="recommend" />
  </div>
</template>

<script>
import homenav from "./children/homenav";
import { getHomeMultidata, getHomeData } from "network/home";
import HomeSwiper from "./children/HomeSwiper";
import HomeRecommend from "./children/HomeRecommend.vue";

export default {
  name: "home",
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  components: {
    homenav,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
};
</script>

<style scoped>
</style>