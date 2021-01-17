<template>
  <div class="cartBottom">
    <div class="check">
      <check-button
        id="allCheck"
        :isCheck="isAllCheck"
        @click.native="clickAllCheck"
      ></check-button
      >全选
    </div>
    <div class="price">
      <span>合计：</span>
      <span>{{ "￥" + totalPrice }}</span>
    </div>
    <div class="buy">去结算{{ "(" + totalCount + ")" }}</div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottom",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["getCheckCart"]),
    totalPrice() {
      return this.getCheckCart
        .reduce((pre, item) => pre + item.price * item.count, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.getCheckCart.reduce((pre, item) => pre + item.count, 0);
    },
    isAllCheck() {
      if (this.$store.state.cartList.length === 0) return false;
      return this.getCheckCart.length === this.$store.state.cartList.length;
    },
  },
  methods: {
    clickAllCheck() {
      const flag = !this.isAllCheck;
      this.$store.state.cartList.forEach((item) => (item.check = flag));
    },
  },
};
</script>

<style scoped>
.cartBottom {
  height: 49px;
  background-color: #ddd;
  display: flex;
  text-align: center;
  line-height: 49px;
}
.checkButton {
  width: 20px;
}
.check {
  width: 100px;
}
.price {
  flex: 1;
  display: flex;
}
.price span {
  flex: 1;
}
.price :nth-child(1) {
  text-align: right;
}
.price :nth-child(2) {
  text-align: left;
}
.buy {
  width: 100px;
  color: white;
  background-color: var(--color-tint);
}
#allCheck {
  position: relative;
  right: 3px;
  top: 2px;
}
</style>