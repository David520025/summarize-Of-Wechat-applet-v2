function formatLocation(longitude, latitude) {
  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}
Page({
  data: {
    location: ''

  },
  onClick: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      }
    })
  },
  chooseLocation: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log('位置名称：' + res.name)
        console.log('详细地址：' + res.address)
        console.log('纬度：' + res.latitude)
        console.log('精度：' + res.longitude)
      }
    })
  },
  openLocation: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          name: '沈阳',
          address: '市府广场',
          latitude: latitude,
          longitude: longitude,
          scale: 15
        })
      }
    })

  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  }
  ,
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }

}
)