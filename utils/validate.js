/**
 * @description 基础表单验证提示
 * @author zhangli
 */

const validateForm = (yzForm, form, callBack) => {
  for (let val in form) {
    if (yzForm.hasOwnProperty(val)) {
      if (form[val] === '' || JSON.stringify(form[val]) === '[]' || JSON.stringify(form[val]).indexOf('请选择') > -1) {
				uni.showToast({
					title: yzForm[val],
					icon: 'none'
				});
        return
      }
    }
  }
  callBack()
}

export default validateForm
