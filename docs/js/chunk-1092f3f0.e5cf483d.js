(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1092f3f0"],{"0393":function(t,e,a){"use strict";a("523d")},"0bf8":function(t,e,a){},1148:function(t,e,a){"use strict";var s=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",n=s(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"2c17":function(t,e,a){"use strict";a("8c8d")},"408a":function(t,e,a){var s=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"523d":function(t,e,a){},"563d":function(t,e,a){"use strict";a("0bf8")},"5d88":function(t,e,a){},"68ef":function(t,e,a){},"6ab7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"detail"}},[a("detail-nav",{ref:"nav",on:{navClick:t.navClick}}),a("my-scroll",{ref:"myScroll",staticClass:"wrapper",attrs:{probeType:3},on:{scroll:t.scroll}},[a("detail-swiper",{attrs:{topImages:t.topImages}}),a("detail-base-info",{attrs:{baseInfo:t.baseInfo}}),a("detail-shop-info",{attrs:{shopInfo:t.shopInfo}}),a("detail-detail-info",{attrs:{detailInfo:t.detailInfo},on:{detailImageLoad:t.detailImageLoad}}),a("detail-params",{ref:"params",attrs:{params:t.params}}),a("detail-rate",{ref:"rate",attrs:{firstRate:t.firstRate}}),a("detail-recommend",{ref:"recommend",attrs:{list:t.recommend}})],1),a("detail-bottom-nav",{on:{clickAddCart:t.clickAddCart}}),a("back-top",{directives:[{name:"show",rawName:"v-show",value:t.toTopIsShow,expression:"toTopIsShow"}],nativeOn:{click:function(e){return t.toTop(e)}}})],1)},i=[],n=(a("b0c0"),a("2909"));function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=a("b12c");function c(t){return Object(o["a"])({url:"/detail",params:{iid:t}})}function l(){return Object(o["a"])({url:"/recommend"})}var f=function t(e,a,s){r(this,t),this.title=e.title,this.price=e.price,this.oldPrice=e.oldPrice,this.discountDesc=e.discountDesc,this.discountBgColor=e.discountBgColor,this.columns=[a[0],a[1],s.shift().name],this.services=s,this.desc=e.desc,this.realPrice=e.lowNowPrice},u=function t(e,a){r(this,t),this.set=e.set,this.image=e.image?e.image[0]:"",this.tables=a.tables[0];for(var s=1;s<a.tables.length;s++)for(var i=0;i<a.tables[s].length;i++){var o;a.tables[s][i].shift(),(o=this.tables[i]).push.apply(o,Object(n["a"])(a.tables[s][i]))}},d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav-bar",{attrs:{id:"detailNav"}},[s("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[s("img",{attrs:{src:a("7a74"),alt:"back"}})]),s("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,a){return s("span",{key:e,class:{actived:t.currentIndex===a},on:{click:function(e){return t.titleClick(a)}}},[t._v(t._s(e)+" ")])})),0)])},p=[],m=a("1f8a"),v={name:"DetailNav",components:{NavBar:m["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("navClick",t)},backClick:function(){this.$router.go(-1)}}},h=v,b=(a("563d"),a("2877")),_=Object(b["a"])(h,d,p,!1,null,"74a20ac1",null),I=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.topImages.length?a("swiper",{staticClass:"detailSwiper"},t._l(t.topImages,(function(t,e){return a("swiper-item",{key:e},[a("img",{attrs:{src:t,alt:"img"}})])})),1):t._e()],1)},C=[],y=a("dc2c"),k={name:"DetailSwiper",components:{Swiper:y["a"],SwiperItem:y["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},w=k,D=(a("e1f6"),Object(b["a"])(w,g,C,!1,null,"6ef61fe1",null)),$=D.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detailBaseInfo"},[a("p",{staticClass:"title"},[t._v(t._s(t.baseInfo.title))]),a("div",{staticClass:"price"},[a("span",{staticClass:"newPrice"},[t._v(t._s(t.baseInfo.price))]),a("span",{staticClass:"oldPrice"},[t._v(t._s(t.baseInfo.oldPrice))]),t.baseInfo.discountDesc?a("span",{staticClass:"discountDesc",style:{backgroundColor:t.baseInfo.discountBgColor}},[t._v(t._s(t.baseInfo.discountDesc))]):t._e()]),a("div",{staticClass:"columns"},t._l(t.baseInfo.columns,(function(e,s){return a("span",{key:s,staticClass:"column"},[t._v(t._s(e))])})),0),a("div",{staticClass:"services"},t._l(t.baseInfo.services,(function(e,s){return a("div",{key:s},[a("img",{attrs:{src:e.icon,alt:e.name}}),a("span",[t._v(t._s(e.name))])])})),0)])},T=[],O={name:"DetailBaseInfo",props:{baseInfo:{type:Object,default:function(){return{}}}}},j=O,N=(a("c6a4"),Object(b["a"])(j,x,T,!1,null,"950abfce",null)),S=N.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.shopInfo).length?a("div",[a("div",{staticClass:"shopName"},[a("img",{attrs:{src:t.shopInfo.shopLogo,alt:""}}),a("span",[t._v(t._s(t.shopInfo.name))])]),a("div",{staticClass:"shopData"},[a("div",{staticClass:"shopDataItem dataLeft"},[a("div",[a("p",[t._v(t._s(t._f("showSell")(t.shopInfo.cSells)))]),a("p",[t._v("总销量")])]),a("div",[a("p",[t._v(t._s(t.shopInfo.cGoods))]),a("p",[t._v("全部宝贝")])])]),a("div",{staticClass:"shopDataItem dataRight"},t._l(t.shopInfo.score,(function(e,s){return a("p",{key:s},[t._v(" "+t._s(e.name)),a("span",{staticClass:"dataScore",style:{color:e.isBetter?"red":"green"}},[t._v(t._s(e.score))]),e.isBetter?a("span",{staticClass:"isBetter betterSpan"},[t._v("高")]):a("span",{staticClass:"notBetter betterSpan"},[t._v("低")])])})),0)]),a("div",{staticClass:"enterShop"},[a("a",{attrs:{href:t.shopInfo.shopUrl}},[a("span",[t._v("进店逛逛")])])])]):t._e()},E=[],L=(a("b680"),{name:"DetailShopInfo",props:{shopInfo:{type:Object,default:function(){return{}}}},filters:{showSell:function(t){var e=t;return e>=1e4&&(e=(e/1e4).toFixed(2)+"万"),e}}}),B=L,Y=(a("be07"),Object(b["a"])(B,R,E,!1,null,"9e0687f4",null)),P=Y.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.detailInfo).length?a("div",{staticClass:"detailInfo"},[a("div",{staticClass:"desc"},[a("div",{staticClass:"bgdiv bgdivTop"}),t._v(" "+t._s(t.detailInfo.desc)+" "),a("div",{staticClass:"bgdiv bgdivBottom"})]),a("p",[t._v(t._s(t.detailInfo.detailImage[0].key))]),a("div",{staticClass:"detailImageDiv"},t._l(t.detailInfo.detailImage[0].list,(function(e,s){return a("img",{key:s,attrs:{src:e,alt:"img"},on:{load:t.detailImageLoad}})})),0)]):t._e()},M=[],F={name:"DetailDetailInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{detailImageLoad:function(){this.$emit("detailImageLoad")}}},G=F,H=(a("b8f2"),Object(b["a"])(G,A,M,!1,null,"b44b28de",null)),J=H.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.params).length?a("div",{staticClass:"detailParams"},[a("table",{staticClass:"myTable"},[t._l(t.params.tables,(function(e,s){return a("tr",{key:s+Math.random(),staticClass:"tableLine"},t._l(e,(function(e,s){return a("td",{key:s+Math.random(),class:{tableHead:0===s}},[t._v(" "+t._s(e)+" ")])})),0)})),t._l(t.params.set,(function(e,s){return a("tr",{key:s+Math.random(),staticClass:"tableLine"},[a("td",{staticClass:"tableHead"},[t._v(" "+t._s(e.key)+" ")]),a("td",{staticClass:"setValue",attrs:{colspan:t.params.tables[0].length-1}},[t._v(" "+t._s(e.value)+" ")])])}))],2),a("div",[t.params.image?a("img",{staticClass:"paramsImage",attrs:{src:t.params.image,alt:""}}):t._e()])]):t._e()},U=[],V={name:"DetailParams",props:{params:{type:Object,default:function(){return{}}}}},W=V,z=(a("2c17"),Object(b["a"])(W,q,U,!1,null,"107bc1a6",null)),K=z.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[Object.keys(t.firstRate).length?a("div",{staticClass:"detailRate"},[t._m(0),a("div",{staticClass:"userInfo"},[a("img",{attrs:{src:t.firstRate.user.avatar,alt:"avatar"}}),a("span",[t._v(t._s(t.firstRate.user.uname))])]),a("p",{staticClass:"userContent"},[t._v(t._s(t.firstRate.content))]),a("p",{staticClass:"contentDetail"},[a("span",[t._v(t._s(t._f("showDate")(t.firstRate.created)))]),a("span",[t._v(t._s(t.firstRate.style))])]),a("div",{staticClass:"rateImages"},t._l(t.firstRate.images,(function(t,e){return a("img",{key:e,attrs:{src:t,alt:""}})})),0)]):a("div",{staticClass:"noRate"},[t._v("评论为空")])])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"more"},[t._v(" 用户评价 "),s("span",[t._v(" 更多 "),s("img",{attrs:{src:a("7a74"),alt:"more"}})])])}],Z=a("90b9"),tt={name:"DetailRate",props:{firstRate:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(Z["b"])(e,"yyyy-MM-dd")}}},et=tt,at=(a("8211"),Object(b["a"])(et,Q,X,!1,null,"6a17cd76",null)),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("goods-list",t._l(t.list,(function(t,e){return a("goods-item",{key:e*Math.random(),attrs:{good:t}})})),1)],1)},nt=[],rt=a("69de"),ot=a("4a2d"),ct={name:"DetailRecommend",components:{GoodsList:rt["a"],GoodsItem:ot["a"]},props:{list:{type:Array,default:function(){return[]}}}},lt=ct,ft=Object(b["a"])(lt,it,nt,!1,null,"1c302e88",null),ut=ft.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"DetailBottomNav"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"add",on:{click:t.clickAddCart}},[t._v("加入购物车")]),a("div",{staticClass:"buy"},[t._v("购买")])])},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon serve"}),a("p",[t._v("客服")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon shop"}),a("p",[t._v("店铺")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"icon"}),a("p",[t._v("收藏")])])}],mt={name:"DetailBottomNav",methods:{clickAddCart:function(){this.$emit("clickAddCart")}}},vt=mt,ht=(a("0393"),Object(b["a"])(vt,dt,pt,!1,null,"4bfd3884",null)),bt=ht.exports,_t=a("3434"),It=a("eecb"),gt={name:"Detail",mixins:[It["b"],It["a"]],destroyed:function(){this.$bus.$off("goodsImgLoad",this.imgLoadListener)},created:function(){var t=this;c(this.iid).then((function(e){var a=e.result;t.topImages=a.itemInfo.topImages,t.baseInfo=new f(a.itemInfo,a.columns,a.shopInfo.services),t.shopInfo=a.shopInfo,t.detailInfo=a.detailInfo,t.params=new u(a.itemParams.info,a.itemParams.rule),0!==a.rate.cRate&&(t.firstRate=a.rate.list[0]),t.debounceGetNavTopY=Object(Z["a"])(t.getNavTopY),t.flag++})),l().then((function(e){e&&(t.recommend=e.data.list,t.flag++)}))},components:{DetailNav:I,DetailSwiper:$,DetailBaseInfo:S,DetailShopInfo:P,DetailDetailInfo:J,DetailParams:K,DetailRecommend:ut,DetailRate:st,DetailBottomNav:bt,MyScroll:_t["a"]},data:function(){return{iid:this.$route.query.iid,topImages:[],baseInfo:{},shopInfo:{},detailInfo:{},params:{},firstRate:{},recommend:[],navTopYs:[],currentNavIndex:0,debounceGetNavTopY:null,flag:0}},methods:{detailImageLoad:function(){this.imgLoadListener(),this.debounceGetNavTopY()},getNavTopY:function(){this.$refs.params&&(this.navTopYs.length=0,this.navTopYs.push(0),this.navTopYs.push(this.$refs.params.$el.offsetTop),this.navTopYs.push(this.$refs.rate.$el.offsetTop),this.navTopYs.push(this.$refs.recommend.$el.offsetTop))},navClick:function(t){this.$refs.myScroll.toTop(0,-this.navTopYs[t],200)},scroll:function(t){this.toTopIsShow=-t.y>1e3;var e=-t.y;if(!(e<0)){for(var a=1;a<=this.navTopYs.length;a++)if(a===this.navTopYs.length||e<this.navTopYs[a]){this.currentNavIndex!==a-1&&(this.currentNavIndex=a-1);break}this.$refs.nav.currentIndex=this.currentNavIndex}},clickAddCart:function(){var t=this;if(2===this.flag){var e={image:this.topImages[0],title:this.baseInfo.title,iid:this.iid,desc:this.baseInfo.desc,price:this.baseInfo.realPrice};this.$store.dispatch("addToCart",e).then((function(e){t.$myToast.showToast(e)}))}}}},Ct=gt,yt=(a("b5ac"),Object(b["a"])(Ct,s,i,!1,null,"a13ec49e",null));e["default"]=yt.exports},"72e8":function(t,e,a){},"7a74":function(t,e,a){t.exports=a.p+"img/back.26df9036.svg"},8211:function(t,e,a){"use strict";a("72e8")},8790:function(t,e,a){},"8c8d":function(t,e,a){},ae2f:function(t,e,a){},b5ac:function(t,e,a){"use strict";a("bd3b")},b680:function(t,e,a){"use strict";var s=a("23e7"),i=a("a691"),n=a("408a"),r=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,a){return 0===e?a:e%2===1?f(t,e-1,a*t):f(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));s({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,a,s,o,c=n(this),d=i(t),p=[0,0,0,0,0,0],m="",v="0",h=function(t,e){var a=-1,s=e;while(++a<6)s+=t*p[a],p[a]=s%1e7,s=l(s/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=l(a/t),a=a%t*1e7},_=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=u(c*f(2,69,1))-69,a=e<0?c*f(2,-e,1):c/f(2,e,1),a*=4503599627370496,e=52-e,e>0){h(0,a),s=d;while(s>=7)h(1e7,0),s-=7;h(f(10,s,1),0),s=e-1;while(s>=23)b(1<<23),s-=23;b(1<<s),h(1,1),b(2),v=_()}else h(0,a),h(1<<-e,0),v=_()+r.call("0",d);return d>0?(o=v.length,v=m+(o<=d?"0."+r.call("0",d-o)+v:v.slice(0,o-d)+"."+v.slice(o-d))):v=m+v,v}})},b8f2:function(t,e,a){"use strict";a("8790")},bd3b:function(t,e,a){},be07:function(t,e,a){"use strict";a("68ef")},c6a4:function(t,e,a){"use strict";a("ae2f")},e1f6:function(t,e,a){"use strict";a("5d88")}}]);
//# sourceMappingURL=chunk-1092f3f0.e5cf483d.js.map