<template>
	<view class="detail">
		{{ total }}门禁系统，包括校大门，宿舍，班级，食堂四个门，全方位的保证学生以及教职工的安全
	</view>
</template>

<script>
  import { store } from './store/index.js'
	export default {
		data() {
			return {
			}
		},
    computed: {
      total: () => store.total
    },
		methods: {
		}
	}
</script>

<style lang="scss">
  .detail {
    color: #444;
    padding: 20rpx;
    line-height: 60rpx;
  }
</style>
