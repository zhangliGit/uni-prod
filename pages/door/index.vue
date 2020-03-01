<template>
	<view class="home">
    <view class="list">人员总数：{{ total }}</view>
		<view @click="goDetail" v-for="list in dataList" :key="list.id" class="list qui-bd-b qui-fx-jsb">
      <text>{{ list.name }}</text>
      <text>{{ list.number }}</text>
    </view>
    <view class="btton">
      <button type="primary" @click="setTotal">获取总人数</button>
    </view>
    <view class="btton">
      <button type="primary" @click="goList">滚动列表</button>
    </view>
	</view>
</template>

<script>
  import { store, setStore, actions } from './store/index.js'
	export default {
		data() {
			return {
				dataList: []
			}
		},
    computed: {
      total: () => store.total
    },
    async mounted() {
      const res = await actions.getIndex()
      this.dataList = res.data
    },
    methods: {
      setTotal() {
        setStore({
          key: 'total',
          data: this.dataList.length
        })
      },
      goList () {
         uni.navigateTo({
           url: './list'
         })
      },
      goDetail() {
        uni.navigateTo({
          url: './detail'
        })
      }
    }
	}
</script>

<style lang="scss">
  .list {
    padding: 25rpx 20rpx;
  }
  .btton {
    padding: 20rpx
  }
</style>
