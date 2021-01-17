<template>
  <div class="DetailBottomNav">
    <div>
      <i class="icon serve"></i>
      <p>客服</p>
    </div>
    <div>
      <i class="icon shop"></i>
      <p>店铺</p>
    </div>
    <div>
      <i class="icon"></i>
      <p>收藏</p>
    </div>
    <div class="add" @click="clickAddCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNav",
  methods: {
    clickAddCart() {
      this.$emit("clickAddCart");
    },
  },
};
</script>

<style scoped>
.DetailBottomNav {
  height: 49px;
  background-color: #fff;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.DetailBottomNav div {
  flex: 1;
}
.DetailBottomNav .add {
  flex: 1.5;
  background-color: yellow;
  color: black;
  line-height: 49px;
}
.DetailBottomNav .buy {
  flex: 1.5;
  background-color: deeppink;
  color: #fff;
  line-height: 49px;
}
.icon {
  display: block;
  width: 20px;
  height: 20px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 5px auto;
}
.serve {
  background-position: 0 -48px;
}
.shop {
  background-position: 0 -90px;
}
</style>