//index.js
Page({
  data: {
    films: [],

    loading: false,
    windowHeight: 0,
    windowWidth: 0
  },
  onLoad: function () {
    this.setData({
      loading: false
    })
  },
  onShow: function(){
    var that = this
    wx.request({
      url: 'http://geekori.com/test/list.json', //仅为示例，并非真实的接口地址

      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({   
          films: res.data.data.movies, 
          loading: true 
        })
      }
    })
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  }
})
