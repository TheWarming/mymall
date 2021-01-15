<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <my-scroll class="wrapper" ref="myScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-detail-info
        :detailInfo="detailInfo"
        @detailImageLoad="detailImageLoad"
      ></detail-detail-info>
      <detail-params :params="params"></detail-params>
      <detail-rate :firstRate="firstRate"></detail-rate>
    </my-scroll>
  </div>
</template>

<script>
import { getDetail, BaseInfo, Params } from "network/detail";

import DetailNav from "./children/DetailNav";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailDetailInfo from "./children/DetailDetailInfo";
import DetailParams from "./children/DetailParams";
import DetailRate from "./children/DetailRate";

import MyScroll from "components/common/myScroll/MyScroll";

export default {
  name: "Detail",
  created() {
    getDetail(this.iid).then((res) => {
      const data = res.result;
      console.log(data);
      this.topImages = data.itemInfo.topImages;
      this.baseInfo = new BaseInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.params = new Params(data.itemParams.info, data.itemParams.rule);
      this.firstRate = data.rate.list[0];
    });
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDetailInfo,
    DetailParams,
    MyScroll,
    DetailRate,
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
    };
  },
  methods: {
    detailImageLoad() {
      this.$refs.myScroll.refresh();
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
}
</style>