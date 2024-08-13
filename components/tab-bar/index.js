// custom-tab-bar/index.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    menuLists: [
      {
        key: 0,
        path: '/pages/index/index',
        text: '首页',
        icon: 'display'
      },
      {
        key: 1,
        path: '/pages/detail/index',
        text: '详情',
        icon: 'more'
      }
    ],
    curKey: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const {key} = e.currentTarget.dataset
      const curItem = this.data.menuLists.find(item => item.key === key)

      this.setData({
        curKey: key
      })
      wx.navigateTo({url: curItem.path, routeType: 'customRoute'})
    },
    init() {
      // 这里可以做权限设置
      let menuLists = JSON.parse(JSON.stringify(this.data.menuLists))

      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';

      if(`/${route}` === '/pages/detail/index'){
        menuLists = menuLists.filter(item => !item.role || !item.role.includes(1))
      }

      const curItem = menuLists.find((item) =>item.path === `/${route}`);
      this.setData({
        menuLists,
        curKey: curItem.key
      })
    }
  }
})