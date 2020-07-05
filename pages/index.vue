<template>
	<view class="qui-page login u-bg-fff">
    <u-button type="primary" @click="goApp">主页</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	computed: {},
	components: {},
	mounted() {
	},
	methods: {
    goApp () {
      this.$tools.navTo({
        url: './protal/main'
      })
    }
	}
};
</script>

<style lang="scss" scoped>
</style>
