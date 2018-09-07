<template>
	<div>
		<button class="btn btn-primary" @click="share">分享到微信</button>
	</div>
</template>

<script>
	export default{
		methods:{
			share(){
				this.$emit("shared",{
					name:'wnagyuxna'
				}) //自定义事件，创建源对象
			}
		}
	}
</script>

<style>
</style>