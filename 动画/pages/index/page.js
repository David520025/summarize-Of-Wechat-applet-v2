
Page({
    data: {
        value: 1
    },
    onLoad: function (option) {
        wx.setNavigationBarTitle({ title: option.title + "page" })
    },
    onClick_navigateBack: function () {
        var that = this;

        wx.navigateBack({
            delta: that.data.value
        })
    },
    charInput: function (res) {
        this.setData(
            {
                value:parseInt(res.detail.value)
            }
        )
    },
    onClick_navigateTo: function () {
        wx.navigateTo({
            url: 'page1?title=新页面'
        })
    }
}
)