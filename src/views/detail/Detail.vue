<template>
  <div>
    <p>我是详情页</p>
    <p>{{ iid }}</p>
    <p>--------</p>
    <p>{{ $route.query.iid }}</p>
  </div>
</template>

<script>
import { getDetail } from "network/detail";

export default {
  name: "Detail",
  created() {
    getDetail(this.iid).then((res) => {
      console.log(res);
    });
  },
  data() {
    return {
      iid: this.$route.query.iid,
    };
  },
};
</script>

<style scoped>
</style>