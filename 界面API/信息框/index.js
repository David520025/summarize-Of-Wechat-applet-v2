
Page({
  data: {

  },
  onClick_ShowToast: function () {

    wx.showToast({
      title: '装载装载',
      icon: 'loading',  // success
      duration: 2000
    })
  },
  onClick_HideToast: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
  onClick_ShowModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  onClick_ShowActionSheet: function () {
    wx.showActionSheet({
      itemList: ['Item1', 'Item2', 'Item3'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
}
)