Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: true
    },
    homeButton: {
      type: Boolean,
      value: false,
    },
    animated: {
      // 显示隐藏的时候opacity动画效果
      type: Boolean,
      value: true
    },
    show: {
      // 显示隐藏导航，隐藏的时候navigation-bar的高度占位还在
      type: Boolean,
      value: true,
      observer: '_showChange'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    // 固定
    initContainerStyle: '',
    initContentStyle: '',
    initContentTitleStyle: '',
    iconSize: 20,
    // 动态
    opacityStyle:"",
  },
  lifetimes: {
    attached() {
      const {top, left, height, right, width} = wx.getMenuButtonBoundingClientRect()
      const {	screenWidth } = wx.getSystemInfoSync()
      const {rem2px} = getApp()
      const containerStyle  = {
        pt: `padding-top: ${top}px;`,
        transition: this.animated ? `transition: opacity 0.5s;` : "",
      }
      const contentStyle = {
        height: `height:${height}px;`,
        width: `width:${left - (screenWidth - right)}px;`, // 胶囊左右间距
      }
      const initContainerStyle = `${containerStyle.pt}${containerStyle.transition}`
      const initContentStyle = `${contentStyle.height}${contentStyle.width}`
      const initContentTitleStyle = `width: ${screenWidth - 2*(width + 2*(screenWidth - right))}px;`
      
      const iconSize = rem2px(2.5) // 2 是375设计稿 375/10 列 20px 对应的rem

      // 根据设备设置固定样式。
      this.setData({
        initContainerStyle,
        initContentStyle,
        initContentTitleStyle,
        iconSize
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _showChange(show) {
      console.log('show', show)
      const opacityStyle = `opacity: ${show ? '1': '0'};`
      this.setData({
        opacityStyle
      })
    },
    back() {
      this.triggerEvent('back')
    }
  },
})
