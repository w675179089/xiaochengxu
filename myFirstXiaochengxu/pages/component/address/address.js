Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{
      name:'',
      tel:'',
      address:''
    },
    msg: ''
  },
  formSubmit:function(e){
    console.log(e)
    var value=e.detail.value;
    var _msg = ''
    if(!value.name){
      _msg = '请输入姓名'
    }else if(!value.tel){
      _msg = '请输入电话'
    } else if (!value.address) {
      _msg = '请输入住址'
    }else {
      _msg = ''
      wx.setStorage({
        key: 'address',
        data: value,
        success:function(){
          wx.showModal({
            title: '提示',
            content: '设置成功',
            success:function(res){
              if (res.confirm){
                wx.navigateBack();
              }
            }
          })
        }
      })
    }
    this.setData({
      msg:_msg
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var _this = this
    wx.getStorage({
      key: 'address',
      success: function(res) {
        console.log(res)
        _this.setData({
          datas:res.data
        })
      },
    })
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