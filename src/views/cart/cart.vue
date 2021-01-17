<template>
  <div class="cart">
    <cart-nav></cart-nav>
    <my-scroll ref="myScroll" class="Wrapper">
      <cart-list>
        <cart-list-item
          v-for="item in $store.state.cartList"
          :key="item.iid"
          :goods="item"
        >
        </cart-list-item>
      </cart-list>
    </my-scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import CartNav from "./children/CartNav";
import CartList from "./children/CartList";
import CartListItem from "./children/CartListItem";
import CartBottom from "./children/CartBottom";

import MyScroll from "components/common/myScroll/MyScroll";

export default {
  name: "cart",
  components: {
    CartNav,
    CartList,
    CartListItem,
    CartBottom,
    MyScroll,
  },
  activated() {
    this.$refs.myScroll && this.$refs.myScroll.refresh();
    /* console.log(this.$store.state.cartList); */
  },
  methods: {},
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.wrapper {
  height: calc(100% - 44px - 49px - 49px);
}
</style>