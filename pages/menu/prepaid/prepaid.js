var app = getApp();
Page({
    data:{
        winHeight:"",//窗口高度
        currentTab:0, //预设当前项的值
        scrollLeft:0, //tab标题的滚动条位置
    },
    // 滚动切换标签样式
    switchTab:function(e){
        this.setData({
            currentTab:e.detail.current
        });
        this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav:function(e){
        var cur=e.target.dataset.current;
        if(this.data.currentTaB==cur){return false;}
        else{
            this.setData({
                currentTab:cur
            })
        }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor:function(){
      if (this.data.currentTab>4){
        this.setData({
          scrollLeft:300
        })
      }else{
        this.setData({
          scrollLeft:0
        })
      }
    },
    onLoad: function() {  
        var that = this; 
        //  高度自适应
        wx.getSystemInfo( {  
            success: function( res ) {  
                var clientHeight=res.windowHeight,
                    clientWidth=res.windowWidth,
                    rpxR=750/clientWidth;
              var  calc=clientHeight*rpxR-180;
                console.log(calc)
                that.setData( {  
                    winHeight: calc  
                });  
            }  
        });
    },  
    footerTap:app.footerTap,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    // this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  currentTab: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select={
      page: 1,
      size: 6,
      // isEnd: false
    }
    this.data.sendList=[];
    // this.getData()
  },
  // getData:function(){
  //   var _this=this;
  //   if (this.select.isEnd){
  //     return
  //   }
  //   var type = this.data.currentTab == 0 ? 'ALL' : this.data.currentTab == 1 ? 'WAIT_DELIVER' : 'DELIVER';
  //   util.request(`你的接口地址，后面的是参数` + type + `/` + this.select.page + `/` + this.select.size, {}, 'GET', function (res) {
  //     var content = res.data.data;
  //     _this.setData({
  //       sendList: (_this.data.sendList).concat(content) 
  //     })
  //     if (content.length>0){
  //       _this.select.page++
  //     }else{
  //       _this.select.isEnd=true
  //     }
  //   })
  // },
})