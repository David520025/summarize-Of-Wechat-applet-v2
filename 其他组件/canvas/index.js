var items = ['第一项','第二项','第三项','第四项'];
Page({
  data:{
   
  } ,
  onReady:function(e)
  {
    var context = wx.createContext();
    context.setStrokeStyle("#0000ff");
    context.setLineWidth(5);
    context.rect(0,0,200,200);
    context.stroke();
    context.setStrokeStyle("#ff00ff");
    context.setLineWidth(2);
    context.moveTo(160,100);
    context.arc(100,100,60,0,2*Math.PI,true)
    context.moveTo(140,100);
    context.arc(100,100,40,0,Math.PI,false);
    context.moveTo(85,80);
    context.arc(80,80,5,0,2*Math.PI,true);
    context.moveTo(125,80);
    context.arc(120,80,5,0,2*Math.PI,true);
    context.stroke();

    wx.drawCanvas(
      {
        canvasId:'mycanvas',
        actions:context.getActions()
      }
    )
   

  }  


})  