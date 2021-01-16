<template>
  <div id="detail">
    <detail-nav @navClick="navClick" ref="nav"></detail-nav>
    <my-scroll class="wrapper" ref="myScroll" @scroll="scroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-detail-info
        :detailInfo="detailInfo"
        @detailImageLoad="detailImageLoad"
      ></detail-detail-info>
      <detail-params :params="params" ref="params"></detail-params>
      <detail-rate :firstRate="firstRate" ref="rate"></detail-rate>
      <detail-recommend :list="recommend" ref="recommend"></detail-recommend>
    </my-scroll>
    <back-top @click.native="toTop" v-show="toTopIsShow"></back-top>
  </div>
</template>

<script>
import { getDetail, BaseInfo, Params, getRecommend } from "network/detail";

import DetailNav from "./children/DetailNav";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailDetailInfo from "./children/DetailDetailInfo";
import DetailParams from "./children/DetailParams";
import DetailRate from "./children/DetailRate";
import DetailRecommend from "./children/DetailRecommend";

import MyScroll from "components/common/myScroll/MyScroll";

//引入混入
import { imgLoadListenerMixin, backTopMixin } from "common/mixin";

import { debounce } from "common/utils";

export default {
  name: "Detail",
  mixins: [imgLoadListenerMixin, backTopMixin],
  destroyed() {
    this.$bus.$off("goodsImgLoad", this.imgLoadListener);
  },
  created() {
    getDetail(this.iid).then((res) => {
      const data = res.result;
      /* console.log(data); */
      this.topImages = data.itemInfo.topImages;
      this.baseInfo = new BaseInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.params = new Params(data.itemParams.info, data.itemParams.rule);

      if (data.rate.cRate !== 0) {
        this.firstRate = data.rate.list[0];
      }

      //使用防抖
      this.debounceGetNavTopY = debounce(this.getNavTopY);
    });

    getRecommend().then((res) => {
      /* console.log(res); */
      this.recommend = res.data.list;
    });
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDetailInfo,
    DetailParams,
    DetailRecommend,
    DetailRate,
    MyScroll,
  },
  data() {
    return {
      iid: this.$route.query.iid,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
      firstRate: {},
      recommend: [],
      navTopYs: [],
      currentNavIndex: 0,
      debounceGetNavTopY: null,
    };
  },
  methods: {
    detailImageLoad() {
      this.imgLoadListener();
      this.debounceGetNavTopY();
    },
    getNavTopY() {
      if (!this.$refs.params) return;
      this.navTopYs.length = 0;
      this.navTopYs.push(0);
      this.navTopYs.push(this.$refs.params.$el.offsetTop);
      this.navTopYs.push(this.$refs.rate.$el.offsetTop);
      this.navTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    navClick(index) {
      this.$refs.myScroll.toTop(0, -this.navTopYs[index], 200);
    },
    scroll(pos) {
      //返回顶部
      this.toTopIsShow = -pos.y > 1000;

      //nav联动效果
      const y = -pos.y;
      if (y < 0) return;
      for (let i = 1; i <= this.navTopYs.length; i++) {
        if (i === this.navTopYs.length || y < this.navTopYs[i]) {
          if (this.currentNavIndex !== i - 1) {
            this.currentNavIndex = i - 1;
          }
          break;
        }
      }
      this.$refs.nav.currentIndex = this.currentNavIndex;
    },
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: white;
}
.wrapper {
  height: calc(100% - 44px);
  position: relative;
}
</style>