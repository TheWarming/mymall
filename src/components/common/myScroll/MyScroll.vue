<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**使用better-scroll */
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "MyScroll",
  data() {
    return {
      bScroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    isClick: {
      type: Boolean,
      default: true,
    },
    isPullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.bScroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.isPullUpLoad,
        click: this.isClick,
      });
      if (this.probeType > 1) {
        this.bScroll.on("scroll", (pos) => {
          this.$emit("scroll", pos);
        });
      }
      if (this.isPullUpLoad) {
        this.bScroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    },
    toTop(x = 0, y = 0, time = 300) {
      this.bScroll && this.bScroll.scrollTo(x, y, time);
    },
    refresh() {
      this.bScroll && this.bScroll.refresh();
    },
    finishPullUp() {
      this.bScroll && this.bScroll.finishPullUp();
    },
    getScrollY() {
      return this.bScroll ? this.bScroll.y : 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>