// pages/coin/team/team.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
      item: [
      {
        number: "4",
        amount: "1.00",
        create_time: "2019-05-09 16:52:10"
      },
      {
        amount: "1.00",
        create_time: "2019-05-09 16:52:10"
      },
      {
        amount: "1.00",
        create_time: "2019-05-09 16:52:10"
      },
      {
        amount: "1.00",
        create_time: "2019-05-09 16:52:10"
      },
      {
        amount: "1.00",
        create_time: "2019-05-09 16:52:10"
      }
    ]
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

    var that = this;
    console.log(that)
    var page = that.data.page
    page++;
    that.setData({
    page: page
    })
    // 显示加载图标
    wx.showLoading({
    title: '玩命加载中',
    })
    wx.request({
    url: '',   //请求的接口地址
    data: {
    page: that.data.page,    //  页数
     
    },
    header: {
    'content-type': 'application/json'
    },
    
    method: 'GET',
    success: function (res) {
    console.log(res)
    var goods = that.data.grade.concat(res.data.data.list)     //grade  为一进入页面请求完数据定义的集合
    if (res.data.data.list == '') {
    console.log(1)
    wx.showToast({
    title: '暂无更多',
    icon: 'none',
    })
    } else {
    that.setData({
    grade : goods,
    });
    }
    wx.hideLoading();
     
    },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})