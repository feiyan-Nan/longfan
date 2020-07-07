// pages/coin/coinDetai/coinDetai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actTab: 0,
    hiddenCoin: true,
    conversionCoin: true,
    exchangeList: [
      {
      full_name: "1元代金券(仅限微信支付)",
      remark: "1元代金券(仅限微信支付)",
      ctime: "2019-08-10 00:40:19",
      state: "200",
      }
    ]
  },
  pitchList:function(e) {
    this.setData({
      actTab:e.target.dataset.acttab
    })
  },
  clickBtn(e){
    this.setData({
      hiddenCoin: !this.data.hiddenCoin
    })
  },
  clickConversion() {
     this.setData({
      conversionCoin: !this.data.conversionCoin
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