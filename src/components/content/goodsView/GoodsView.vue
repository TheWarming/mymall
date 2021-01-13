<template>
  <div class="GoodsView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodsView",
};
</script>

<style scoped>
.GoodsView {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
}
</style>