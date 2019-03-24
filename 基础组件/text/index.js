var initData = '第一行\n第二行'
Page(
  {
    data:
    {
      text:initData,    // 文本的初始数据
      color:'#ff0000'   //  文本的初始颜色
    },
    extraLine:[],       //  用于保存追加的字符串
    add:function(e)
    {
      // 追加一个新行
      this.extraLine.push('新行' + (this.extraLine.length + 1));
      this.setData(
        {
          text:initData + '\n' + this.extraLine.join('\n')
        }
      )
    },
    remove:function(e)
    {
      //  如果有追加的行，从最后一行删除
      if(this.extraLine.length > 0)
      {
        this.extraLine.pop();
        this.setData(
          {
            text:initData + '\n' + this.extraLine.join('\n')
          }
        )
      }
    },
    setColor:function(e)
    {
      //  让文本颜色在红色和蓝色之间不断切换
      if(this.data.color == '#ff0000')
      {
        this.setData(
          {
            color:'#0000ff'
          }
        )
      }
      else
      {
        this.setData(
          {
            color:'#ff0000'
          }
        )
      }
    }

  }
)
