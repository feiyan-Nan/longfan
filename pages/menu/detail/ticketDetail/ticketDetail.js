// pages/menu/detail/ticketDetail/ticketDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    minusStatus: 'disabled'
  },
  // 点击减号
  reductFunc:function() {
      var num = this.data.num
      if(num > 0) {
        num --;
      }
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      this.setData({
        num: num,
        minusStatus:minusStatus
      });
  },
  // 点击加号
  addFunc:function() {
    var num = this.data.num;
    num ++;
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  bindManual:function(e) {
      var num = e.datail.value;
      this.setData({
        num: num
      });
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