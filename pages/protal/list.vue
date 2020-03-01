<template>
	<view class="list">
		<view @click="goDetail" class="list-item" v-for="item in 30" :key="item">
			我是第{{ item }} 条数据
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        title: '555'
			}
		},
    created () {
    },
		onLoad (params) {
			console.log(params.name)
		},
    onPullDownRefresh() {
    	setTimeout(() => {
    		uni.stopPullDownRefresh()
    	}, 2000)
    },
    mounted () {
      console.log(999)
    },
		methods: {
			goDetail () {
				uni.navigateTo({
					url: './detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		.list-item {
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 15rpx;
		}
	}
</style>
