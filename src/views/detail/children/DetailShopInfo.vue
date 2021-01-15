<template>
  <div v-if="Object.keys(shopInfo).length">
    <div class="shopName">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shopData">
      <div class="shopDataItem dataLeft">
        <div>
          <p>{{ shopInfo.cSells | showSell }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shopDataItem dataRight">
        <p v-for="(item, index) in shopInfo.score" :key="index">
          {{ item.name
          }}<span
            :style="{ color: item.isBetter ? 'red' : 'green' }"
            class="dataScore"
            >{{ item.score }}</span
          >
          <span v-if="item.isBetter" class="isBetter betterSpan">高</span
          ><span v-else class="notBetter betterSpan">低</span>
        </p>
      </div>
    </div>
    <div class="enterShop">
      <a :href="shopInfo.shopUrl">
        <span>进店逛逛</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showSell(sell) {
      let res = sell;
      if (res >= 10000) {
        res = (res / 10000).toFixed(2) + "万";
      }
      return res;
    },
  },
};
</script>

<style scoped>
.shopName {
  padding: 10px 10px;
}
.shopName img {
  width: 45px;
  border: 2px #ddd solid;
  border-radius: 50%;
  vertical-align: middle;
}
.shopName span {
  margin-left: 10px;
}
.shopData {
  display: flex;
  text-align: center;
}
.shopDataItem {
  flex: 1;
}
.dataLeft {
  display: flex;
  padding-top: 10px;
}
.dataLeft div {
  flex: 1;
  font-size: 15px;
}
.dataLeft::after {
  display: block;
  content: "";
  width: 1px;
  height: 40px;
  background-color: #ddd;
}
.isBetter {
  background-color: red;
}
.notBetter {
  background-color: green;
}
.betterSpan {
  color: white;
  right: 20px;
  position: absolute;
}
.dataRight {
  text-align: left;
}
.dataRight p {
  padding-left: 30px;
  position: relative;
  padding: 3px 20px;
  font-size: 14px;
}
.dataScore {
  margin-left: 10px;
}
.enterShop {
  padding: 20px;
  border-bottom: 3px solid #ddd;
  text-align: center;
}
.enterShop span {
  background-color: #eee;
  padding: 8px 36px;
  border-radius: 10px;
  font-size: 14px;
}
</style>