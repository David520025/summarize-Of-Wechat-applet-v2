//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    downloadPath: '',
    userInfo: {}
  },
  downloadAndSavePdf: function () {
    var that = this;

    wx.downloadFile({
      url: 'https://geekori.com/download/test.pdf',
      success: function (res) {
        console.log(res.tempFilePath);
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath);
            that.setData({
              downloadPath: savedFilePath
            })
          }
        })
      }
      , fail: function (res) {
        console.log(res)
      }
    })
  },
  getSavedFileList: function () {
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
      }
    })
  },
  getSavedFileInfo: function () {
    wx.getSavedFileInfo({
      filePath: 'wxfile://store_1245245288o6zAJs2t5tIf5IgXSSAKZjRtz91g1486648006373.pdf',
      success: function (res) {
        console.log('文件尺寸：', res.size)
        console.log('文件创建时间：', res.createTime)
      }
    })
  },
  removeSavedFile: function () {
    wx.getSavedFileList({
      success: function (res) {
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete: function (res) {
              console.log(res)
            }
          })
        }  
      }
    })
  },
  openDocument: function () {
    wx.downloadFile({
      url: 'https://geekori.com/download/test.docx',
      success: function (res) {
        var filePath = res.tempFilePath 
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
            console.log(res)
          },
          fail:function(res){
            console.log('fail')
            console.log(res)
          },
          complete: function(res) {
            console.log('complete')
            console.log(res)
          }
        })
      },
      fail:function(res){
        console.log('fail')
        console.log(res)
      },
      complete: function(res) {
        console.log('完成')
        console.log(res)
      }
    })


  },
  onLoad: function () {
    console.log('onLoad')
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
