var Data = require('../../utils/Data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval:3000,
    duration:1000,
    swiperImg:[
      { image: "/image/bn1.jpg",details:4},
      { image: "/image/bn2.jpg", details: 5 },
      { image: "/image/bn3.jpg", details: 6 }
    ],
    homeJson:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   utl:"/json/home.json",//无法获取本地json 需要本地搭建https服务器，此处通过把json写在Data.js向外暴露接口获取
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
   
    this.setData({
      homeJson:Data.homeJson.items
    })
    console.log(this.data.homeJson)
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