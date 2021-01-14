<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <img
          slot="tItemIconActivated"
          src="~assets/img/tabbar/home_active.svg"
        />
        <img slot="tItemIcon" src="~assets/img/tabbar/home.svg" />
        <p slot="tItemText">首页</p>
      </tabbar-item>
      <tabbar-item path="/category">
        <img
          slot="tItemIconActivated"
          src="~assets/img/tabbar/category_active.svg"
        />
        <img slot="tItemIcon" src="~assets/img/tabbar/category.svg" />
        <p slot="tItemText">分类</p>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img
          slot="tItemIconActivated"
          src="~assets/img/tabbar/cart_active.svg"
        />
        <img slot="tItemIcon" src="~assets/img/tabbar/cart.svg" />
        <p slot="tItemText">购物车</p>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img
          slot="tItemIconActivated"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <img slot="tItemIcon" src="~assets/img/tabbar/profile.svg" />
        <p slot="tItemText">我的</p>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import TabbarItem from "components/common/tabbar/tabbarItem";
import Tabbar from "components/common/tabbar/tabbar";

export default {
  name: "tabbarmain",
  components: {
    TabbarItem,
    Tabbar,
  },
};
</script>

<style scoped>
</style>