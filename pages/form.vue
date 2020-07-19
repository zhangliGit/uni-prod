<template>
  <view class="u-type-white-bg u-padd">
    <submit-form></submit-form>
    <view class="u-mar">
      <u-button type="primary">提交</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        intro: '',
        sex: ''
      },
      checkboxList: [
        {
          name: '苹果',
          checked: false,
          disabled: false
        },
        {
          name: '雪梨',
          checked: false,
          disabled: false
        },
        {
          name: '柠檬',
          checked: false,
          disabled: false
        }
      ],
      radioList: [
        {
          name: '鲜甜',
          disabled: false
        },
        {
          name: '麻辣',
          disabled: false
        }
      ],
      radio: '',
      switchVal: false
    };
  },
  computed: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.u-scroll-h {
  height: calc(100vh);
}
</style>
