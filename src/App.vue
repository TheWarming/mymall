<template>
  <div>
    <router-view></router-view>
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
