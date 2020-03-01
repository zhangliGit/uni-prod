/**
 * @description 公共函数模块
 */

const tools = {
  // 路由返回
  goBack(index = -1) {
    window.history.go(index)
  },
  // 删除提示
  delTip(msg = '确认进行此操作吗?', cb) {
    uni.showModal({
      title: '温馨提示',
      content: msg,
      success: function (res) {
        if (res.confirm) {
            cb()
        }
      }
    });
  },
  // 延迟执行
  goNext() {
  }
}

export default tools