<template>
	<scroll-view @refresherpulling="haha" scroll-y="true" @scrolltolower="showList(true)" class="scroll-h">
    <view v-for="list in dataList" :key="list.id" class="list qui-bd-b qui-fx-jsb">
      <text>{{ list.name }}</text>
      <text>{{ list.number }}</text>
    </view>
	</scroll-view>
</template>

<script>
  import { actions } from './store/index.js'
	export default {
		data() {
			return {
        dataList: []
			}
		},
    onPullDownRefresh() {
      this.showList()
    },
    mounted() {
      this.showList()
    },
		methods: {
      async showList (tag = false) {
        const res = await actions.getIndex()
        if (tag) {
          this.dataList = this.dataList.concat(res.data)
        } else {
          this.dataList = res.data
          uni.stopPullDownRefresh()
        }
      }
		}
	}
</script>

<style lang="scss">
  .list {
    padding: 25rpx 20rpx;
  }
  .scroll-h {
    height: 100vh;
  }
</style>
