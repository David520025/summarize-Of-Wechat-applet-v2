
Page({
  data: {
    code: '',
    scanType:'',
    charSet:'',
    path:''
  },
  onClick_ScanCode: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        that.setData(
          {
            code:res.result,
            scanType:res.scanType,
            charSet:res.charSet,
            path:res.path
          }
        )
      }
    })
  }
}
)