// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name" : "北京",
    "age": 28,
    "students":[
      {id:100,"name":"lisi","age":10},
      {id:120,"name":"wangwu","age":20},
      {id:130,"name":"zhangsan","age":40}
    ],
    "count": 0
  },
  countInsc(){
    this.setData({
      count: this.data.count +1
    })
  },
  countDesc() {
    this.setData({
      count: this.data.count -1
    })
  }
  
})