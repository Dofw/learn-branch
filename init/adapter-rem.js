/**
 * 1. rem适配方案
 * 将适配计算的1rem字体大小存储在本地。
 */
const DESIGN_WIDTH = 375
const adaptConf = {
  designWidth: DESIGN_WIDTH,
  pieces: DESIGN_WIDTH / 10, // 设计稿中 如350px, 转化为35rem。 列数:设计宽度/10. 
}

const computedRem =  () => {
  const {screenWidth} = wx.getWindowInfo()
  const rem = screenWidth / adaptConf.pieces
  wx.setStorageSync('remSize', rem)
}

const rem2px = (inputRem) => {
  const rem = wx.getStorageSync('remSize') || 16 // 默认值16px
  return rem * inputRem
}

module.exports = {
  computedRem,
  rem2px
}