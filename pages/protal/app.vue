<template>
  <view class="app">
    <uni-calendar 
      :insert="true"
      :lunar="true" 
      :start-date="'2020-2-2'"
      :end-date="'2020-2-20'"
      @change="change"
     ></uni-calendar>
  </view>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      change (date) {
        console.log(date)
      }
    }
  }
</script>

<style>
</style>
