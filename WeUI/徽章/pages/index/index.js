//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    visibility: 'hidden',
    numBadge1: {
      imageSrc: '../images/p1.png',
      number: 24,
      showText: 'visible',
      title: '产品名称',
      detail:'产品详细信息'
    },
    numBadge2: {
      imageSrc: '../images/p2.png',
      number: 2,
      showText: 'hidden',
    },
    numBadge3: {
      imageSrc: '../images/p3.png',
      number: 'N',
      showText: 'visible',
      title: '2020-10-20',
      detail:'今天的详细情况'
    },
  },

  onClick_ControlDot: function () {
    if (this.data.visibility == 'hidden') {
      this.setData(
        {
          visibility: 'visible'
        }
      )
    }
    else {
      this.setData(
        {
          visibility: 'hidden'
        }
      )
    }
  }
})
