//初始化数据
function tabbarinit() {
  return [
       { "current":0,
       "pagePath": "/pages/index/index",  
         "iconPath": "/assets/images/index-gry.png",
         "selectedIconPath": "/assets/images/index-active.png",
         "text": "首页"
       },
       {  
         "current": 0,
         "pagePath": "/pages/classify/classify",
         "iconPath": "/assets/images/category-gry.png",
         "selectedIconPath": "/assets/images/category-active.png",
         "text": "分类"
 
       },
       {
         "current": 0,
         "pagePath": "/pages/mymine/mymine",
         "iconPath": "/assets/images/myself-gry.png",
         "selectedIconPath": "/assets/images/myself-active.png",
         "text": "我的"
       },
     ]
 }
 //tabbar 主入口
 function tabbarmain(bindName = "tabdata", id, target) {
   var that = target;
   var bindData = {};
   var otabbar = tabbarinit();
   otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
   otabbar[id]['current'] = 1;
   bindData[bindName] = otabbar
   that.setData({ bindData });
 }
 
 module.exports = {
   tabbar: tabbarmain
 }