
const __IMAGE__ = "/images/imgs_LHH/pics/"

const DATA = {
  "room":[
    {"id":1,"name":"李晨","style":"新古典,其他,简约","img": require("@/assets"+__IMAGE__+"img_03.jpg"), "date": "2014-07-21 12:06"},
    {"id":2,"name":"刘军","style":"地中海-田园,北欧,其他,简约","img":require("@/assets"+__IMAGE__+"img_04.jpg"), "date": "2014-07-21 15:07"},
    {"id":3,"name":"王磊","style":"新古典,地中海-田园","img":require("@/assets"+__IMAGE__+"img_05.jpg"), "date": "2014-07-21 15:08"},
    {"id":4,"name":"萧红","style":"新古典,地中海-田园,其他,简约","img":require("@/assets"+__IMAGE__+"img_06.jpg"), "date": "2014-07-21 15:10"},
    {"id":5,"name":"马良","style":"新古典,地中海-田园,北欧,简约","img":require("@/assets"+__IMAGE__+"img_07.jpg"), "date": "2014-07-21 15:11"},
    {"id":6,"name":"赵明","style":"新古典,地中海-田园,北欧,其他","img":require("@/assets"+__IMAGE__+"img_08.jpg"), "date": "2014-07-21 15:12"}
  ],
  "menu":[
    {
      "icon":"a-2",
      "title":"网页地址",
      "ul":[
        {"title":"列表","href":"/url/list"},
        {"title":"添加","href":"/url/add/0"}
      ]
    },
    {
      "icon":"a-2",
      "title":"思维导图",
      "ul":[
        {"title":"列表","href":"/mindmap/index"}
      ]
    },
    {
      "icon":"a-2",
      "title":"类别",
      "ul":[
        {"title":"列表","href":"/sorts/list"},
        {"title":"添加","href":"/sorts/add/0"}
      ]
    },
    {
      "icon":"a-4",
      "title":"样板间管理",
      "ul":[
        {"title":"案例列表","href":"/"},
        {"title":"楼盘户型管理","href":"/room/detail"},
        {"title":"发布","href":"/room/release"},
        {"title":"aa","href":"/room/aa"}
      ]
    },
    {
      "icon":"a-5",
      "title":"店铺管理",
      "ul":[
        {"title":"店铺","href":"/shop/index"},
        {"title":"添加店铺","href":"/shop/create"},
        {"title":"选择模版","href":"/shop/choiceTemplate"},
        {"title":"商品授权","href":"/shop/empower"},
        {"title":"新建房间","href":"/shop/newRoom"},
        {"title":"商品列表","href":"/shop/list"},
        {"title":"楼盘","href":"/shop/loft"}
      ]
    },
    {
      "icon":"a-5",
      "title":"商品管理",
      "ul":[
        {"title":"商品列表","href":"/goods/list"},
        {"title":"添加商品","href":"/goods/add"}
      ]
    }
  ]
}






export default DATA