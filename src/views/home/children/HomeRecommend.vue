<template>
  <div class="homeRecommend">
    <div v-for="item in recommendList" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" class="recommendImg" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.homeRecommend {
  display: flex;
  border-bottom: #eee 10px solid;
  text-align: center;
  font-size: 14px;
}
.homeRecommend div {
  margin: 10px 0 20px;
  flex: 1;
}
.recommendImg {
  width: 80px;
  margin-bottom: 10px;
}
</style>