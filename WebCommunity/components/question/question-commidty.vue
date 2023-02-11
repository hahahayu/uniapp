<template>
	<view class="question-commidty">
		<view class="" v-if="dataList.length === 0">
			暂无数据...
		</view>
		<block v-for="(item, index) in dataList" :key="index" v-else>
			<QuestionItem :item="item"></QuestionItem>
		</block>
	</view>
</template>

<script>
	import QuestionItem from '@/components/question/question-item.vue'
	
	export default {
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		components: {
			QuestionItem
		}
	}
</script>

<style scoped>
	.question-commidty {
		padding-bottom: 40rpx;
		box-sizing: border-box;
	}
</style>