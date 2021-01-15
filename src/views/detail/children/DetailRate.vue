<template>
  <div v-if="Object.keys(firstRate).length" class="detailRate">
    <div class="more">
      用户评价
      <span>
        更多
        <img src="~assets/img/common/back.svg" alt="more" />
      </span>
    </div>
    <div class="userInfo">
      <img :src="firstRate.user.avatar" alt="avatar" />
      <span>{{ firstRate.user.uname }}</span>
    </div>
    <p class="userContent">{{ firstRate.content }}</p>
    <p class="contentDetail">
      <span>{{ firstRate.created | showDate }}</span>
      <span>{{ firstRate.style }}</span>
    </p>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "DetailRate",
  props: {
    firstRate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.detailRate {
  padding: 10px 20px;
  border-bottom: #bbb 2px solid;
}
.more span {
  float: right;
}
.more span img {
  transform: rotateY(180deg);
  vertical-align: middle;
}
.userInfo img {
  border-radius: 50%;
  width: 40px;
  vertical-align: middle;
}
.userContent {
  padding: 10px 2px;
}
.userInfo span {
  margin-left: 20px;
}
.contentDetail {
  font-size: 12px;
}
.contentDetail span {
  padding: 5px;
}
</style>