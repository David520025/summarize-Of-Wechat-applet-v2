//index.js
//获取应用实例
var app = getApp()
//  在数组中存在三个图像文件名
var imagePaths = ['../../images/scissors.png', '../../images/stone.png', '../../images/cloth.png'];
//  当前图像的索引
var imageIndex = 0;
Page({
  data: {
    condition:1>2,
    count:3
  },    
 
 
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})