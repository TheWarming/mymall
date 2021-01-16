<template>
  <div>
    <goods-list>
      <goods-item
        v-for="(item, index) in list"
        :key="index * Math.random()"
        :good="item"
      ></goods-item>
    </goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goodsView/GoodsView";
import GoodsItem from "components/content/goodsView/GoodsItem";

export default {
  name: "DetailRecommend",
  components: {
    GoodsList,
    GoodsItem,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>