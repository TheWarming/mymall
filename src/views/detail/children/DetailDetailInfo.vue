<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length">
    <div class="desc">
      <div class="bgdiv bgdivTop"></div>
      {{ detailInfo.desc }}
      <div class="bgdiv bgdivBottom"></div>
    </div>
    <p>{{ detailInfo.detailImage[0].key }}</p>
    <div class="detailImageDiv">
      <img
        :src="item"
        alt="img"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="detailImageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      /* imgCount: 0, */
    };
  },
  methods: {
    detailImageLoad() {
      /*       this.imgCount++;
      if (this.imgCount === this.detailInfo.detailImage[0].list.length) {
        this.$emit("detailImageLoad");
      } */
      this.$emit("detailImageLoad");
    },
  },
};
</script>

<style scoped>
.detailInfo {
  padding: 0 10px;
}
.desc {
  padding: 30px 0;
  position: relative;
}
.bgdiv {
  position: absolute;
  width: 25%;
  height: 2px;
  border-bottom: #bbb 2px solid;
  vertical-align: bottom;
}
.bgdivTop {
  top: 15px;
  left: 0;
  text-align: left;
}
.bgdivTop::before,
.bgdivBottom::after {
  display: inline-block;
  content: "";
  width: 6px;
  height: 6px;
  background-color: black;
  position: relative;
  bottom: 12px;
}
.bgdivBottom {
  right: 0;
  bottom: 15px;
  text-align: right;
}

.detailImageDiv img {
  width: 100%;
}
</style>