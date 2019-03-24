Page(
  {
    data:
    {    
      radioItems:[
        {name:'USA', value:'美国', margin:10},
        {name:'CHN', value:'中国', checked:'true', margin:20},
        {name:'BRA', value:'巴西', margin:30},
        {name:'JPN', value:'日本', margin:40},
        {name:'ENG', value:'英国', margin:50},
        {name:'FRA', value:'法国', margin:60}
      ]

    },
    radioChange:function(e)
    {
      console.log('radio发生change事件，value值为：', e.detail.value)
    }
  
  }
)
