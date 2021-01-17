<template>
  <navbar class="cartNav">
    <p slot="center" class="title">
      购物车({{ $store.state.cartList.length }})
    </p>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";

export default {
  name: "CartNav",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.cartNav {
  height: 44px;
  background-color: var(--color-tint);
}
.title {
  color: aliceblue;
}
</style>