
Page({
  data: {
    networkType: ''
  },
  onClick_NetworkType: function () {
    var that = this;
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        that.setData(
          {
            networkType:res.networkType
          }
        )
         
      }
    })
  }
}
)