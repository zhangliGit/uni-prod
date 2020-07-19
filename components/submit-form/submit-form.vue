<template>
  <view class="submit-form">
    <u-picker v-model="pickerTag" :params="pickerParams" mode="time" :default-time="autoPicker" @confirm="changePicker"></u-picker>
    <u-calendar v-model="dateTag" @change="changeMode" mode="date"></u-calendar>
    <u-calendar v-model="rangeTag" @change="changeRange" mode="range"></u-calendar>
    <u-select v-model="selectTag" @confirm="confirmSelect" :list="workType"></u-select>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">姓名</view>
      <view class="u-fx-f1"><input class="form-input" v-model="formData.name" placeholder="请输入" type="text" /></view>
    </view>
    <view class="u-padd-r u-fx u-bd-b u-type-white-bg">
      <view class="u-fx-ac u-form-height">
        <view class="tips">*</view>
        <view class="form-text">家庭住址</view>
      </view>
      <view class="u-fx-f1 u-mar-t30"><textarea v-model="formData.address" class="form-area u-tips-color" placeholder="请输入详细的家庭住址" type="text" /></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">性别</view>
      <view class="u-fx-f1 u-fx-ac">
        <u-radio-group v-model="formData.sex" size="40">
          <u-radio class="u-padd-r" @change="radioChange" :name="item.key" shape="circle" v-for="(item, index) in sexList" :key="index">
            <text class="u-tips-color">{{ item.name }}</text>
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">职业</view>
      <view @tap="showSelect" class="u-fx-f1 u-tips-color">{{ formData.work.label || '请选择' }}</view>
      <view><image class="icons-wh" :src="downIcon"></image></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">兴趣爱好</view>
      <view class="u-fx-f1 u-tips-color">
        <u-checkbox-group @change="changeCheck">
          <u-checkbox class="u-padd-r u-padd-t10 u-padd-b10" v-model="item.checked" v-for="(item, index) in enjoyList" :key="index" :name="item.key">
            <text class="u-tips-color">{{ item.name }}</text>
          </u-checkbox>
        </u-checkbox-group>
      </view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">是否已婚</view>
      <view class="u-fx-f1 u-fx-ac"><u-switch v-model="formData.isMarry"></u-switch></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">生日</view>
      <view class="u-fx-f1 u-padd-t u-padd-b u-tips-color" @tap="showMode">{{ formData.birthday || '请选择日期' }}</view>
      <view><image class="icons-wh" :src="dateIcon"></image></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">会议时间</view>
      <view class="u-fx-f1 u-padd-t u-padd-b u-tips-color" @tap="showPicker">{{ formData.meetTime || '请选择日期' }}</view>
      <view><image class="icons-wh" :src="dateIcon"></image></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">人员选择</view>
      <view class="u-fx-f1 u-fx-ac u-fx-wp u-form-height">
        <view v-for="i in 8" :key="i" style="padding: 5rpx; margin: 4rpx"><u-tag text="张立" closeable></u-tag></view>
      </view>
      <view><image class="icons-wh" :src="addIcon"></image></view>
    </view>
    <view class="u-form-height u-bd-b u-padd-r u-fx-ac u-type-white-bg">
      <view class="tips">*</view>
      <view class="form-text">起始日期</view>
      <view class="u-fx-f1 u-padd-t u-padd-b u-tips-color" @tap="showRange">{{ formData.rangeDate || '请选择日期' }}</view>
      <view><image class="icons-wh" :src="dateIcon"></image></view>
    </view>
    <view class="u-bd-b u-padd-r u-padd-b30 u-type-white-bg">
      <view class="u-fx-ac u-form-height">
        <view class="tips">*</view>
        <view class="form-text">上传图片</view>
      </view>
      <view class="u-mar-l40"><upload-img v-model="formData.imgList"></upload-img></view>
    </view>
    <view class="u-mar">
      <u-button @tap="submitForm" type="primary">提交</u-button>
    </view>
  </view>
</template>

<script>
import UPicker from '@/uview/components/u-picker/u-picker.vue';
import uploadImg from '../an-uploadImg/an-uploadImg.vue';
import downIcon from '../images/down-icon.png';
import dateIcon from '../images/date-icon.png';
import addIcon from '../images/add-icon.png';
export default {
  props: {},
  components: {
    uploadImg,
    UPicker
  },
  data() {
    return {
      autoPicker: '',
      pickerParams: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: false,
      },
      pickerTag: false,
      dateTag: false,
      rangeTag: false,
      selectTag: false,
      selectList: [],
      workType: [
        {
          label: 'IT工程师',
          value: 1
        },
        {
          label: '前端开发工程师',
          value: 2
        },
        {
          label: 'java开发工程师',
          value: 3
        }
      ],
      enjoyList: [
        {
          name: '篮球',
          key: 1,
          checked: false,
          disabled: false
        },
        {
          name: '足球',
          key: 2,
          checked: false,
          disabled: false
        },
        {
          name: '羽毛球',
          key: 3,
          checked: false,
          disabled: false
        },
        {
          name: '网球',
          key: 4,
          checked: false,
          disabled: false
        },
        {
          name: '台球',
          key: 5,
          checked: false,
          disabled: false
        },
        {
          name: '兵兵球',
          key: 6,
          checked: false,
          disabled: false
        }
      ],
      sexList: [
        {
          name: '男',
          key: 1
        },
        {
          name: '女',
          key: 2
        },
        {
          name: '未知',
          key: 0
        }
      ],
      formData: {
        name: '',
        address: '',
        sex: 1,
        enjoy: [],
        meetTime: '',
        birthday: '',
        rangeDate: '',
        isMarry: false,
        work: {},
        imgList: []
      },
      addIcon,
      dateIcon,
      downIcon
    };
  },
  methods: {
    // picker日期选择
    showPicker() {
      this.pickerTag = true;
      this.autoPicker = this.formData.meetTime
    },
    changePicker(item) {
      this.formData.meetTime = `${item.year}-${item.month}-${item.day} ${item.hour}:${item.minute}`;
    },
    // 单个日期
    showMode() {
      this.dateTag = true;
    },
    changeMode(date) {
      this.formData.birthday = date.result;
    },
    // 多个日期
    showRange() {
      this.rangeTag = true;
    },
    changeRange(date) {
      this.formData.rangeDate = date.startDate + '~' + date.endDate;
    },
    // select选择框
    showSelect() {
      this.selectTag = true;
      this.selectList = this.workType;
    },
    confirmSelect(item) {
      this.formData.work = item[0];
    },
    // checkbox数据变化
    changeCheck (item) {
      this.formData.enjoy = item
    },
    // 表单提交
    submitForm () {
      console.log(this.formData)
    }
  }
};
</script>

<style lang="scss" scoped>
.submit-form {
  .tips {
    width: 40rpx;
    font-size: $u-font-2;
    padding-top: 10rpx;
    text-align: center;
    font-weight: bold;
    color: $u-type-error;
  }
  .icons-wh {
    width: 40rpx;
    height: 40rpx;
    display: block;
  }
  .form-text {
    width: 120rpx;
    margin-right: 50rpx;
  }
  .form-input {
    font-size: $u-font-01;
    color: $u-content-color;
    height: 60rpx;
    line-height: 60rpx;
  }
  .form-area {
    font-size: $u-font-01;
    max-height: 120rpx;
    line-height: 44rpx;
    width: 100%;
  }
}
</style>
