<template>
  <div class="goodsItem" @click="goodsClick()">
    <img v-lazy="showImage" alt="" @load="goodsImgLoad" />
    <div>
      <p class="title">{{ good.title }}</p>
      <p>
        <span class="price">{{ "￥" + good.price }}</span>
        <span class="col">{{ good.cfav }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    good: {
      type: Object,
      default: {},
    },
  },
  methods: {
    goodsImgLoad() {
      this.$bus.$emit("goodsImgLoad");
    },
    goodsClick() {
      if (!this.good.iid) return;
      this.$router.push({
        path: "detail",
        query: {
          iid: this.good.iid,
        },
      });
    },
  },
  computed: {
    showImage() {
      return this.good.image ? this.good.image : this.good.show.img;
    },
  },
};
</script>

<style scoped>
.goodsItem {
  width: 48%;
  text-align: center;
  font-size: 13px;
}
.goodsItem img {
  width: 100%;
  border-radius: 3px;
}
.title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.price {
  color: deeppink;
}
.col {
  position: relative;
  margin-left: 20px;
}
.col::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>