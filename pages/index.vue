<template>
  <view class="u-page">
    <u-top-tips ref="uTips"></u-top-tips>
    <tab-menu :data-list="tabList"></tab-menu>
    <scroll-view scroll-y="true" class="u-scroll-h">
        <submit-form></submit-form>
        <u-picker @confirm="confirm" mode="time" v-model="show" :params="params" default-time="2025-07-02 13:01"></u-picker>
        <u-swiper :list="banner" height="0"></u-swiper>
        <view class="u-padd-10"><u-subsection mode="subsection" active-color="#2979ff" :list="tabList" :current="curNow"></u-subsection></view>
        <view class=""><scroll-menu></scroll-menu></view>
        <view class="u-mar-t u-auto"><tab-list @action="action1" :data-list="tabList1" border :number="3"></tab-list></view>
        <view class="u-padd u-mar-t u-mar-b u-type-white-bg">
          <u-button type="primary">底部菜单</u-button>
          <u-button type="success">分类</u-button>
          <u-button type="default">弹出框</u-button>
          <u-button type="error">确认框</u-button>
          <u-button type="warning">日期</u-button>
          <u-button type="info">弹出层</u-button>
        </view>
        <view class="u-padd u-type-white-bg u-mar-t"><u-lazy-load class="u-user-img-small" :image="image"></u-lazy-load></view>
        <view class="u-padd u-bg-fff u-mar-t"><u-alert-tips type="primary" title="通知" description="明天星期五,马上就要放假啦"></u-alert-tips></view>
        <no-data isBtn @action="action" :img="NoOrder" msg="暂无订单~"></no-data>
        <view class="u-mar-t u-fx-jsb u-padd-30 u-bg-fff u-bd-b u-shadow">
          <view class="u-font-1">我是谁</view>
          <view><u-loading mode="circle" color="#666"></u-loading></view>
          <view>不知道</view>
        </view>
    </scroll-view>
    <u-tabbar @change="change" v-model="current" :list="list" :mid-button="true"></u-tabbar>
  </view>
</template>

<script>
import NoOrder from '../static/img/no-order.png';
export default {
  data() {
    return {
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: false
      },
      list1: [
        {
          value: 1,
          label: '苹果'
        },
        {
          value: 2,
          label: '香蕉'
        }
      ],
      showKey: false,
      image: 'http://canpoint-file.oss-cn-beijing.aliyuncs.com/CANPOINTAI/2020/07/15/base/db2dc4ce0ff84e04b9c91a008b107b71.jpg',
      NoOrder,
      tabList: [
        {
          name: '待处理'
        },
        {
          name: '已处理'
        },
        {
          name: '全部'
        }
      ],
      tabList1: [
        {
          name: '职场',
          total: '98'
        },
        {
          name: '生活',
          total: 2
        },
        {
          name: '社交'
        },
        {
          name: '日常'
        },
        {
          name: '自媒体'
        }
      ],
      curNow: 0,
      scrollTop: 0,
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
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  computed: {},
  components: {},
  mounted() {},
  methods: {
    confirm(date) {
      console.log(date);
    },
    action1() {
      this.$tools.confirm('你好', null, false);
      this.show = true;
    },
    action() {
      this.$tools.toast('haha');
      this.$refs.uTips.show({
        title: '铁马冰河入梦来',
        type: 'primary',
        duration: '2300'
      });
    },
    change(index) {},
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
  height: calc(100vh - 180rpx);
}
.u-scroll-h1 {
  height: calc(100vh - 175rpx);
}
</style>
