var allData = require('../../../utils/Data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // datas:[],
    // id:'',
    curIndex:0,
    num:1,
    navs:[
      {"key":"商品详情"},
      { "key": "产品参数"},
      { "key": "售后保障"}
    ],
    showIcon:false,
    allNums:0,
    scaleCart:false
  },
  changeNav:function(e){
      console.log(e);
      var thisIndex = e.currentTarget.dataset.index;
      this.setData({
        curIndex: thisIndex
      })
  },
  addcount:function(){
    console.log('add')
    var num = this.data.num;
    num++; 
    this.setData({
      num: num
    })
  },
  increS:function(){
    var num = this.data.num;
    if (num == 1) {
      return;
    }
    num--;
    this.setData({
      num: num
    })
  },
  addToCart:function(){
    var _this = this;
    var num = this.data.num;
    var total = this.data.allNums
    this.setData({
      showIcon:true
    })
    setTimeout(function(){
      _this.setData({
        showIcon: false,
        scaleCart:true
      });
      setTimeout(function(){
        _this.setData({
          hasNum: true,
          scaleCart: false,
          allNums: total+num
        });
      },200)
    },300)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      datas: allData.homeJson.items,
      id: options.datas,
      items: {}
    })
    this.data.datas.forEach((item,index)=>{
      if (this.data.id==item.id){
        console.log(item);
        this.setData({
           items:item
        })
        // this.data.items = item;
      }
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
    // wx.setStorageSync('shops', [])
    this.data.items.num = this.data.allNums;
    var oldData = wx.getStorageSync('shops')
    oldData ? oldData : oldData=[]
    console.log(oldData);
    // return;
    if (this.data.items.num>0){
      var newData = oldData;
      newData.push(this.data.items)
      console.log(newData);
      wx.setStorageSync('shops', newData)
    }else{

    }

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