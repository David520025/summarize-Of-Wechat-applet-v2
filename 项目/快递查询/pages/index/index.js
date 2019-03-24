
Page({
  onTabItemTap(item) {
    console.log(item)

  },
  data: {
    express: [ '圆通快递','申通快递','顺丰快递','韵达快递','德邦物流','中通快递','百世快递','邮政包裹','EMS','邮政国际' ],
    key: [ 'yuantong','shentong','shunfeng','yunda','debangwuliu','zhongtong','huitongkuaidi','youzhengguonei','ems','youzhengguoji' ],
    index: 0,
    postId: '',
    data: [],
    loading: false
  },
  onLoad: function () {
    console.log(getCurrentPages())
  },

  bindExpressChange: function (e) {
      var that = this;
      console.log(that.data.key[e.detail.value]);
      that.setData({
        index: e.detail.value
      });
  },

  bindChangeInput: function(e) {
    this.setData({
      postId: e.detail.value
    });
  },

  bindOnSearch: function () {
    var that = this;
    var postId = that.data.postId;
    var type = that.data.key[that.data.index];
    if (!postId.length || !type.length) return;

    that.setData({
        loading: !that.data.loading
    });

    wx.request({
      // url: 'http(s)://kuaidi101.market.alicloudapi.com/'+type+'/'+postId,
      url: "https://m.kuaidi100.com/query?type=zhongtong&postid=75132983789816",
    //  https://m.kuaidi100.com/query?type=zhongtong&postid=75132983789816

      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({ 
          loading: !that.data.loading,
          data: res.data
        });
        console.error(res.data.data);
      }
    });
  } 
})
