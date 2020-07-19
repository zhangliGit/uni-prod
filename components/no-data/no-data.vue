<template>
	<view class="no-data u-fx-ac-jc">
		<image class="no-data-icon" :src="img || NoData" alt="" />
    <view class="u-padd-t10 u-light-color u-font-01">{{ msg }}</view>
    <u-button type="primary" v-if="isBtn" @tap="action" class="u-mar-t" style="height: 60rpx;">{{btnText}}</u-button>
	</view>
</template>

<script>
  import NoData from '../images/no-data.png'
	export default {
    props: {
      btnText: {
        type: String,
        default: '新增'
      },
      isBtn: {
        type: Boolean,
        default: false
      },
      img: {
        type: String,
        defautl: ''
      },
      msg: {
        type: String,
        default: '暂无数据~'
      }
    },
		data() {
			return {
        NoData
			}
		},
		methods: {
      action () {
        this.$emit('action')
      }
		}
	}
</script>

<style lang="scss" scoped>
  .no-data {
    padding: 40rpx 0;
    background-color: $u-type-white;
    .no-data-icon {
      width: 180rpx;
      height: 120rpx;
      display: block;
    }
  }
</style>
