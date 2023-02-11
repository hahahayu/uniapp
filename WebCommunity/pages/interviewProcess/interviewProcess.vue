<template>
	<view class="interview-process">
		<MyHeader :isBack="false" title="面试求职流程"></MyHeader>
		<view class="process">
			<view class="process-content">
				<!-- 面试流程组件 -->
				<ProcessItem :processList="processListInfo"></ProcessItem>
			</view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/tabBar.vue'
	import MyHeader from '@/common/myheader/myHeader.vue'
	import ProcessItem from '@/components/process/process-item.vue'
	import {processList} from '@/servies/api.js'
	
	export default {
		data() {
			return {
				selected: 2,
				processListInfo: []
			}
		},
		components: {
			MyTabbar,
			MyHeader,
			ProcessItem
		},
		methods: {
			// 获取面试流程列表
			async getProcessList() {
				const res = await processList({
					pageNum: 1,
					pageSize: 10
				})
				this.processListInfo = res
				// console.log(res, 'processList')
			}
		},
		computed: {
			changeList() {
				this.processListInfo.map(item => {
					item.interviewProcessAttrs.map(tem => {
						// 判断是否有视频
						if (tem.objType === 2) {
							// 有视频
							item.isVideo = true
						} else {
							item.isVideo = false
						}
					})
				})
			}
		},
		onLoad() {
			this.getProcessList()
		}
	}
</script>

<style scoped>
	page {
		height: auto;
	}
	
	.process {
		width: 750rpx;
		padding-top: 20rpx;
		padding-bottom: 120rpx;
		background-image: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png');
		background-size: cover;
		background-position: center center;
		box-sizing: border-box;
		position: relative;
	}
	
	.process-content {
		width: 750rpx;
		height: 100%;
		/* position: absolute; */
		top: 0;
		left: 10rpx;
		padding-bottom: 4rpx;
		position: relative;
	}
</style>
