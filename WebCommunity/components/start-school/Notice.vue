<template>
	<view class="notice">
		<view class="notice-item" v-for="(item, index) in noticeListInfo" :key="item.noticeId">
			<view class="notice-main">
				<block>
					<image class="notice-img" src="/static/imgs/upgrade.png" mode=""></image>
				</block>
				<view class="notice-warning">
					<text>{{item.noticeTitle}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			noticeListInfo: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped>
	.notice-item {
		width: 674rpx;
		height: 60rpx;
		border: 2rpx solid #f88c35;
		color: #f88c35;
		background: rgba(248, 140, 53, .12);
		border-radius: 10rpx;
		/* padding-bottom: 20rpx; */
	}
	
	.notice-main {
		width: 674rpx;
		height: 60rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	
	.notice-img {
		width: 29rpx;
		height: 29rpx;
	}
	
	/* 默认 */
	.notice-text {
		background: rgba(53, 140, 248, .12);
		border: 2rpx solid #358cf8;
		color: #358cf8;
	}
	
	/* 警告 */
	.notice-warning {
		/* background: rgba(248, 140, 53, .12); */
		/* border: 2rpx solid #f88c35; */
		color: #f88c35;
	}
</style>