Page(
  {
    data:
    {
      items:[
        {name:'shenyang', value:'沈阳', checked:'true'},
        {name:'beijing', value:'北京'},
        {name:'hangzhou', value:'杭州'},
        {name:'xian', value:'西安'},
        {name:'wuhan', value:'武汉'},
        {name:'shenzhen', value:'深圳'},

      ]
    },
    checkboxChange:function(e)
    {
      console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
    }

  }
)
