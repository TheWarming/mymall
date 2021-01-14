export function debounce(fn,delay=100){
  let timer = null;
  return function(...arg){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      fn.apply(this,arg)
    },delay)
  }
}