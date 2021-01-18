<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyToast",
  data() {
    return {
      isShow: false,
      message: "Toast",
    };
  },
  methods: {
    showToast(message, duration = 1000) {
      if (this.message !== message) this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 999;
  border-radius: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>