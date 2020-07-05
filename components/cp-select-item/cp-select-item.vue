<template>
	<u-popup :maskCloseAble="true" mode="bottom" :popup="false" v-model="value" length="auto" @close="close" :z-index="uZIndex">
		<view class="u-datetime-picker" @tap.stop>
			<view class="u-picker-header" @touchmove.stop.prevent="stop" catchtouchmove="stop">
				<view class="u-btn-picker u-tips-color" hover-class="u-opacity" :hover-stay-time="150"
				 @tap="getResult('cancel')">取消</view>
				 <view>{{ title }}</view>
				<view class="u-btn-picker u-type-primary" hover-class="u-opacity" :hover-stay-time="150"
				 @touchmove.stop="" @tap.stop="getResult('confirm')">确定</view>
			</view>
			<view class="u-picker-body">
				<picker-view :value="valueArr" @change="change" class="u-picker-view">
					<picker-view-column>
						<view class="u-column-item" v-for="item in items" :key="item.key">
							<view class="u-line-1">
								{{item.label}}
							</view>
						</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</u-popup>
</template>

<script>
	export default {
		name: "uni-select",
		props: {
			// 通过双向绑定控制组件的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: '请选择'
			},
			items: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				valueArr: [0],
				uZIndex: 9999
			}
		},
		mounted() {
		},
		methods: {
			close() {
				this.$emit('input', false);
			},
			// 用户更改picker的列选项
			change(e) {
				this.valueArr = e.detail.value;
			},
			// 用户点击确定按钮
			getResult(event = null) {
				if (event === 'confirm') {
					this.$emit(event, this.items[this.valueArr[0]]);
				} 
				this.close();
			}
		}
	}
</script>

<style lang="scss">
	.u-datetime-picker {
		position: relative;
		z-index: 999;
	}

	.u-picker-view {
		height: 100%;
		box-sizing: border-box;
	}

	.u-picker-header {
		width: 100%;
		height: 90rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		font-size: 32rpx;
		background: #fff;
		border-bottom: 1px #eaeef1 solid;
		position: relative;
	}
	.u-picker-header::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.u-picker-body {
		width: 100%;
		height: 500rpx;
		overflow: hidden;
		background-color: #fff;
	}

	.u-column-item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		color: $u-main-color;
		padding: 0 8rpx;
	}

	.u-text {
		font-size: 24rpx;
		padding-left: 8rpx;
	}

	.u-btn-picker {
		padding: 16rpx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
	}

	.u-opacity {
		opacity: 0.6;
	}
</style>
