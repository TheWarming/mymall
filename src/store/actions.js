export default {
  addToCart(context,payload){
    const goods = context.state.cartList.find(item => item.iid === payload.iid)

    if(goods){
      context.commit('cartCounter', goods)
    }else{
      payload.count = 1;
      payload.check = true;
      context.commit('cartPush', payload)
    }
  }
}