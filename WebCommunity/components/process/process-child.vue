<template>
	<view class="process-child">
		<view class="plain-list" v-if="child.objType !== 2">
			<view class="list-plain">
				<image class="list-item" src="/static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="list-into" @tap="goReamrk(child)">{{child.reamrk}}</view>
		</view>
		<view class="plain-vide" v-else>
			<view class="list-plain">
				<image class="list-item" src="/static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="video-content">
				<!-- 视频播放组件 -->
				<SyVideo :objUrl="child.objPath"></SyVideo>
			</view>
		</view>
	</view>
</template>

<script>
	import SyVideo from '@/components/process/SyVideo.vue'
	
	export default {
		props: {
			child: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				
			}
		},
		components: {
			SyVideo
		},
		methods: {
			goReamrk(child) {
				// console.log(child, 'child')
				// 面试题
				if(child.objType === 0) {
					uni.switchTab({
						url: '/pages/interviewQuestion/interviewQuestion'
					})
				} else if (child.objType === 1) {
					// 链接
					this.copy(child.objPath)
				}
			},
			copy(value) {
				uni.showModal({
					content: value, //模板中提示的内容
					confirmText: '复制内容',
					success: () => {
						uni.setClipboardData({
							data:value, //要被复制的内容
							success: function() {
								uni.hideToast({
									title: '复制成功',
									duration: 2000,
									icon: 'none'
								})
							},
							fail: function() {
								uni.hideToast({
									title: '复制失败',
									duration: 2000,
									icon: 'none'
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	.plain-list {
		display: flex;
		align-items: center;
		padding-bottom: 40rpx;
		padding-left: 30rpx;
	}
	
	.plain-list:nth-child(1) {
		margin-top: 20rpx;
	}
	
	.list-plain {
		display: flex;
		align-items: center;
	}
	
	.list-item {
		width: 37rpx;
		height: 34rpx;
		padding-right: -25rpx;
	}
	
	.list-title {
		font-size: 30rpx;
		padding-right: 40rpx;
	}
	
	.list-into {
		font-size: 20rpx;
		color: #0072ff;
	}
	
	.plain-video {
		width: 650rpx;
	}
	
	.plain-vide .list-plain {
		padding-left: 20rpx;
	}
	
	.video-content {
		margin-top: 40rpx;
	}
	
	.video-content-img {
		width: 650rpx;
		height: 450rpx;
	}
</style>