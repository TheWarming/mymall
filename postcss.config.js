module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗宽度
      viewportHeight: 667,//3视窗高度
      unitPrecision: 5,//转换后的最小位数0.00001
      viewportUnit: 'vw',//指定转换后的单位
      selectorBlackList: ['ignore'],//类名为ignore的则不管
      minPixelValue: 1,//小于等于1px的不转换
      mediaQuery: false,//是否允许媒体查询
      /* exclude:[/tabbarmain/,/tabbar/,/Bottom/,/HomeNav/] //不包含的文件 */
    },
  }
}