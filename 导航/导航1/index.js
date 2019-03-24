
Page({
  data: {

  },
  onClick_setNavigationBarTitle: function () {
    wx.setNavigationBarTitle({
      title: '天气预报'
    })

  },
  onClick_showNavigationBarLoading: function () {
    wx.showNavigationBarLoading();
  },
  onClick_hideNavigationBarLoading: function () {
    wx.hideNavigationBarLoading();
  },
  onClick_navigateTo: function () {
    wx.navigateTo({
      url: 'page?title=新页面'
    })
  },
  onClick_redirectTo: function () {
    wx.redirectTo({
      url: 'page?title=redirectTo'
    })
  }
}
)