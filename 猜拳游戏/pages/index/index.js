//index.js
//获取应用实例
var app = getApp()
var imagePaths = ['../../images/scissors.png', '../../images/stone.png', '../../images/cloth.png'];
var imageIndex = 0;



Page({
  data: {
    imagePath: imagePaths[0],
    title: '开始',
    isRunning:false,
    userInfo: {},


  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  change: function (e) {
    imageIndex++;
    if (imageIndex > 2) {
      imageIndex = 0;
    }

    this.setData(
      {
        imagePath: imagePaths[imageIndex]
      }
    )
  },
   guess: function (e) {
    let isRunning = this.data.isRunning;
  
    if (!isRunning) {
      this.setData(
        {
          title: '停止',
          isRunning:true
        }
      );

      this.timer = setInterval((function () {
        this.change()
      }).bind(this), 100);
    }
    else {
      this.setData(
        {
          title: '开始',
          isRunning:false
        }
      );

      this.timer && clearInterval(this.timer);
      
    }

  },
  onLoad: function () {
    console.log('onLoad')
    console.log('onLoad11')
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
