<template>
	<view class="celebrity">
		<view class="celebrity-item" v-for="item in excellentListInfo" :key="item.id">
			<!-- 姓名和奖杯 -->
			<view class="item-header">
				<view class="header-left">
					<view class="student">{{item.studentName}}</view>
					<view class="student-stars">
						<image class="student-stars-img" src="/static/imgs/stars.png" mode=""></image>
					</view>
				</view>
				<view class="header-right">
					<image class="trophy" src="/static/imgs/trophy.png" mode=""></image>
				</view>
			</view>
			<!-- 城市、薪资、班级 -->
			<view class="item-content">
				<view class="item-list">
					就业城市：<text class="item-text">{{item.wrokCity}}</text>
				</view>
				<view class="item-list">
					就业薪资：<text class="item-text item-active-text">{{item.salary}}</text>
				</view>
				<view class="item-list">
					来自班级：<text class="item-text">{{item.className}}</text>
				</view>
			</view>
			<!-- 学历列表 -->
			<view class="item-foot">
				<view class="foot-item">
					<image class="foot-bg" src="/static/imgs/education.png"></image>
					<view class="foot-text">{{item.education}}</view>
				</view>
				<view class="foot-item">
					<image class="foot-bg" src="/static/imgs/shezhao.png"></image>
					<view class="foot-text">{{item.workWay}}</view>
				</view>
				<view class="foot-item">
					<image class="foot-bg" src="/static/imgs/age.png"></image>
					<view class="foot-text">{{item.studentAge}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			excellentListInfo: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped>
	.celebrity {
		display: flex;
		flex-wrap: nowrap;
		margin-top: 36rpx;
	}
	
	.celebrity-item {
		width: 289rpx;
		height: 319rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin-right: 40rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/fame-bg.png') no-repeat;
		background-size: cover;
		padding: 24rpx;
	}
	
	.item-header {
		padding-top: 10rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.student-stars .student-stars-img {
		width: 19rpx;
		height: 19rpx;
	}
	
	.trophy {
		width: 97rpx;
		height: 91rpx;
	}
	
	.item-content {
		paddingtop: 20rpx;
		paddinglef: 20rpx;
	}
	
	.item-list {
		height: 25rpx;
		font-size: 25rpx;
		font-weight: 400;
		color: #333;
		line-height: 27rpx;
		padding-bottom: 20rpx;
	}
	
	.item-text {
		padding-left: 10rpx;
	}
	
	.item-active-text {
		color: #f00;
		font-size: 30rpx;
		font-weight: bold;
	}
	
	.item-foot {
		width: 100%;
		height: 50rpx;
		background: #006cff;
		display: flex;
		justify-content: space-around;
		border-radius: 0 0 20rpx 20rpx;
	}
	
	.foot-item {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.foot-bg {
		width: 22rpx;
		height: 21rpx;
	}
	
	.foot-text {
		font-size: 24rpx;
		font-weight: normal;
		color: #fff;
		line-height: 27rpx;
	}
</style>