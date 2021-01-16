//引入防抖
import { debounce } from "./utils";
import BackTop from "components/common/backTop/BackTop";

export const imgLoadListenerMixin = {
  data(){
    return {
      imgLoadListener: null,
    }
  },
  mounted() {
    //响应goods的图片加载
    this.imgLoadListener = debounce(this.$refs.myScroll.refresh);
    this.$bus.$on("goodsImgLoad", this.imgLoadListener);
  },
}

export const backTopMixin = {
  //需要配合better-scroll  并且改变toTopIsShow的值
  //<back-top @click.native="toTop" v-show="toTopIsShow"></back-top>
  data () {
    return {
      toTopIsShow: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    toTop() {
      this.$refs.myScroll.toTop();
    },
  }
}