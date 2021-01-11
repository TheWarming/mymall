<template>
  <div id="tItem" @click="itemClick">
    <div v-if="activated">
      <div class="tItemIcon"><slot name="tItemIconActivated"></slot></div>
    </div>
    <div v-else>
      <div class="tItemIcon"><slot name="tItemIcon"></slot></div>
    </div>
    <div class="tItemText" :style="colorFont">
      <slot name="tItemText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    path: {
      type: String,
      required: true,
    },
    fontColor: {
      type: String,
      default() {
        return "deeppink";
      },
    },
  },
  methods: {
    itemClick() {
      if (!this.activated) {
        this.$router.replace(this.path);
      }
    },
  },
  computed: {
    activated() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    colorFont() {
      return this.activated ? { color: this.fontColor } : {};
    },
  },
};
</script>

<style scoped>
#tItem {
  flex: 1;
  font-size: 10px;
  line-height: 10px;
}
.tItemIcon img {
  width: 28px;
  margin: 5px 0px 3px;
}
</style>