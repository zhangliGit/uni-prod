<template>
  <view class="message">
    <button type="primary" @click="goList">门禁系统</button>
  </view>
</template>

<script>
  export default {
    methods: {
      goList () {
        uni.navigateTo({
          url: '/pages/door/index'
        })
      }
    }
  }
</script>

<style lang="scss">
  .message {
    padding: 30rpx
  }
</style>
