<template>
  <div id="homevue">
    <navbar>
      <p slot="center">首页</p>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  name: "homevue",
  components: {
    navbar,
  },
};
</script>

<style scoped>
</style>