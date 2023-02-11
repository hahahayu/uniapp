<template>
	<view class="tabbar">
		<view class="tabbar-list">
			<view class="tabbar-list-ul">
				<view class="tabbar-list-li" v-for="(item, index) in tabBar.list" :key="index" @click="setSelected(index)">
					<view class="tabbar-list-li-icon">
						<image class="tabBarImage" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
					</view>
					<view :class="selected === index ? 'tabbar-list-li-name active' : 'tabbar-list-li-name'">{{item.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['selected'],
		data() {
			return {
				tabBar: {
					selectedNum: null,
					list: [
						{
							pagePath: '/pages/index/index',
							iconPath: '/static/tabbar/home.png',
							selectedIconPath: '/static/tabbar/home-selected.png',
							text: '首页'
						},
						{
							pagePath: '/pages/interviewQuestion/interviewQuestion',
							iconPath: '/static/tabbar/question.png',
							selectedIconPath: '/static/tabbar/question-selected.png',
							text: '刷面试题'
						},
						{
							pagePath: '/pages/interviewProcess/interviewProcess',
							iconPath: '/static/tabbar/process.png',
							selectedIconPath: '/static/tabbar/process-selected.png',
							text: '面试流程'
						},
						{
							pagePath: '/pages/myContract/myContract',
							iconPath: '/static/tabbar/contract.png',
							selectedIconPath: '/static/tabbar/contract-selected.png',
							text: '我的协议'
						},
						{
							pagePath: '/pages/myCard/myCard',
							iconPath: '/static/tabbar/card.png',
							selectedIconPath: '/static/tabbar/my-selected.png',
							text: '我的名片'
						},
					]
				}
			}
		},
		methods: {
			setSelected(index) {
				uni.switchTab({
					url: this.tabBar.list[index].pagePath
				})
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		width: 100%;
		position: fixed;
		box-sizing: border-box;
	}
	
	.tabbar-list {
		width: 100%;
		color: #344356;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0px -12px 37px 0px rgba(230,235,243,0.9);
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		box-sizing: border-box;
	}
	
	.tabbar-list-ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
	}
	
	.tabbar-list-li-icon {
		width: 56rpx;
		height: 56rpx;
		margin: 0 auto;
		padding: 20rpx 0;
	}
	
	.tabbar-list-li-icon .tabBarImage {
		width: 56rpx;
		height: 56rpx;
	}
	
	.tabbar-list-li-name {
		width: 100%;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 28rpx;
		font-family: Microsoft YaHei;
	}
	
	.active {
		color: #5468ff;
	}
</style>