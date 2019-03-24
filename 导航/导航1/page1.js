
Page({
    data: {
        value: 1
    },
    onLoad: function (option) {
        wx.setNavigationBarTitle({ title: option.title + "page1" })
    },
    onClick_navigateBack: function () {
        var that = this;
       console.log(this.data.value)
        wx.navigateBack({
            delta: that.data.value
        })
    },
    charInput:function(res)
    {
        this.setData(
            {
                value:parseInt(res.detail.value)   //  一定要转换为int类型的值
            }
        )
    }
}
)