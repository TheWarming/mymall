<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: var(--color-tint);
  font-size: 18px;
}
.navbar .left,
.navbar .right {
  width: 30px;
}
.navbar .center {
  flex: 1;
}
</style>