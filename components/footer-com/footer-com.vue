<template>
	<view class="footer-com qui-fx qui-bd-t">
		<view @click="switchTab(foot.id)" class="qui-fx-f1 qui-fx-ac-jc" :class="{ 'act': foot.id === currentIndex }" v-for="foot in footList" :key="foot.id">
			<i :class="`iconfont ${foot.icon}`"></i>
			<text class="tip">{{ foot.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			footList: [
				{
					id: 0,
					name: '首页',
          icon: 'q-iconzhuye'
				},
				{
					id: 1,
					name: '应用',
          icon: 'q-iconyingyong'
				},
				{
					id: 2,
					name: '消息',
          icon: 'q-iconxiaoxi'
				},
				{
					id: 3,
					name: '我的',
          icon: 'q-iconwode1'
				}
			]
		}
	},
	methods: {
		switchTab (index) {
			this.currentIndex = index
			this.$emit('tabChange', index)
		}
	}
}
</script>

<style lang="scss">
.footer-com {
	width: 100%;
	height: 100rpx;
	background-color: #ffffff;
  .tip {
    transform: scale(0.9);
    font-size: 24rpx;
  }
	.act {
		color: #007AFF;
	}
}
</style>
