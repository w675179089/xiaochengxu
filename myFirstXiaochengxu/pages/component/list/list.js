var datas = require('../../../utils/Data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num1 = parseInt( Math.random()*(9))
    var num2 = parseInt(Math.random() * (9))
    var newData= []
    if(num1>num2){
      newData=datas.homeJson.items.slice(num2,num1)
    } else if (num1 < num2){
      newData=datas.homeJson.items.slice(num1, num2)
    }else{
      newData = datas.homeJson.items.slice(2,6 )
    }
    console.log(num1+'--'+num2)
    this.setData({
      listData: newData
    });
    console.log(newData)
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