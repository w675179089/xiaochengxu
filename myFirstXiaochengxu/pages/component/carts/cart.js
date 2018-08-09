Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAll:true,
   
    
  },
  selected:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index
    var carts = this.data.item;
    carts[index].selected = !carts[index].selected;
    var _this = this;
    var selectAllBol = false;//全选标志
      for(var i=0;i<carts.length;i++){
        if (!carts[i].selected) {
          selectAllBol = false;
          break;
        }
        selectAllBol = true;
      }
    this.setData({
      item: carts,
      selectAll: selectAllBol
    });
    this.getPrice()
  },
  jian:function(e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.item;
    var num = carts[index].num
    if (num<=1){
      return;
    }
    num--;
    carts[index].num = num;
    this.setData({
      item:carts
    });
    this.getPrice()
  },
  add: function (e) {
    var index = e.currentTarget.dataset.index;
    var carts = this.data.item;
    var num = carts[index].num
    num++;
    carts[index].num = num;
    this.setData({
      item: carts
    });
    this.getPrice()
  },
  deleteThis:function(e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.item;
    carts.splice(index,1);
    wx.setStorageSync('shops', carts);
    this.setData({
      item:carts
    });
    this.getPrice()
  },
  selecrAll:function(e){
    var allDta = this.data.item;
    var _this = this
    this.data.selectAll = !this.data.selectAll
    allDta.forEach(function(_item,index){
      _item.selected = _this.data.selectAll
    });
    this.setData({
      item: allDta,
      selectAll: _this.data.selectAll
    });
    this.getPrice()
  },
  toOrders:function(){
    var allData = this.data.item;
    console.log(allData)
    var orderData = []
    var noSelect = []
    allData.forEach(function (_item, index) {
      if (_item.selected){
        orderData.push(_item);
        // selectIndex.push(index)
      }else{
        noSelect.push(_item)
      }
    });
   if(orderData.length>0){
     wx.setStorageSync('orders', orderData)
     wx.setStorageSync('noSelect', noSelect)
     wx.navigateTo({
       url: '/pages/component/orders/orders'
     })
   }else{
     wx.showModal({
       title:'提示',
       content: '请选择商品'
     })
   }
  },
  getPrice:function(){
   
      var datas = this.data.item
      var _price = 0;
      datas.forEach(function(item,index){
        console.log(item.num + '---' + item.price)
        if(item.selected){
          _price += item.num * item.price;
        }
       
      }) 
      console.log(_price)
      this.setData({
        totalPrice: _price.toFixed(2)
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
    var bg=''
    if(this.data.item.length>0){
      bg = 'white'
    }else{
      bg = '#f4f4f4'
    }
    this.setData({
      bg: bg
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var thisData = wx.getStorageSync('shops');
    this.setData({
      item: thisData
    })
    console.log(thisData)
   if(thisData){
     this.getPrice()
   }
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