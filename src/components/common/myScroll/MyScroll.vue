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
      setTimeout(() => {
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
      }, 1000);
    },
    toTop(time = 300) {
      this.bScroll.scrollTo(0, 0, time);
    },
    refresh() {
      this.bScroll.refresh();
    },
    finishPullUp() {
      this.bScroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>