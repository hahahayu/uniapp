<template>
	<view class="celebrityList">
		<Celebrity :excellentListInfo="excellentListInfo"></Celebrity>
	</view>
</template>

<script>
	import Celebrity from '@/components/start-school/Celebrity.vue'
	export default {
		props: {
			excellentListInfo: {
				type: Array,
				default: []
			}
		},
		components: {
			Celebrity
		}
	}
</script>

<style>
</style>