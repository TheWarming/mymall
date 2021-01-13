<template>
  <div class="homeFeature">
    <a :href="aLink">
      <img
        class="featureImg"
        src="~assets/img/home/recommend_bg.jpg"
        alt="recommend"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  data() {
    return {
      aLink: "http://act.mogujie.com/zzlx67",
    };
  },
};
</script>

<style scoped>
.featureImg {
  width: 100%;
}
.homeFeature {
  padding-bottom: 20px;
  border-bottom: #ccc 2px solid;
}
</style>