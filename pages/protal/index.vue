<template>
	<view class="qui-page qui-fx-ver">
		<scroll-view scroll-y="true" class="scroll-h">
			<home v-if="currentIndex === 0"></home>
      <app v-else-if="currentIndex === 1"></app>
      <message v-else-if="currentIndex === 2"></message>
      <mine v-else-if="currentIndex === 3"></mine>
		</scroll-view>
		<footer-com @tabChange="tabChange"></footer-com>
	</view>
</template>

<script>
import home from './home.vue'
import app from './app.vue'
import message from './message.vue'
import mine from './mine.vue'
export default {
	data() {
		return {
      currentIndex: 0
		}
	},
  components: {
    home,
    app,
    message,
    mine
  },
	methods: {
		tabChange(index) {
      this.currentIndex = index
		}
  }
}
</script>

<style lang="scss">
  .scroll-h {
  	height: calc(100vh - 100rpx);
  }
</style>
