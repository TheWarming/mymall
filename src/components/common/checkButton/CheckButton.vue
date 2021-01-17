<template>
  <div class="checkButton" :class="{ actived: isCheck }">
    <img src="~assets/img/cart/tick.svg" alt="check" id="checkImage" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      tyep: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.checkButton {
  width: 22px;
  height: 22px;
  text-align: center;
  padding: 2px;
  border-radius: 50%;
  border: 1px #aaa solid;
  display: inline-block;
  line-height: 16px !important;
}
.checkButton img {
  opacity: 0;
}
#checkImage {
  width: 16px;
  height: 16px;
}
.actived {
  background-color: var(--color-tint);
}
.actived img {
  opacity: 1;
}
</style>