<template>
  <navbar class="homeNav">
    <p slot="center" class="title">首页</p>
  </navbar>
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
  background-color: var(--color-tint);
}
.title {
  color: aliceblue;
}
</style>