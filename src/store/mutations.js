export default {
  cartCounter(state,payload){
    payload.count++
  },
  cartPush(state,payload){
    state.cartList.push(payload)
  },
  cartCheckChange(state,payload){
    payload.check = !payload.check 
/*     console.log(payload) */
  }
}