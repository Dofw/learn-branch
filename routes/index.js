// 自定义路由 - type类型见官网：https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/custom-route.html

/**
 * 
 * @param {*} routeContext 
 */
const routeConfigFactory = (routeContext) => {

  // 个人配置
  const _self = {
    a: '1'
  }
  return  factory(routeContext, _self)
}

const factory = (routeContext, _self) => {
  const {primaryAnimation, primaryAnimationStatus } = routeContext
  // 当前页面的进入/退出动画，返回 StyleObject - (自身)
  const handlePrimaryAnimation = () => {
    'worklet'
    const t = primaryAnimation.value
    return {
      opacity: t
    }
  }
  // 压入/压出动画，返回 StyleObject - (自身)
  const handleSecondaryAnimation = () => {
    'worklet'
    return {
    }
  }
  // 基础库3.0.0，起支持.处理上一级页面的压入/压出动画， 解决 同一个页面 跳转不同页面 需要不同动画形式（给不同页面设置previous就可以。）
  const handlePreviousPageAnimation = ()=> {
    'worklet'
    return {
    }
  }

  return {
    qpaque: false, // 不显示前一个页面
    maintainState: true, // 保持前一个页面状态
    transitionDuration: 1000, // 推入动画时常
    reverseTransitionDuration: 1000, // 推出动画时常
    barrierColor: '#999', // 遮罩层背景色
    barrierDismissible: true, // 点击遮罩层返回上一页
    canTransitionTo: true, // 是否和下一个页面联动，决定当前页secondaryAnimation是否生效
    canTransitionFrom: true, // 是否和前一个页面联动，...
    handlePrimaryAnimation,
    handleSecondaryAnimation,
    // handlePreviousPageAnimation: handlePreviousPageAnimation,
    allowEnterRouteSnapshotting: true, // 页面进入时，是否采用snapshot模式优化动画性能。
    allowExitRouteSnapshotting: true, // 页面退出时，...
    fullscreenDrag: true, // 右滑返回时，可拖动范围是否撑满屏幕，常用于半屏弹窗。
  }
}

let hasInstallRouteBuiler = false
const installRouteBuilder = () =>{
  if(hasInstallRouteBuiler) return
  wx.router.addRouteBuilder('customRoute', routeConfigFactory)
  hasInstallRouteBuiler = true
}

module.exports = {
  installRouteBuilder
}
 