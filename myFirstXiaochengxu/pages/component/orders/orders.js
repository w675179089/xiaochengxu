Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress:false,
    orders:[],
    address:{}
  },
  getPrice: function () {
    var datas = this.data.ordes
    var _price = 0;
    datas.forEach(function (item, index) {
      console.log(item.num + '---' + item.price)
      if (item.selected) {
        _price += item.num * item.price;
      }

    })
    console.log(_price)
    this.setData({
      totalPrice: _price.toFixed(2)
    })
  },
  toPay:function(){
    var _this = this
    if (this.data.hasAddress){
      wx.showModal({
        title: '提示',
        content: '测试系统只做演示，支付需于后台配合，此处点击确定既支付成功跳转',
        success: function (res) {
          if (res.confirm) {
            var oldpayOrders = wx.getStorageSync('payOrders', _this.data.ordes)
            oldpayOrders ? oldpayOrders : oldpayOrders=[]
            var newpayOrders = oldpayOrders.concat(_this.data.ordes)
            wx.setStorageSync('payOrders', newpayOrders)
            //支付成功后删除对应购物车下支付完成的商品,留下未支付的
            wx.getStorage({
              key: 'noSelect',
              success: function (res) {
                console.log(res.data);
                wx.setStorageSync('shops', res.data);
              }
            })
            wx.showModal({
              title: '提示',
              content: '支付成功',
              success:function(res){
                if (res.confirm){
                  wx.switchTab({
                    url: '/pages/component/user/user',
                  })
                }
              }
            })

          }
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请填写完整收货地址'
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var thisData = wx.getStorageSync('orders');
    this.setData({
      ordes: thisData
    })
    console.log(thisData)
    this.getPrice();

    var _this = this
    wx.getStorage({
      key: 'address',
      success: function (res) {
        _this.setData({
          address: res.data,
          hasAddress: true
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})