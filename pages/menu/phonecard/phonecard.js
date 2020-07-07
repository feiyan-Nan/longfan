// pages/menu/phonecard/phonecard.js
const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    num: 1,
    hiddenConfirm: true,
    checked: true
  },
  changeOil:function(e){
    this.setData({
      num:e.target.dataset.num
    })
  },
  checkedTap: function () {
    var checked = this.data.checked;
    this.setData({
      "checked": !checked
    })
  },
  click:function(e) {
    this.setData({
      hiddenConfirm:!this.data.hiddenConfirm
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabChange(e) {
    console.log('tab change', e)
}
})