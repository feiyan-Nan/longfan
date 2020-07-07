const app = getApp();
var template = require("../../components/footer/footer.js");
Page({
  onShareAppMessage() {
    return {
      title: "swiper",
      path: "page/component/pages/swiper/swiper",
    };
  },
  onLoad: function () {
    template.tabbar("tabBar", 0, this); //0表示第一个tabbar
  },
  data: {
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
  },
  tabChange(e) {
    console.log("tab change", e);
  },
});
