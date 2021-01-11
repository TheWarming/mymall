<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
#tabbar {
  height: 49px;
  background-color: #cccccc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
}
</style>