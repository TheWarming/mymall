export default {
  getCheckCart(state){
    return state.cartList.filter(item => item.check)
  },
}