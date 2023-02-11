<template>
	<view class="subject">
		<MyHeader title="刷题"></MyHeader>
		<view class="subject-content">
			<view class="subject-common">
				<!-- 定义计数 -->
				<view class="dots">
					<text>{{topSwiperIndex+1}}/{{totalNum}}</text>
				</view>
				<!-- 中间滑动内容 -->
				<swiper :current="topSwiperIndex" @change="toSwiperTab" class="swiper" :style="'height:' + clientHeight + 'px;'">
					<swiper-item v-for="(item, index) in toSwiper" :key="index">
						<scroll-view scroll-y="true" :style="'height:' + clientHeight + 'px;'">
							<!-- 题目组件 -->
							<SubjectItem :item="item" :index="topSwiperIndex"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<!-- 底部，上下题 -->
		<view class="subject-check">
			<view class="select" @tap="goBefore">上一题</view>
			<view class="select next" @tap="goNext">下一题</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '@/common/myheader/myHeader.vue'
	import SubjectItem from '@/components/subject/subject-item.vue'
	import {questionsList, selQuestionNum} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				clientHeight: 0,
				typeId: 0,
				toSwiper: [],
				totalNum: 0,
				topSwiperIndex: 0,
				currentNum: 0,
				pageNum: 1,
				pageSize: 10
			}
		},
		methods: {
			// 获取可视区域高度
			getClientHeight() {
				const res = uni.getSystemInfoSync()
				return res.statusBarHeight
			},
			// 获取面试题数据
			async getQuestionsList() {
				const res = await questionsList({
					pageNum: this.pageNum,
					pageSize: this.pageSize,
					typeId: this.typeId
				})
				this.currentNum += res.length
				this.toSwiper.push(...res)
				// console.log(res)
			},
			// 获取面试题总数
			async getSelQuestionNum() {
				const res = await selQuestionNum({
					typeId: this.typeId
				})
				this.totalNum = res.questionNum
				// console.log(res, '获取面试题总数')
			},
			// 滑动题目触发事件
			 toSwiperTab(e) {
				 // console.log(e)
				 this.topSwiperIndex = Number(e.target.current)
				 // const current = this.topSwiperIndex + 1
				 if (this.topSwiperIndex === this.currentNum - 1) {
					 // 继续请求题目数据
					 this.continueReq()
				 } 
				 // else if(this.topSwiperIndex === this.totalNum - 1) {
					//  uni.showToast({
					//  	title: '已经是最后一道题了~',
					//  	icon: 'none'
					//  })
				 // }
			 },
			 // 继续请求题目数据
			 continueReq() {
				 this.pageNum += 1
				 if (this.totalNum === this.toSwiper.length) return
				 this.getQuestionsList()
			 },
			 // 点击上一题
			 goBefore() {
				 if(this.topSwiperIndex === 0) {
					 uni.showToast({
					 	title: '已经在最前面了~',
					 	icon: 'none'
					 })
					return
				 }
				 this.topSwiperIndex --
			 },
			 // 下一题
			 goNext() {
				 if(this.topSwiperIndex === this.totalNum - 1) {
					 uni.showToast({
					 	title: '已经是最后一道题了~',
						icon: 'none'
					 })
					 return
				 } else {
					 this.topSwiperIndex ++
					 if (this.topSwiperIndex === this.toSwiper.length - 1) {
						 // 继续请求题目数据
						 this.continueReq()
					 }
				 }
				 
			 }
		},
		components: {
			MyHeader,
			SubjectItem
		},
		onLoad(options) {
			// 获取刷题类型ID
			this.typeId = options.typeId
			// 获取面试题数据
			this.getQuestionsList()
			// 获取面试题总数
			this.getSelQuestionNum()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight - this.getClientHeight()
					// 获取计数高度
					let dots = uni.createSelectorQuery().in(this).select('.dots')
					dots.boundingClientRect((data) => {
						this.clientHeight = this.clientHeight - data.height
						// console.log(data)
					}).exec(() => {})
					// 获取底部切换高度
					let info = uni.createSelectorQuery().in(this).select('.subject-check')
					info.boundingClientRect((data) => {
						this.clientHeight = this.clientHeight - data.height - 60
						// console.log(data)
					}).exec(() => {
						// 这个方法必须调用，可以为空，否则不会获取到信息
					})
				}
			})
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
	
	.swiper {
		height: auto;
	}
	
	.subject {
		position: relative;
		width: 100vw;
		background-color: #f0f3f7;
		box-sizing: border-box;
	}
	
	.subject-content {
		padding: 0 37rpx;
		width: 100%;
		box-sizing: border-box;
	}
	
	.subject-common {
		padding-bottom: 50rpx;
	}
	
	.dots {
		height: 30rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #34456;
		opacity: 0.6;
	}
	
	.subject-check {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.select {
		width: 311rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		color: #fff;
		margin-left: 55rpx;
		background-color: rgb(90, 103, 247);
	}
	
	.next {
		background-color: rgb(90, 139, 245);
	}
</style>