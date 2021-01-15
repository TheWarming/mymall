<template>
  <nav-bar id="detailNav">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="back" />
    </div>
    <div slot="center" class="title">
      <span
        v-for="(item, index) in titles"
        :key="item"
        :class="{ actived: currentIndex === index }"
        @click="titleClick(index)"
        >{{ item }}
      </span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/navbar";

export default {
  name: "DetailNav",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#detailNav {
  background-color: #fff;
  border-bottom: solid 1px #aaa;
}
.title {
  display: flex;
  padding: 0 50px;
}
.title span {
  flex: 1;
}
.back {
  margin-top: 5px;
}
.actived {
  color: var(--color-high-text);
}
</style>