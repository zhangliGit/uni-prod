<template>
	<view class="no-data qui-fx-ac-jc">
		<image class="no-data-icon" src="/mobile-img/no-data.png" alt="" />
    <text class="msg">{{ msg }}</text>
	</view>
</template>

<script>
	export default {
    props: {
      msg: {
        type: String,
        default: '暂无数据~~'
      }
    },
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
  .no-data {
    padding: 40rpx 0;
    background-color: #fff;
    .no-data-icon {
      width: 280rpx;
      height: 220rpx;
      display: block;
    }
    .msg {
      color: #999;
      font-size: 24rpx;
      padding-top: 10rpx;
    }
  }
</style>
