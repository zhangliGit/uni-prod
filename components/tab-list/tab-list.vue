<template>
	<view class="u-type-white-bg u-of">
    <view @tap="action(tab)" v-for="(tab, index) in dataList" :key="index" :style="{width: (100/number) + '%'}" :class="['tab-list u-fx-ac-jc u-float u-padd', {'tab-bor': border}]">
      <u-badge class="u-zIndex" v-if="tab.total" size="small" type="error" :count='tab.total'></u-badge>
      <image class="tab-img" :src="autoMenu"></image>
      <view class="u-font-01 u-content-color u-mar-t10">
        {{tab.name}}
      </view>
    </view>
	</view>
</template>

<script>
  import autoMenu from '../images/auto-menu.png'
	export default {
    props: {
      border: {
        type: Boolean,
        default: false
      },
      number: {
        type: Number,
        default: 4
      },
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
        autoMenu
			}
		},
		methods: {
      action (item) {
        this.$emit('action', item)
      }
		}
	}
</script>

<style lang="scss" scoped>
  .tab-list {
    position: relative;
    .tab-img {
      width: 72rpx;
      height: 72rpx;
      display: block;
    }
    &.tab-bor {
      border-right: 1px $u-border-color-light solid;
      border-bottom: 1px $u-border-color-light solid;
    }
  }
</style>
