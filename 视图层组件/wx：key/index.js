//index.js
//获取应用实例
var app = getApp()
//  在数组中存在三个图像文件名
var imagePaths = ['../../images/scissors.png', '../../images/stone.png', '../../images/cloth.png'];
//  当前图像的索引
var imageIndex = 0;
Page({
  data: {
    condition:1>2,
    count:3,
    messages:['辽宁','北京','广东','湖北','广西'],
    objectArray:[
      {id:0, unique:'key0'},
      {id:1, unique:'key1'},
      {id:2, unique:'key2'},
      {id:3, unique:'key3'},
      {id:4, unique:'key4'},
      {id:5, unique:'key5'},   
    ],
    objectArray1:[
      {id:0, unique:'key0'},
      {id:1, unique:'key1'},
      {id:2, unique:'key2'},
      {id:3, unique:'key3'},
      {id:4, unique:'key4'},
      {id:5, unique:'key5'},   
    ],
    numberArray:[1,2,3,4],
    numberArray1:[1,2,3,4]
  },    
  switch:function(e) 
  {
    const length = this.data.objectArray.length;
    for(let i = 0; i < length;i++)
    {
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);

      // 交换两个数组元素值
      const temp = this.data.objectArray[x];
      this.data.objectArray[x] = this.data.objectArray[y];
      this.data.objectArray[y] = temp;
    }
   // 更新objectArray数组
   this.setData(
     {
       objectArray:this.data.objectArray
     }
   )
  },
  switch1:function(e) 
  {
    const length = this.data.objectArray1.length;
    for(let i = 0; i < length;i++)
    {
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);

      // 交换两个数组元素值
      const temp = this.data.objectArray1[x];
      this.data.objectArray1[x] = this.data.objectArray1[y];
      this.data.objectArray1[y] = temp;
    }
   // 更新objectArray数组
   this.setData(
     {
       objectArray1:this.data.objectArray1
     }
   ) 
  },
  addNumberToFront:function(e)
  {
     this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray);
     this.setData(
       {
         numberArray:this.data.numberArray
       }
     )
  },
  addNumberToFront1:function(e)
  {
     this.data.numberArray1 = [this.data.numberArray1.length + 1].concat(this.data.numberArray1);
     this.setData(
       {
         numberArray1:this.data.numberArray1
       }
     )
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