<template>
  <div id="home">
    <home-nav></home-nav>
    <my-scroll
      ref="myScroll"
      :probeType="3"
      :isPullUpLoad="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :bannerList="banner"></home-swiper>
      <home-recommend :recommendList="recommend" />
      <home-feature></home-feature>
      <nav-control :list="NCList" @navConClick="changNavCon"></nav-control>
      <home-goods :list="goodsList[currentType].list"></home-goods>
    </my-scroll>
    <back-top @click.native="toTop" v-show="toTopIsShow"></back-top>
  </div>
</template>

<script>
import HomeNav from "./children/HomeNav";
import { getHomeMultidata, getHomeData } from "network/home";
import HomeSwiper from "./children/HomeSwiper";
import HomeRecommend from "./children/HomeRecommend";
import HomeFeature from "./children/HomeFeature";
import HomeGoods from "./children/HomeGoods";

import NavControl from "components/content/navControl/NavControl";
import MyScroll from "components/common/myScroll/MyScroll";
import BackTop from "components/common/backTop/BackTop";

export default {
  name: "home",
  created() {
    /**网络请求 */
    this.getHomeMultidataV();
    this.getHomeDataV("pop");
    this.getHomeDataV("sell");
    this.getHomeDataV("new");
  },
  components: {
    HomeNav,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeGoods,
    NavControl,
    MyScroll,
    BackTop,
  },
  data() {
    return {
      currentType: "pop",
      banner: [],
      recommend: [],
      toTopIsShow: false,
      NCList: ["流行", "热销", "新款"],
      goodsList: {
        pop: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
      },
    };
  },
  methods: {
    /**网络请求 */
    getHomeMultidataV() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeDataV(type, callback) {
      const page = this.goodsList[type].page + 1;
      getHomeData(type, page).then((res) => {
        /* console.log(res); */
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page++;
        callback && callback();
      });
    },
    /**事件响应 */
    changNavCon(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
      this.$refs.myScroll.refresh;
    },
    toTop() {
      this.$refs.myScroll.toTop();
    },
    scroll(pos) {
      this.toTopIsShow = -pos.y > 1000;
    },
    pullingUp() {
      this.getHomeDataV(this.currentType, this.refresh);
    },
    refresh() {
      this.$refs.myScroll.refresh();
      this.$refs.myScroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
</style>