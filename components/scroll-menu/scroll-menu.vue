<template>
	<view class="scroll-menu u-fx u-padd u-type-white-bg u-scroll-x">
    <view v-for="i in 8" :key="i" class="scroll-box u-fx-ac-jc" @tap="change(index)">
      <image class="scroll-img" :src='NoOrder'></image>
      <view class="u-content-color u-mar-t10 u-tx-c">职场</view>
    </view>
	</view>
</template>

<script>
  import NoOrder from '../images/no-order.png'
	export default {
    props: {
      dataList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
		data() {
			return {
        NoOrder
			}
		},
		methods: {
      change (index) {
      }
		}
	}
</script>

<style lang="scss" scoped>
  .scroll-menu {
    white-space: nowrap;
    position: relative;
    font-size: 0;
    .scroll-box {
      font-size: $u-font-01;
      display: inline-block;
    }
    .scroll-img {
      width: 100px;
      height: 160rpx;
      display: block;
    }
  }
</style>
