// pages/detail/index.js
const adapter = require('../../behaviors/adapter-page-meta.js')

Component({
  behaviors: [adapter],
  pageLifetimes: {
    async show() {
      let tabbar
      typeof this.getTabBar === 'function' && (tabbar = this.getTabBar())
      tabbar?.init()
    }
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  methods: {
    jumpUser() {
      wx.navigateTo({
        url: '/pages/user/index',
      })
    }
  }
})