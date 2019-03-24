
Page({

  onReady: function () {
    this.context = wx.createCanvasContext('canvas')

  },
 
  onPullDownRefresh: function(){
    console.log('PullDown')
  //  wx.stopPullDownRefresh()
  },

  draw: function () {
    this.context.moveTo(10, 10)
    //  绘制直线
    this.context.lineTo(100, 10)
    this.context.setFillStyle('red')
    //  绘制矩形
    this.context.rect(10, 30, 150, 75)

    this.context.moveTo(350, 75)
    this.context.arc(300, 75, 50, 0, 2 * Math.PI)

    this.context.fill()
    this.context.setFillStyle('blue')
    this.context.setFontSize(20)
    this.context.fillText('极客起源', 20, 160)
    this.context.fillText('http://geekori.cn', 150, 160)

    this.context.stroke()
    this.context.draw()
  },
  drawQuadraticCurveTo: function () {


    // Draw points
    this.context.beginPath()
    this.context.arc(20, 20, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('red')
    this.context.fill()

    this.context.beginPath()
    this.context.arc(200, 20, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('green')
    this.context.fill()

    this.context.beginPath()
    this.context.arc(20, 100, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('blue')
    this.context.fill()

    this.context.setFillStyle('black')


    // Draw guides
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.lineTo(20, 100)
    this.context.lineTo(200, 20)
    this.context.setStrokeStyle('#AAAAAA')
    this.context.stroke()

    // Draw quadratic curve
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.quadraticCurveTo(20, 100, 200, 20)
    this.context.setStrokeStyle('black')
    this.context.stroke()

    this.context.draw()


  },
  drawBezierCurveTo: function () {


    // Draw points
    this.context.beginPath()
    this.context.arc(20, 20, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('red')
    this.context.fill()

    this.context.beginPath()
    this.context.arc(200, 20, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('green')
    this.context.fill()

    this.context.beginPath()
    this.context.arc(20, 100, 2, 0, 2 * Math.PI)
    this.context.arc(200, 100, 2, 0, 2 * Math.PI)
    this.context.setFillStyle('blue')
    this.context.fill()

    this.context.setFillStyle('black')


    // Draw guides
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.lineTo(20, 100)
    this.context.lineTo(150, 75)

    this.context.moveTo(200, 20)
    this.context.lineTo(200, 100)
    this.context.lineTo(70, 75)
    this.context.setStrokeStyle('#AAAAAA')
    this.context.stroke()

    // Draw quadratic curve
    this.context.beginPath()
    this.context.moveTo(20, 20)
    this.context.bezierCurveTo(20, 100, 200, 100, 200, 20)
    this.context.setStrokeStyle('black')
    this.context.stroke()

    this.context.draw()

  },
  drawShallow: function () {
    this.context.setFillStyle('red')
    this.context.setShadow(10, 50, 50, 'blue')
    this.context.fillRect(10, 10, 150, 75)
    this.context.draw()
  },
  drawImage: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        that.context.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        that.context.draw()
      }
    })
  },
  drawScale: function () {
    this.context.strokeRect(10, 10, 25, 15)
    this.context.scale(2, 2)
    this.context.strokeRect(10, 10, 25, 15)
    this.context.scale(2, 2)
    this.context.strokeRect(10, 10, 25, 15)
    this.context.scale(2, 1.2)
    this.context.strokeRect(10, 10, 25, 15)
    this.context.draw()
  },
  drawRotate: function () {
    this.context.strokeRect(100, 10, 150, 100)
    this.context.rotate(20 * Math.PI / 180)
    this.context.strokeRect(100, 10, 150, 100)
    this.context.rotate(20 * Math.PI / 180)
    this.context.strokeRect(100, 10, 150, 100)

    this.context.draw()
  },
  drawTranslate: function () {
    this.context.strokeRect(10, 10, 150, 100)
    this.context.translate(20, 20)
    this.context.strokeRect(10, 10, 150, 100)
    this.context.translate(20, 20)
    this.context.strokeRect(10, 10, 150, 100)

    this.context.draw()
  },
  drawGradient: function () {
  /*  const gradient1 = this.context.createLinearGradient(0, 0, 200, 0)
    gradient1.addColorStop(0, 'red')
    gradient1.addColorStop(1, 'white')

    // Fill with gradient
    this.context.setFillStyle(gradient1)
    this.context.fillRect(10, 10, 150, 80)
    this.context.draw()*/
    const gradient2 = this.context.createCircularGradient(75, 70, 50)
    gradient2.addColorStop(0, 'red')
    gradient2.addColorStop(1, 'white')

    // Fill with gradient
    this.context.setFillStyle(gradient2)
    this.context.fillRect(10, 10, 150, 150)
    this.context.draw()
  }

}
)