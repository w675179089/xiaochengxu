var datas = require('../../../utils/Data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { item: '果味', id: 'guowei' },
      { item: '蔬菜', id: 'shucai' },
      { item: '炒货', id: 'chaohuo' },
      { item: '点心', id: 'dianxin' },
      { item: '粗茶', id: 'cucha' },
      {item:'淡饭',id:'danfan'}
    ],
    activeIndex:0,
    toView:'guowei',
    contents:[]
  },
  switchTab:function(e){
    console.log(e)
    this.setData({
      activeIndex: e.target.dataset.index,
      toView: e.target.dataset.id
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detail: [
        {
          "id": "guowei",
          "banner": "/image/c1.png",
          "cate": "果味",
          "detail": [
            {
              "id": 0,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 0,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "shucai",
          "banner": "/image/c1.png",
          "cate": "蔬菜",
          "detail": [
            {
              "id":0,
              "thumb": "/image/s4.png",
              "name": "瓜子 100g"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 2,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 2,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 0,
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        },
        {
          "id": "chaohuo",
          "banner": "/image/c1.png",
          "cate": "炒货",
          "detail": [
            {
              "id": 0,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 0,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "dianxin",
          "banner": "/image/c1.png",
          "cate": "点心",
          "detail": [
            {
              "id": 0,
              "thumb": "/image/s4.png",
              "name": "瓜子 3个"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 2,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 0,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 2,
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        },
        {
          "id": "cucha",
          "banner": "/image/c1.png",
          "cate": "粗茶",
          "detail": [
            {
              "id": 0,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 0,
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "id": 1,
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "id": 2,
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "danfan",
          "banner": "/image/c1.png",
          "cate": "淡饭",
          "detail": [
            {
              "id": 0,
              "thumb": "/image/s4.png",
              "name": "瓜子 3个"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 2,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 0,
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "id": 1,
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "id": 2,
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        }
      ]
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