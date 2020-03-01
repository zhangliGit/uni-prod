<template>
  <view class="home">
    <view class="banner">
    	<swiper class="swiper" :indicator-active-color="actColor" :indicator-color="autoColor" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval">
    		<swiper-item><view class="swiper-itemA">{{ title }}</view></swiper-item>
    		<swiper-item><view class="swiper-itemB"></view></swiper-item>
    		<swiper-item><view class="swiper-itemC"></view></swiper-item>
    	</swiper>
    </view>
    <view @click="goDetail" class="list-item" v-for="data in dataList" :key="data.id">
    	<text>{{ data.name }}</text>
    </view>
  </view>
</template>

<script>
  import { actions } from './store/index.js'
  export default {
    data () {
      return {
        autoColor: 'rgba(0, 0, 0, .2)',
        actColor: '#ffffff',
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        dataList: [],
        title: 'hehe'
      }
    },
    methods: {
    	tabChange(index) {
    		console.log(index)
    	},
    	goDetail() {
        uni.navigateTo({
            url: './list?name=zhangli&age=23'
        })
    	}
    },
    async mounted() {
    	const res = await actions.getIndex()
    	this.dataList = res.data
    }
  }
</script>

<style lang="scss">
  .banner {
  	height: 300rpx;
  	width: 100%;
  	.swiper {
  		height: 300rpx;
  		view {
  			height: 300rpx;
  		}
  	}
  	.swiper-itemA {
  		background-color: #808080;
  	}
  	.swiper-itemB {
  		background-color: #2C405A
  	}
  	.swiper-itemC {
  		background-color: #4CD964;
  	}
  }
  .list-item {
  	line-height: 100rpx;
  	color: $uni-color-primary;
  	padding: 0 10px;
  }
</style>
