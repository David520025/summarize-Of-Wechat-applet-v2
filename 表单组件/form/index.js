Page(
  {
    data:
    {    
   

    },
    formSubmit:function(e)
    {
      console.log('form发生了submit事件，数据为：',e.detail.value)
       console.log('slider：',e.detail.value.slider)
    },
    formReset:function(e)
    {
      console.log('form发生了Reset事件：', e.detail)
    }
   
  }
)
