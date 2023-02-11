<template>
	<view class="consulting-help">
		<MyHeader title="咨询帮助"></MyHeader>
		<view class="help-content" v-if="dataList">
			<view class="help-item" v-for="item in dataList" :key="item.id">
				<image class="item-address img" src="/static/imgs/address.png" mode=""></image>
				<view class="item-main">
					<view class="main-title">{{item.name}}</view>
					<view class="main-phone">{{item.phone}}</view>
				</view>
				<image class="item-phone img" src="/static/imgs/phone.png" mode=""></image>
			</view>
		</view>
		<view class="help-content" v-else>暂无数据...</view>
		<view class="help-sure">确认</view>
	</view>
</template>

<script>
	import MyHeader from '@/common/myheader/myHeader.vue'
	import {helpList} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				dataList: []
			}
		},
		components: {
			MyHeader
		},
		onLoad() {
			this.getHelpList()
		},
		methods: {
			// 获取咨询帮助数据
			async getHelpList() {
				const res = await helpList({
					pageNum: 1,
					pageSize: 10
				})
				this.dataList = res
				// console.log(this.dataList, '---咨询帮助')
			}
		}
	}
</script>

<style>
	.consulting-help {
		width: 100vw;
		height: 100vh;
		background-color: #f3f4f6;
	}
	
	.help-content {
		background-color: #fff;
	}
	
	.help-item {
		display: flex;
		align-items: center;
		padding: 40rpx;
		border-bottom: 2rpx solid #f3f4f6;
		box-sizing: border-box;
	}
	
	.help-item .img {
		width: 33rpx;
		height: 36rpx;
	}
	
	.item-phone {
		padding: 20rpx;
	}
	
	.item-main {
		flex: 1;
		padding: 0 20rpx;
	}
	
	.main-title {
		font-size: 28rpx;
		font-weight: 400;
		color: #333;
		padding-bottom: 20rpx;
	}
	
	.main-phone {
		font-size: 24rpx;
		font-weight: 400;
		color: #999;
		opacity: 0.8;
	}
	
	.help-sure {
		width: 420rpx;
		height: 80rpx;
		background: #06f;
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		font-size: 30rpx;
		font-weight: 400;
		position: absolute;
		left: 50%;
		bottom: 100rpx;
		transform: translateX(-50%);
	}
</style>