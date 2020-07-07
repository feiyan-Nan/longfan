// pages/pay/confirm/confirm.js
const app = getApp()  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    redPacket: [
      {
        name: "周末红包",
        price: "￥20.00"
      },
      {
        name: "周末红包",
        price: "￥20.00"
      }
    ],
    actualPrice: [
      {
        name: "实际价格",
        price: "￥200.90"
      }
    ]
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

  }
})