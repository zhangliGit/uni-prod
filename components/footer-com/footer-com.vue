<template>
	<view class="footer-com u-fx u-bd-t u-type-white">
		<view @click="switchTab(index)" class="u-fx-f1 u-fx-ac-jc u-content-color" :class="{ 'act': index === currentIndex }" v-for="(foot,index) in dataList" :key="foot.id">
			<view class="footer-icon"></view>
			<text class="u-mar-t10 u-font-02">{{ foot.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    },
    current: {
      type: Number,
      default: 0
    }
  },
	data() {
		return {
			currentIndex: this.current,
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

<style lang="scss" scoped>
.footer-com {
	width: 100%;
	height: 100rpx;
  background-color: $u-type-white;
  .footer-icon {
    width: 40rpx;
    height: 40rpx;
    background-color: $u-bg-color;
  }
  .tip {
    font-size: 24rpx;
  }
	.act {
		color: $u-type-primary;
	}
}
</style>
