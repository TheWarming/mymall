export default {
  addToCart(context,payload){
    return new Promise((resolve,reject) => {
      const goods = context.state.cartList.find(item => item.iid === payload.iid)

      if(goods){
        context.commit('cartCounter', goods)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1;
        payload.check = true;
        context.commit('cartPush', payload)
        resolve('增加了新的商品')
      }
    })
  }
}