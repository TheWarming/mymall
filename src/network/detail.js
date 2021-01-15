import axios from './myAxios'

export function getDetail(iid){
  return axios({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class BaseInfo{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = [columns[0],columns[1],services.shift().name];
    this.services = services;
  }
}

export class Params{
  constructor(info,rule){
    this.set = info.set;
    this.tables = rule.tables[0];
    for(let i = 1; i < rule.tables.length;i++){
      for(let j =0; j < rule.tables[i].length;j++){
        rule.tables[i][j].shift();
        this.tables[j].push(...rule.tables[i][j])
      }
    }
  }
}