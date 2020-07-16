<template>
  <view class="u-page">
    <scroll-view scroll-y="true" class="u-scroll-h">
      <u-swiper :list="banner" height="400"></u-swiper>
      <view class="u-padd u-bg-fff"><u-alert-tips type="error" title="通知" description="明天星期五,马上就要放假啦"></u-alert-tips></view>
      <view v-for="i in 20" :key="i" class="u-mar-t u-fx-jsb u-padd-30 u-bg-fff u-bd-b u-shadow">
        <view class="u-font-1">我是谁</view>
        <view>不知道</view>
      </view>
      <u-popup v-model="show" mode="bottom" height="50%"><view>等闲变却故人心，却道故人心易变</view></u-popup>
    </scroll-view>
    <u-tabbar @change="change" v-model="current" :list="list" :mid-button="true"></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '昨夜星辰昨夜风，画楼西畔桂堂东'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
          title: '身无彩凤双飞翼，心有灵犀一点通'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
          title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
        }
      ],
      list: [
        {
          text: '点赞'
        },
        {
          text: '分享'
        },
        {
          text: '评论'
        }
      ],
      show: false,
      list: [
        {
          iconPath: 'home',
          selectedIconPath: 'home-fill',
          text: '首页',
          customIcon: false
        },
        {
          iconPath: 'photo',
          selectedIconPath: 'photo-fill',
          text: '放映',
          customIcon: false
        },
        {
          iconPath: 'https://cdn.uviewui.com/uview/common/min_button.png',
          selectedIconPath: 'https://cdn.uviewui.com/uview/common/min_button_select.png',
          text: '记录',
          midButton: true,
          customIcon: false
        },
        {
          iconPath: 'play-right',
          selectedIconPath: 'play-right-fill',
          text: '直播',
          customIcon: false
        },
        {
          iconPath: 'account',
          selectedIconPath: 'account-fill',
          text: '我的',
          isDot: false,
          customIcon: false
        }
      ],
      current: 0
    };
  },
  computed: {},
  components: {},
  mounted() {},
  methods: {
    change (index) {
    },
    toast() {
      this.$tools.confirm('您确定当前界面吗?', () => {});
    },
    goApp() {
      this.$tools.navTo({
        url: './protal/main'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .u-scroll-h {
    height: calc(100vh - 100rpx);
  }
</style>
