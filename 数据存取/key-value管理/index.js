Page({
  data: {
    key: '',
    data: ''
  },
  saveKeyValue: function () {
    var that = this;

    wx.setStorage({
      key: that.data.key,
      data: that.data.data,
      success: function (res) {
        console.log('异步成功保存了key-value值');

      }
    })
  },
  loadKeyValue: function () {
    var that = this;
    wx.getStorage({
      key: that.data.key,
      success: function (res) {
        that.setData(
          {
            data: res.data
          }
        )
      }
    })
  },
  syncSaveKeyValue: function () {
    try {
      wx.setStorageSync(this.data.key, this.data.data)
    } catch (e) {
    }
  },
  syncLoadKeyValue: function () {
    try {
      var value = wx.getStorageSync(this.data.key)
      this.setData(
        {
          data: value
        }
      )
      console.log(value);
    }
    catch (e) {
      // Do something when catch error
    }
  },
  getStorageInfo: function () {
    /*  wx.getStorageInfo({
        success: function (res) {
          console.log(res.keys)
          console.log(res.currentSize)
          console.log(res.limitSize)
        }
      })*/
    try {
      var res = wx.getStorageInfoSync()
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    } catch (e) {
      // Do something when catch error
    }
  },
  removeStorage: function () {
    /*  var that = this;
      wx.removeStorage({
        key: that.data.key,
        success: function (res) {
          console.log('移除成功')
        }
      })*/

    try {
      wx.removeStorageSync(this.data.key)
      console.log('用同步的方式成功移除key');
    } catch (e) {
      // Do something when catch error
    }
  },

  clearStorage: function () {
    //   wx.clearStorage()
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
  },
  keyChange: function (e) {
    this.setData({
      key: e.detail.value
    })
  },
  dataChange: function (e) {
    this.setData({
      data: e.detail.value
    })
  }

})