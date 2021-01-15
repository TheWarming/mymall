<template>
  <div class="detailBaseInfo">
    <p class="title">{{ baseInfo.title }}</p>
    <div class="price">
      <span class="newPrice">{{ baseInfo.price }}</span>
      <span class="oldPrice">{{ baseInfo.oldPrice }}</span>
      <span
        class="discountDesc"
        v-if="baseInfo.discountDesc"
        :style="{ backgroundColor: baseInfo.discountBgColor }"
        >{{ baseInfo.discountDesc }}</span
      >
    </div>
    <div class="columns">
      <span
        v-for="(item, index) in baseInfo.columns"
        :key="index"
        class="column"
        >{{ item }}</span
      >
    </div>
    <div class="services">
      <div v-for="(item, index) in baseInfo.services" :key="index">
        <img :src="item.icon" :alt="item.name" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detailBaseInfo {
  padding: 10px 6px;
}
.title {
  color: #000;
}
.price {
  margin: 20px 0;
}
.newPrice {
  color: deeppink;
  font-size: 20px;
  position: relative;
  bottom: 3px;
}
.oldPrice {
  color: #888;
  text-decoration: line-through;
  font-size: 15px;
  margin: 0 8px;
}
.discountDesc {
  border-radius: 18px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  position: relative;
  bottom: 8px;
}
.columns {
  display: flex;
  font-size: 13px;
  text-align: center;
  justify-content: space-between;
}
.services {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px 0;
  border-top: #eee 1px solid;
  margin-top: 5px;
  border-bottom: #eee 3px solid;
}
.services img {
  width: 15px;
  vertical-align: top;
}
</style>