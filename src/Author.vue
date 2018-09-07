<template>
	<div >
		<p>作者：{{articleName}}</p>
	</div>
</template>

<script>
	export default{
//		data(){
//			return {
//				name:'lucy'
//			}
//		}
		props : {
			//特性名驼峰命名articleName与article-name一样，
			'articleName':{
				type:[String,Number],
				default:'lucy',
//				required: true,和default只能同时存在一个
			}
		}
	}
</script>

<style>
</style>