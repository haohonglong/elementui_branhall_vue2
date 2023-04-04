import request from '@/utils/request'

const API = {
  "mindmaps":{
    "index": "/mindmaps/index",
    "show": "/mindmaps/show",
    "add": "/mindmaps/add",
    "edit": "/mindmaps/edit",
    "editByKey": "/mindmaps/editByKey",
    "delete": "/mindmaps/delete"
  },
  "diary":{
    "list": "/diary/index",
    "add": "/diary/add",
    "edit": "/diary/edit",
    "search": "/diary/search",
    "delete": "/diary/delete"
  },
  "url":{
    "add": "/url/add",
    "edit": "/url/edit",
    "detail": "/url/show",
    "list": "/url/index",
    "search": "/url/search",
    "delete": "/url/delete"
  },
  "sorts": {
    "add": "/sorts/add",
    "edit": "/sorts/edit",
    "detail": "/sorts/show",
    "list": "/sorts/index",
    "search": "/sorts/search",
    "delete": "/sorts/delete"
  },
  "shop": {
    "add": "/shop/add",
    "edit": "/shop/edit",
    "detail": "/shop/show",
    "list": "/shop/index",
  },
  "goods": {
    "add": "/goods/add",
    "edit": "/goods/edit",
    "detail": "/goods/show",
    "list": "/goods/index",
  },
  "site": {
    "login": "/site/login",
  }
};

export default API

export function getSortsList(){
  return request({
    url: API.sorts.list,
    method: 'get'
  });
}

export function addSort({ name, pid }){
  return request({
    url: API.sorts.add,
    method: 'post',
    data: { name, pid }
  });
}

export function editSort({ id, name, pid }){
  return request({
    url: API.sorts.edit,
    method: 'post',
    data: { id, name, pid }
  });
}

export function detailSort(id){
  return request({
    url: API.sorts.detail,
    method: 'get',
    params: { id }
  });
}

export function deleteSort(id){
  return request({
    url: API.sorts.delete,
    method: 'get',
    params: { id }
  });
}

export function addUrl({ sid, name, url, info }){
  return request({
    url: API.url.add,
    method: 'post',
    data: { sid, name, url, info }
  });
}

export function editUrl({ id, sid, name, url, info }){
  return request({
    url: API.url.edit,
    method: 'post',
    data: { id, sid, name, url, info }
  });
}

export function detailUrl(id){
  return request({
    url: API.url.detail,
    method: 'get',
    params: { id }
  });
}

export function getlUrl(sid){
  return request({
    url: API.url.list,
    method: 'get',
    params: { sid }
  });
}

export function searchUrl({ sid, name }){
  return request({
    url: API.url.search,
    method: 'get',
    params: { sid, name }
  });
}

export function deleteUrl(id){
  return request({
    url: API.url.delete,
    method: 'get',
    params: { id }
  });
}

export function getGoodsList(){
  return request({
    url: API.goods.list,
    method: 'get'
  });
}

export function addGoods({ 
  shop_id,
  bill_id,
  discount,
  create_by,
  name,
  number,
  weight,
  single_price,
  final_price 
}){
  return request({
    url: API.goods.add,
    method: 'post',
    data: { shop_id, bill_id, discount, create_by, name, number, weight, single_price, final_price }
  });
}



export function addShop({ name }){
  return request({
    url: API.shop.add,
    method: 'post',
    data: { name }
  });
}

export function getShopList(){
  return request({
    url: API.shop.list,
    method: 'get'
  });
}

export function login({ username, password }){
  return request({
    url: API.site.login,
    method: 'post',
    data: { username, password }
  });
}

export const Mindmaps = {
  add({ key, name, thumbnail, content }){
    return request({
      url: API.mindmaps.add,
      method: 'post',
      data: { key, name, thumbnail, content }
    });
  },
  edit({ id, key, name, thumbnail }){
    return request({
      url: API.mindmaps.edit,
      method: 'post',
      data: { id, key, name, thumbnail }
    });
  },
  editByKey({ key, content }){
    return request({
      url: API.mindmaps.editByKey,
      method: 'post',
      data: { key, content }
    });
  },
  list(){
    return request({
      url: API.mindmaps.index,
      method: 'get'
    });
  },
  show({ key }){
    return request({
      url: API.mindmaps.show,
      method: 'post',
      data: { key }
    });
  },
  delete(id){
    return request({
      url: API.mindmaps.delete,
      method: 'get',
      params: { id }
    });
  }

};


 















