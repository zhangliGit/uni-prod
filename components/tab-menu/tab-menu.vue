<template>
	<view class="tab-menu u-fx u-bd-b">
    <view @tap="change(index)" :class="['u-fx-f1',{'act': currentIndex === index, 'u-bd-l': index !== 0}]" v-for="(tab, index) in dataList" :key="index">
      {{tab.name}}
    </view>
	</view>
</template>

<script>
	export default {
    props: {
      current: {
        type: Number,
        default: 0
      },
      dataList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
		data() {
			return {
        currentIndex: this.current
			}
		},
		methods: {
      change (index) {
        this.currentIndex = index
      }
		}
	}
</script>

<style lang="scss" scoped>
  .tab-menu {
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    background-color: $u-type-white;
    color: $u-content-color;
    .act {
      font-weight: bold;
      background-color: $u-type-primary;
      color: $u-type-white
    }
  }
</style>
