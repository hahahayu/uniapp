<template>
	<view class="start-school">
		<MyHeader :title="title"></MyHeader>
		<scroll-view scroll-y="true">
			<view>
				<!-- 顶部填写入学信息 -->
				<view class="banner-bg">
					<view class="sign-btn" @tap="goEnterSchool">立即填写 > </view>
				</view>
				<view class="school-content">
					<!-- 按钮列表 -->
					<MangaList :classId="classId" :title="title"></MangaList>
					<!-- 名人堂 -->
					<view class="main-title">名人堂</view>
					<scroll-view scroll-x="true" class="scroll-content">
						<view class="scroll-item">
							<CelebrityList :excellentListInfo="excellentListInfo"></CelebrityList>
						</view>
					</scroll-view>
					<!-- 公告 -->
					<view class="main-title">公告</view>
					<Notice :noticeListInfo="noticeListInfo"></Notice>
				</view>
			</view>
		</scroll-view>
		<!-- 弹窗 -->
		<view class="pop" v-if="isPop">
			<view class="pop-mask">
				<view class="pop-box">
					<view class="pop-content">
						<image class="close" @tap="closePop" src="../../static/imgs/close.png" mode=""></image>
						<image class="pop-btn" src="../../static/imgs/pop-btn.png" mode=""></image>
						<view class="btn-text" @tap="goEnterSchool">快速入学</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '@/common/myheader/myHeader.vue'
	import MangaList from '@/components/start-school/MangaList.vue'
	import CelebrityList from '@/components/start-school/CelebrityList.vue'
	import Notice from '@/components/start-school/Notice.vue'
	import {excellentList, noticeList} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				title: '',
				classId: '',
				isPop: true,
				excellentListInfo: [],
				noticeListInfo: []
			}
		},
		components: {
			MyHeader,
			MangaList,
			CelebrityList,
			Notice
		},
		methods: {
			// 关闭弹窗
			closePop() {
				this.isPop = false
			},
			// 跳转到入学信息填写页面
			goEnterSchool() {
				uni.navigateTo({
					url: '/pages/enterSchool/enterSchool'
				})
			},
			// 获取名人堂列表信息
			async getExcellentList() {
				const res = await excellentList({
					pageNum: 1,
					pageSize: 10
				})
				this.excellentListInfo = res
				// console.log(this.excellentListInfo, '---获取名人堂列表信息')
			},
			// 获取公告
			async getNoticeList() {
				const res = await noticeList({
					pageNum: 1,
					pageSize: 10
				})
				this.noticeListInfo = res
			}
		},
		onLoad(options) {
			const item = JSON.parse(options.item)
			// 当前班级名称
			this.title = item.className
			// 当前班级ID
			this.classId = item.id
			// 获取名人堂列表信息
			this.getExcellentList()
			// 获取公告
			this.getNoticeList()
		}
	}
</script>

<style scoped>
	/* 清除滚动条 */
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	
	scroll-view {
		/* height: 1500rpx; */
		background-color: #f3f4f6;
	}
	
	.start-school {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		background-color: #f3f4f6;
	}
	
	/* 顶部立即填写 */
	.banner-bg {
		position: relative;
		width: 750rpx;
		height: 295rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/banner.png') no-repeat;
		background-size: contain;
	}
	
	.sign-btn {
		position: absolute;
		top: 195rpx;
		left: 60rpx;
		width: 173rpx;
		height: 44rpx;
		font-size: 28rpx;
		color: #f3f4f6;
		padding: 5rpx 10rpx;
		text-align: center;
		line-height: 44rpx;
		border: 1rpx solid #fff;
		border-radius: 40rpx;
	}
	
	.school-content {
		padding: 40rpx 37rpx;
	}
	
	.scroll-content {
		width: 100%;
		height: 100%;
	}
	
	.scroll-item {
		display: inline-block;
	}
	
	.main-title {
		width: 102rpx;
		height: 33rpx;
		font-size: 34rpx;
		font-weight: bold;
		color: #252525;
		margin-top: 54rpx;
		margin-bottom: 36rpx;
	}
	
	/* 弹窗 */
	.pop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	
	.pop-mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
	}
	
	.pop-box {
		width: 500rpx;
		height: 700rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.pop-content {
		width: 500rpx;
		height: 693rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/pop-bg.png') no-repeat;
		background-size: cover;
		position: relative;
	}
	
	.close {
		width: 63rpx;
		height: 63rpx;
		position: absolute;
		right: -20rpx;
		top: -20rpx;
	}
	
	.pop-btn {
		width: 420rpx;
		height: 80rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 36rpx;
	}
	
	.btn-text {
		width: 136rpx;
		height: 33rpx;
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 76rpx;
	}
</style>