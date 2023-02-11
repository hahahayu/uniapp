<template>
  <view class="manage">
    <my-header title="档案管理"></my-header>

    <view class="manage-form">
      <!-- 姓名 和 性别 -->
      <view class="manage-item clear-line">

        <view class="item-title">姓名</view>
        <view class="item-main">{{form.name}}</view>

      </view>
      <!-- 性别-->
      <view class="manage-item">
        <view class="item-title">姓别</view>
		<view class="item-main">{{form.gender === 0? '男士' : '女士'}}</view>
        <!-- <view class="item-main sex-item">
         <label class="radio">
            <radio value="r1" checked color="#0066FF">女士</radio>
          </label>
         <label class="radio">
            <radio value="r2" color="#0066FF">男士</radio>
          </label>
        </view> -->
      </view>
      <!-- 身份证号 -->
      <view class="manage-item">
        <view class="item-title">身份证号码</view>
        <view class="item-main">{{form.idCard}}</view>

      </view>
      <!-- 手机号码 -->
      <view class="manage-item">
        <view class="item-title">手机号码</view>
        <view class="item-main">{{form.phone}}</view>
      </view>
      <!-- 前端阶段 -->
      <view class="manage-item">
        <view class="item-title">前端阶段</view>
        <view class="item-main">{{form.frontStage}}</view>
      </view>
      <!-- 家庭住址 -->
      <view class="manage-item">
        <view class="item-title">家庭住址</view>
        <view class="item-main">{{form.addressInfo}}</view>
      </view>
      <!-- 出生日期 -->
      <view class="manage-item">
        <view class="item-title">出生日期</view>
        <view class="item-main">{{form.birthDate}}</view>
      </view>
      <!-- 学历 -->
      <view class="manage-item">
        <view class="item-title">学历</view>
        <view class="item-main">{{form.education}}</view>
      </view>
      <!-- 专业 -->
      <view class="manage-item">
        <view class="item-title">专业</view>
        <view class="item-main">{{form.major}}</view>
      </view>
      <!-- 微信号 -->
      <view class="manage-item">
        <view class="item-title">微信号</view>
        <view class="item-main">{{form.wechat}}</view>
      </view>
      <!-- QQ号 -->
      <view class="manage-item">
        <view class="item-title">QQ号</view>
        <view class="item-main">{{form.qq}}</view>
      </view>
      <!-- 目前状态 -->
      <view class="manage-item">
        <view class="item-title">目前状态</view>
        <view class="item-main">{{form.currentState}}</view>
      </view>
      <!-- 目标就业城市 -->
      <view class="manage-item">
        <view class="item-title">目标就业城市</view>
        <view class="item-main">{{form.city}}</view>
      </view>
      <!-- 紧急联系人 -->
      <view class="manage-item">
        <view class="item-title">紧急联系人</view>
        <view class="item-main">{{form.emergencyContact}}</view>
      </view>
      <!-- 紧急联系人电话 -->
      <view class="manage-item">
        <view class="item-title">紧急联系人电话</view>
        <view class="item-main">{{form.emergencyPhone}}</view>
      </view>
      <!-- 顾问老师 -->
      <view class="manage-item">
        <view class="item-title">顾问老师</view>
        <view class="item-main">{{form.teacher}}</view>
      </view>
    </view>

    <!-- 确认 -->
    <view class="manage-btn">
      <view class="btn-sure" @tap="sureCheck">确认</view>
    </view>
  </view>
</template>

<script>
  import MyHeader from '@/common/myheader/myHeader.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        form: {
          name: '', // 姓名
          gender: 0, // 性别 0 男 1 女 
          admissionCode: '', // 入学码
          idCard: '', // 身份证信息
          phone: '', // 电话号码
          frontStage: '', // 前端阶段
          province: '', // 省份
          addressInfo: '', // 详细地址   
          birthDate: '', // 生日
          education: '', // 学历
          major: '', // 专业
          wechat: '', // 微信号
          qq: '', // qq
          currentState: '', // 目前状态
          city: '', // 目标城市
          emergencyContact: '', // 紧急联系人
          emergencyPhone: '', // 紧急联系电话
          teacher: '' // 顾问老师
        },
        // 当前班级的id
        classId: 0,
      }
    },
    components: {
      MyHeader
    },
    onLoad(options) {
      this.classId = parseInt(options.classId)
	  // 获取信息
	  if (this.classId === this.classInfo) {
		  this.form = this.classInfo
	  }
    },
    computed: {
      ...mapState({
      	userList: state => state.user.userList,
      	classInfo: state => state.classes.classInfo
      }),
    },
    methods: {
      sureCheck() {
		  uni.navigateBack({
			  deita: 1
		  })
	  }
    }
  }
</script>

<style scoped>
  .manage {
    width: 100vw;
    height: 100%;
    background-color: #F3F4F6;
  }

  .manage-form {
    background-color: #FFFFFF;

    box-sizing: border-box;
  }

  .manage-item {
    width: 100vw;
    border-bottom: 2rpx solid #F3F4F6;
    display: flex;
    align-items: center;
    padding: 32rpx 42rpx;
    align-items: center;
    box-sizing: border-box;
  }

  .clear-line {
    border: none;
  }

  .item-title {
    width: 200rpx;
    font-size: 28rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    line-height: 16rpx;
  }

  .item-main {
    text-align: right;
    flex: 1;
    font-size: 28rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    /* line-height: 100rpx; */
    opacity: 0.8;
  }

  .sex-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .manage-btn {
    width: 750rpx;
    height: 265rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-sure {
    width: 420rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: #0066FF;
    border-radius: 40rpx;
    text-align: center;
    font-size: 30rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;

  }
</style>
