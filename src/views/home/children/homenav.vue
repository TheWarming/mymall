<template>
  <div class="homeNav">
    <navbar>
      <p slot="center" class="title">首页</p>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  name: "HomeNav",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.homeNav {
  height: 44px;
}
.title {
  color: aliceblue;
}
</style>