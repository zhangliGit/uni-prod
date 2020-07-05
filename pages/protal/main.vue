<template>
	<view class="qui-fx-ver">
		<scroll-view scroll-y="true" class="scroll-h">
			<home v-if="tabIndex === 0"></home>
      <app v-else-if="tabIndex === 1"></app>
      <message v-else-if="tabIndex === 2"></message>
      <mine v-else></mine>
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
      tabIndex: 0
		}
	},
  computed: {
  },
	mounted () {
	},
  components: {
    home,
    app,
    mine,
    message
  },
	methods: {
    tabChange (index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss">
  .scroll-h {
  	height: calc(100vh - 188rpx);
  }
</style>