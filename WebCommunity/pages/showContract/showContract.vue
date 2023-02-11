<template>
	<view class="show-contract">
		<view class="contract-header">
			<image src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png" mode=""></image>
		</view>
		<scroll-view scroll-y="true" :style="'height: ' + clientHeight + 'px'">
			<view class="contract" :style="'height: ' + clientHeight + 'px'">
				<view class="show-contract-content">
					<view class="sign-item" v-for="item in classInfo" :key="item.id">
						<view class="sign-bg-title">
							<view class="item-title">{{item.className}}</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text :nodes="item.classDesc"></rich-text>
							</view>
						</view>
						<view class="sign-bg-footer">
							<!-- <rich-text>123456789</rich-text> -->
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="konw">
			<view class="contract-know" @tap="goBack">
				我知道了
			</view>
		</view>
	</view>
</template>

<script>
	import {getClassList} from '@/servies/api.js'
	export default {
		data() {
			return {
				clientHeight: null,
				classInfo: null
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部高度 select里面的参数就比如css选择器一样选中元素
					let info = uni.createSelectorQuery().in(this).select('.contract-header')
					info.boundingClientRect((data) => {
						// data包含元素的高度信息
						// data.height 头部高度   68是tabbar高度
						this.clientHeight = res.windowHeight - data.height
					}).exec(() => {
						// 这个方法必须调用，可以为空，否则不会获取到信息
					})
					
					// 获取底部高度
					let konw = uni.createSelectorQuery().in(this).select('.konw')
					konw.boundingClientRect((data) => {
						// data包含元素的高度信息
						// data.height 头部高度   68是tabbar高度
						this.clientHeight = this.clientHeight - data.height
					}).exec(() => {})
				}
			})
		},
		onLoad() {
			this.getClassInfo()
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取班级权益数据
			async getClassInfo() {
				const res = await getClassList({
					pageSize: 5,
					pageNum: 1
				})
				// console.log(res)
				this.classInfo = res
			}
		}
	}
</script>

<style scoped>
	/* 清除滚动条 */
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	.show-contract {
		width: 750rpx;
		height: 100vh;
		padding-bottom: 200rpx;
		box-sizing: border-box;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png') no-repeat;
	}

	.contract-header {
		width: 100vw;
		height: 300rpx;
		position: relative;
	}

	.contract-header image {
		width: 622rpx;
		height: 93rpx;
		position: absolute;
		left: 50%;
		top: 150rpx;
		transform: translateX(-50%);
	}

	.contract {
		width: 702rpx;
		padding: 0 24rpx;
		padding-bottom: 60rpx;
	}

	.sign-item {
		width: 702rpx;
		margin-bottom: 60rpx;
	}

	.sign-bg-title {
		width: 702rpx;
		height: 100rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-title.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.item-title {
		position: absolute;
		left: 50%;
		top: 10rpx;
		transform: translateX(-50%);
		font-size: 48rpx;
		font-weight: normal;
		color: #5d6fe5;
		line-height: 60rpx;
	}

	.item-content {
		width: 702rpx;
		height: 100%;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/item-bg.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.sign-bg-footer {
		width: 702rpx;
		height: 100%;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-footer.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.item-text {
		padding: 20rpx 40rpx;
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #7a8bff;
	}

	.konw {
		width: 100vw;
		height: 200rpx;
		position: relative;
	}

	.contract-know {
		width: 520rpx;
		height: 80rpx;
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: normal;
		color: #5d6fe5;
		text-align: center;
		line-height: 80rpx;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 20rpx;
	}
</style>
