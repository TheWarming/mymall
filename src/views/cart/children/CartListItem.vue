<template>
  <div class="cartListItem">
    <div class="check">
      <check-button
        :isCheck="goods.check"
        @click.native="clickCheck(goods)"
      ></check-button>
    </div>
    <div class="image" @click="goDetail(goods.iid)">
      <img :src="goods.image" alt="image" />
    </div>
    <div class="info">
      <p class="title" @click="goDetail(goods.iid)">{{ goods.title }}</p>
      <p class="desc" @click="goDetail(goods.iid)">
        商品描述：{{ goods.desc }}
      </p>
      <div>
        <span class="price">{{ "￥" + goods.price }}</span>
        <div class="count">
          <button class="carrButton" @click="sub" :disabled="goods.count === 1">
            -
          </button>
          <span class="countNum">{{ goods.count }}</span>
          <button class="carrButton" @click="add">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    clickCheck(goods) {
      this.$store.commit("cartCheckChange", goods);
    },
    goDetail(iid) {
      //增加购物车跳转详情页
      this.$router.push({
        path: "detail",
        query: {
          iid,
        },
      });
    },
    add() {
      this.$store.commit("cartCounter", this.goods);
    },
    sub() {
      this.$store.commit("cartCounterSub", this.goods);
    },
  },
};
</script>

<style scoped>
.cartListItem {
  display: flex;
  padding: 5px;
  border-bottom: 1px #ddd solid;
}
.check {
  flex: 1;
  display: flex;
  align-items: center;
}
.image {
  flex: 8;
  margin-left: 5px;
}
.image img {
  width: 100%;
  height: 110px;
  border-radius: 5px;
}
.info {
  flex: 20;
  min-width: 0;
  padding: 0 10px;
}
.info p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.info .title {
  font-size: 18px;
}
.info .desc {
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 30px;
}
.info .price {
  color: orange;
}
.info .count {
  float: right;
}
.carrButton {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
.countNum {
  display: inline-block;
  width: 30px;
  text-align: center;
}
</style>