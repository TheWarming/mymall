import MyToast from './MyToast'

export default  {
  install(Vue){
    //构建构造器
    const ToastConstructor = Vue.extend(MyToast);

    const myToast = new ToastConstructor();

    //挂载
    myToast.$mount(document.createElement('div'));

    document.body.appendChild(myToast.$el)

    Vue.prototype.$myToast = myToast;
  }
}

