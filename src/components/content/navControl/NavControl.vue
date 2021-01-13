<template>
  <div class="navControl">
    <div v-for="(item, index) in list" :key="item">
      <span
        :class="{ actived: index === currentIndex }"
        @click="conClick(index)"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavControl",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    conClick(index) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this.$emit("navConClick", index);
    },
  },
};
</script>

<style scoped>
.navControl {
  display: flex;
  text-align: center;
  height: 35px;
}
.navControl div {
  flex: 1;
}
.navControl div span {
  display: inline-block;
  margin-top: 7px;
}
.actived {
  border-bottom: solid 2px deeppink;
  color: deeppink;
}
</style>