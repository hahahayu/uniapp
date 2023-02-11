<template>
	<view class="home-item">
		<view class="item-main" @tap="goStart" :style="{backgroundImage: 'url(' + classImgLink + ')'}">
			<view class="item-content">
				<image class="left-arrow img" src="../../static/imgs/right-arrow.png" mode=""></image>
				<view class="item-text">{{item.className}}</view>
				<image class="img" src="../../static/imgs/right-arrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				classImgLink: ''
			}
		},
		computed: {
			changeImg(){
				return this.classImgLink = this.item.classImgLink
			}
		},
		methods: {
			goStart() {
				uni.navigateTo({
					url: '/pages/startSchool/startSchool?item=' + JSON.stringify(this.item)
				})
			}
		},
		onLoad() {
			console.log(this.item, 'dddddddd')
		}
	}
</script>

<style scoped>
	.home-item {
		width: 320rpx;
		height: 404rpx;
		background: #fff;
		box-shadow: 0 24rpx 38rpx 0 rbga(60, 128, 209, 0.09);
		border-radius: 30rpx;
		position: relative;
		margin-bottom: 40rpx;
	}
	
	.item-main {
		width: 294rpx;
		height: 371rpx;
		/* background: orange; */
		position: absolute;
		top: 15rpx;
		left: 10rpx;
	}
	
	.item-content {
		padding-top: 290rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	.item-content .img {
		width: 30rpx;
		height: 20rpx;
	}
	
	.left-arrow {
		transform: rotate(180deg);
	}
	
	.item-text {
		font-size: 36rpx;
		font-weight: 400;
		font-family: Microsoft YaHei;
		color: #fff;
		padding: 0 20rpx;
	}
</style>