<template>
	<view class="home-main">
		<block v-for="(item, index) in homeData" :key="index">
			<HomeItem :item="item"></HomeItem>
		</block>
	</view>
</template>

<script>
	import HomeItem from '@/components/index/HomeItem.vue'
	export default {
		props: {
			homeData: {
				type: Array,
				default: []
			}
		},
		onReady() {
			// console.log(typeof(this.homeData), 'bbbbbbbb')
		},
		data() {
			return {}
		},
		components: {
			HomeItem
		}
	}
</script>

<style scoped>
	.home-main {
		width: 676rpx;
		margin: 20rpx 0 0 36rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>