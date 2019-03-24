//index.js


var app = getApp()
Page({

  data: {
    
  },
  onClick:function()
  {
    wx.navigateTo(
      {
        url:'page?title=新页面'
      }
    )
  } 

  
})
