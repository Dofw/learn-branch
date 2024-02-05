// 该方案基于 page-meta 使用 rem 单位。
module.exports = Behavior({
  data: {
    fontSize: '14px'
  },
  pageLifetimes: {
    show() {
      // 获取计算后的fontSzie
      const remSize = wx.getStorageSync('remSize')
      this.setData({
        fontSize: remSize + 'px'
      })
    }
  }
})