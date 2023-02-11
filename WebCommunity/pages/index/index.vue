<template>
	<view class="home">
		<view class="home-container">
			<view class="home-header">
				<view class="home-title">前端学院</view>
				<view class="home-school">入学信息入口</view>
				<view class="home-show" @tap="goShowContract">
					<view class="home-class">
						<text class="show-text">查看班级权益</text>
					</view>
					<image class="home-img" src="../../static/imgs/shape.png" mode=""></image>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height: ' + clientHeight + 'px'">
				<view class="home-content" :style="'height: ' + clientHeight + 'px'">
					<HomeCommodity :homeData='homeData'></HomeCommodity>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/tabBar.vue'
	import HomeCommodity from '@/components/index/HomeCommodity.vue'
	import {getClassList} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				selected: 0,
				clientHeight: null,
				homeData: []
			}
		},
		components: {
			MyTabbar,
			HomeCommodity
		},
		methods: {
			goShowContract() {
				uni.navigateTo({
					url: '/pages/showContract/showContract'
				})
			},
			// 获取班级信息列表
			async getClassInfo() {
				const res = await getClassList({
					pageSize: 5,
					pageNum: 1
				})
				this.homeData = res
				// console.log(this.homeData, 'aaaaaaaa')
			}
		},
		onLoad() {
			this.getClassInfo()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部高度 select里面的参数就比如css选择器一样选中元素
					let info = uni.createSelectorQuery().in(this).select('.home-header')
					info.boundingClientRect((data) => {
						// data包含元素的高度信息
						// data.height 头部高度   68是tabbar高度
						this.clientHeight = res.windowHeight - data.height - 68
						// console.log(data)
					}).exec(() => {
						// 这个方法必须调用，可以为空，否则不会获取到信息
					})
				}
			})
		}
	}
</script>

<style>
	/* 清除滚动条 */
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	
	.home-container {
		width: 100vw;
		height: 100%;
		margin-right: -7rpx;
		background: url(https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png) no-repeat;
		background-size: cover;
		margin-bottom: 120rpx;
		box-sizing: border-box;
	}
	
	.home-header {
		padding: 131rpx 37rpx 0 37rpx;
	}
	
	/* 设置标题 */
	.home-title {
		width: 420rpx;
		height: 59rpx;
		font-size: 60rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #000cff;
		line-height: 80rpx;
	}
	/* 入学信息 */
	.home-school {
		width: 236rpx;
		height: 40rpx;
		font-size: 38rpx;
		font-weight: 400;
		font-family: Microsoft YaHei;
		color: #344356;
		line-height: 56rpx;
		opacity: .8;
		padding: 30rpx 0;
	}
	
	/* 查看权益 */
	.home-show {
		width: 290rpx;
		height: 59rpx;
		display: flex;
		align-items: center;
		background-color: #5468ff;
		border-radius: 10rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	
	.home-class {
		height: 27rpx;
		line-height: 27rpx;
		font-size: 28rpx;
		font-weight: 400;
		font-family: Microsoft YaHei;
		color: #fff;
	}
	
	.home-class::after {
		content: '';
		width: 1rpx;
		height: 31rpx;
		margin: 0 20rpx;
		border-left: 4rpx solid #fff;
	}
	
	.home-img {
		width: 28rpx;
		height: 28rpx;
	}
</style>
