<template>
	<view class="swiper-item">
		<!-- 题目 -->
		<view class="item-title">
			<text>{{index+1}}.{{item.title}}</text>
			<view v-if="item.content">
				<MDParserHeightlight class="answer" :resource="item.content"></MDParserHeightlight>
			</view>
		</view>
		<!-- 内容 -->
		<view class="item-content">
			<view class="item-result">
				<image class="item-img" src="/static/imgs/result.png" mode=""></image>
				<view class="result">结果: </view>
			</view>
			<view v-if="item.answer">
				<MDParserHeightlight class="answer" :resource="item.answer"></MDParserHeightlight>
			</view>
			<!-- 解析 -->
			<view class="item-result">
				<image class="item-img" src="/static/imgs/explain.png" mode=""></image>
				<view class="result">解析: </view>
			</view>
			<view class="parsing" v-if="item.parsing">
				<MDParserHeightlight class="answer" :resource="item.parsing"></MDParserHeightlight>
			</view>
		</view>
	</view>
</template>

<script>
	import MDParserHeightlight from '@/common/cmder-MDParserHighlight/index.vue'
	
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type:Number,
				default: 1
			}
		},
		components: {
			MDParserHeightlight
		}
	}
</script>

<style scoped>
	.swiper-item {
		margin-top: 60rpx;
		margin-bottom: 100rpx;
	}
	
	.item-title {
		width: 100%;
		height: 100%;
		font-size: 30rpx;
		padding: 0 20rpx;
		font-weight: normal;
		color: #344356;
		box-sizing: border-box;
	}
	
	.item-content {
		display: flex;
		flex-direction: column;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	
	.item-result {
		display: flex;
	}
	
	.item-img {
		width: 45rpx;
		height: 44rpx;
	}
	
	.result {
		width: 576rpx;
		font-style: 32rpx;
		font-weight: 400;
		color: #333;
		padding-left: 10rpx;
	}
	
	.answer {
		box-sizing: border-box;
		border: 2rpx solid transparent;
	}
	
	.parsing {
		box-sizing: border-box;
	}
</style>