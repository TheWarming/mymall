export default {
  cartCounter(state,payload){
    payload.count++
  },
  cartCounterSub(state,payload){
    if(payload.count <= 1) return
    payload.count--
  },
  cartPush(state,payload){
    state.cartList.push(payload)
  },
  cartCheckChange(state,payload){
    payload.check = !payload.check 
/*     console.log(payload) */
  }
}