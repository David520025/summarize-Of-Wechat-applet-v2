
Page({
  data: {
    model: '',
    pixelRatio: 0,
    windowWidth: 0,
    windowHeight: 0,
    language: '',
    version: '',
    system: '',
    platform: ''
  },
  onClick_SystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData(
          {
            model: res.model,
            pixelRadio: res.pixelRatio,
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight,
            language: res.language,
            version: res.version,
            system: res.system,
            platform: res.platform
          }
        )
      }
    })
  },
  onClick_SystemInfoSync: function () {
    var res = wx.getSystemInfoSync()
    this.setData(
      {
        model: res.model,
        pixelRadio: res.pixelRatio,
        windowWidth: res.windowWidth,
        windowHeight: res.windowHeight,
        language: res.language,
        version: res.version,
        system: res.system,
        platform: res.platform
      }
    )
  }

}
)