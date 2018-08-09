Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImage:'/image/s4.png',
    userName:'初始化',
    hasAddress:false,
    address:'',
    payOrders:'',
    sendStatus:'待发货'
  },
  changeImg:function(e){
    console.log(e);
    var _this = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            console.log(savedFilePath)
            _this.setData({
              userImage: savedFilePath
            })
          }
        })

      }
    })
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
    var _this = this
    setTimeout(function(){
      _this.setData({
        sendStatus:'已发货'
      })
    },3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this
    var payData = wx.getStorageSync('payOrders');
    console.log(payData)
    this.setData({
      payOrders: payData
    });
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