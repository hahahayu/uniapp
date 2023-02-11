<template>
	<view class="question">
		<MyHeader :isBack="false" title="面试题"></MyHeader>
		<!-- 内容部分 -->
		<view class="qustion-content">
			<!-- 搜索区域 -->
			<view class="question-header">
				<input class="question-input" type="text" placeholder="请输入搜索关键字">
				<image class="question-search" src="/static/imgs/search.png" mode=""></image>
			</view>
			<scroll-view scroll-y="true" :style="'height:' + clientHeight + 'px;'">
				<view class="commidty" :style="'height:' + clientHeight + 'px;'">
					<!-- 面试题板块 -->
					<QuestionCommidty :dataList="dataList"></QuestionCommidty>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/tabBar.vue'
	import MyHeader from '@/common/myheader/myHeader.vue'
	import QuestionCommidty from '@/components/question/question-commidty.vue'
	import {questionsTypeList} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				selected: 1,
				clientHeight: null,
				dataList: []
			}
		},
		components: {
			MyTabbar,
			MyHeader,
			QuestionCommidty
		},
		methods: {
			async getQuestionTypeList() {
				const res = await questionsTypeList({
					pageNum: 1,
					pageSize: 9
				})
				this.dataList = res
			}
		},
		onLoad() {
			this.getQuestionTypeList()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部高度 select里面的参数就比如css选择器一样选中元素
					let info = uni.createSelectorQuery().in(this).select('.question-header')
					info.boundingClientRect((data) => {
						// data包含元素的高度信息
						// data.height 头部高度   68是tabbar高度
						this.clientHeight = res.windowHeight - data.height - 68 - 60
						// console.log(data)
					}).exec(() => {
						// 这个方法必须调用，可以为空，否则不会获取到信息
					})
				}
			})
		},
		
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
	
	.question {
		width: 100vw;
		height: 100vh;
		background: #f0f3f7;
	}
	
	.question-content {
		padding: 0 35rpx;
	}
	
	/* 搜索框 */
	.question-header {
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-bottom: 30rpx;
		background-color: #fff;
		border-radius: 45rpx;
		position: relative;
		top: 10rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.question-input {
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: 400;
	}
	
	.question-search {
		width: 36rpx;
		height: 38rpx;
		position: absolute;
		top: 20rpx;
		right: 30rpx;
	}
</style>
