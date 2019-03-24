Page(
  {
    data:
    {
      focus:false,
      inputValue:""

    },
    
    bindButtonTap:function(e)
    {
      this.setData(
        {
          focus:true
        }
      )
    },
    bindKeyInput:function(e)
    {
      this.setData(
        {
          inputValue:e.detail.value
        }
      )
    },
    //  当输入<和>时，会自动转换为&lt;和&gt;
    bindReplaceInput:function(e)
    {
      var value = e.detail.value;
      console.log(value);
      //  获取光标的位置
      var pos = e.detail.cursor;
      if(pos != -1)
      {
        //  光标在中间
        var left = e.detail.value.slice(0, pos);  // ab<cd>fg   left:ab<  替换后：ab&lt;
        // 计算光标的位置
        pos = left.replace(/</g, '&lt;').replace(/>/g, '&gt;').length;
      }
      return{
        value:value.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
        cursor:pos
      }
    },
    bindHideKeyboard:function(e)
    {
      if(e.detail.value == "close")
      {
        //  收起软键盘
        wx.hideKeyboard();
      }
    }
  }
)
