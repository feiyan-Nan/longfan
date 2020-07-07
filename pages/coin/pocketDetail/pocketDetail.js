// pages/coin/pocketDetail/pocketDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    packetList: [
      {
        amount: "10.00",
        category: "活动红包",
        create_time: "2019-10-30 14:47:16",
        msg_alert_first: "新电信专属红包！",
        msg_alert_fourth: "适用于新电信直充",
        msg_alert_second: "来自新电信活动",
        msg_alert_third: "有效至：2019-10-31 15:47:18",
        msg_state: "已过期"
      },
      {
        amount: "10.00",
        category: "活动红包",
        create_time: "2019-10-30 14:47:16",
        msg_alert_first: "新电信专属红包！",
        msg_alert_fourth: "适用于新电信直充",
        msg_alert_second: "来自新电信活动",
        msg_alert_third: "有效至：2019-10-31 15:47:18",
        msg_state: "已过期"
      },
      {
        amount: "10.00",
        category: "活动红包",
        create_time: "2019-10-30 14:47:16",
        msg_alert_first: "新电信专属红包！",
        msg_alert_fourth: "适用于新电信直充",
        msg_alert_second: "来自新电信活动",
        msg_alert_third: "有效至：2019-10-31 15:47:18",
        msg_state: "已使用"
      },
      {
        amount: "10.00",
        category: "活动红包",
        create_time: "2019-10-30 14:47:16",
        msg_alert_first: "新电信专属红包！",
        msg_alert_fourth: "适用于新电信直充",
        msg_alert_second: "来自新电信活动",
        msg_alert_third: "有效至：2019-10-31 15:47:18",
        msg_state: "立即使用"
      }
    ]
  },
  swichNav:function(e){
    var that = this
      var cur=e.target.dataset.current;
      if(this.currentTab==cur){
        return false;
      }else {
          that.setData({
              currentTab:cur
          })
          // console.log(cur);
      }
  },
  pitchList:function(e) {
    this.setData({
      actTab:e.target.dataset.acttab
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