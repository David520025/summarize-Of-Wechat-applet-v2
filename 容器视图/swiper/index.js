//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
        background: ['green', 'red', 'yellow','blue'],
        indicatorDots: true,
        vertical: true,
        autoplay: false,
        interval: 3000,
        duration: 1000,
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  change:function(e)
  {
    console.log(e);
    console.log(e.detail);
  }
})
