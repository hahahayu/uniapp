<template>
	<view class="headers">
		<view class="nav-top">
			<view class="status-bar"></view>
			<view class="topContent">
				<view class="goBack" @click="goTo" v-if="isBack">
					<slot name="left">
						<image class="left-img" src="/static/imgs/arrow.png" mode=""></image>
					</slot>
				</view>
				<view class="title">
					<slot name="center">
						<view>{{title}}</view>
					</slot>
				</view>
			</view>
		</view>
		<view class="marginBox"></view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			isBack: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goTo() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	.nav-top {
		width: 100vw;
		height: 115rpx;
		background-color: #fff;
		position: fixed;
		top: 0%;
		left: 0%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.status-bar {
		height: 64rpx;
	}
	
	.topContent {
		width: 100vw;
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	
	.goBack {
		width: 90rpx;
		height: 42rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		position: relative;
		font-size: 24rpx;
	}
	
	.goBack .left-img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 40rpx;
		height: 42rpx;
	}
	
	.title {
		line-height: 115rpx;
		font-size: 32rpx;
		text-align: center;
		color: #344356;
	}
	
	.marginBox {
		height: 115rpx;
		
	}
</style>