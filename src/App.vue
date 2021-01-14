<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbarmain></tabbarmain>
  </div>
</template>

<script>
import Tabbarmain from "components/content/tabbarmain";

export default {
  name: "App",
  components: {
    Tabbarmain,
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
