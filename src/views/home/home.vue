<template>
  <div id="home">
    <home-nav></home-nav>
    <nav-control
      :list="NCList"
      @navConClick="changNavCon"
      v-show="isShowNavCon1"
      class="nCFixed"
      ref="navCon2"
    ></nav-control>
    <my-scroll
      ref="myScroll"
      :probeType="3"
      :isPullUpLoad="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
      class="wrapper"
    >
      <home-swiper
        :bannerList="banner"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommendList="recommend" />
      <home-feature></home-feature>
      <nav-control
        :list="NCList"
        @navConClick="changNavCon"
        ref="navCon1"
      ></nav-control>
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

//引入混入
import { imgLoadListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "home",
  mixins: [imgLoadListenerMixin, backTopMixin],
  created() {
    /**网络请求 */
    this.getHomeMultidataV();
    this.getHomeDataV("pop");
    this.getHomeDataV("sell");
    this.getHomeDataV("new");
  },
  deactivated() {
    this.$bus.$off("goodsImgLoad", this.imgLoadListener);
  },
  activated() {
    this.$refs.myScroll.refresh();
    this.$refs.myScroll.toTop(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs.myScroll.getScrollY();
  },
  components: {
    HomeNav,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeGoods,
    NavControl,
    MyScroll,
  },
  data() {
    return {
      currentType: "pop",
      banner: [],
      recommend: [],
      isShowNavCon1: false,
      NCList: ["流行", "热销", "新款"],
      scrollY: 0,
      navConY: 0,
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
        this.$refs.myScroll.refresh();
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

      //同步nc1与nc2的显示
      this.$refs.navCon1.currentIndex = index;
      this.$refs.navCon2.currentIndex = index;

      this.$refs.myScroll.refresh();

      let time = 200;
      if (this.$refs.myScroll.getScrollY() < -this.navConY) {
        time = 0;
      }
      this.$refs.myScroll.toTop(0, -this.navConY, time);
    },
    scroll(pos) {
      /* console.log(pos.y, this.navConY, this.isShowNavCon1); */
      this.isShowNavCon1 = -pos.y > this.navConY;
      this.toTopIsShow = -pos.y > 1000;
    },
    pullingUp() {
      this.getHomeDataV(this.currentType, this.$refs.myScroll.finishPullUp());
    },

    //轮播图加载的响应 获得navCon的offsetTop
    swiperImgLoad() {
      /* console.log(this.$refs.navCon1.$el.offsetTop); */
      this.navConY = this.$refs.navCon1.$el.offsetTop - 44;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nCFixed {
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
  z-index: 9;
}
.wrapper {
  height: calc(100% - 93px);
}
</style>