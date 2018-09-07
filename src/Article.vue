<template>
	<div class="container">
		<h1>{{title}}</h1>
		<p>发表于：{{date | moment}}</p>
		<p>分享次数：{{shareTime}}</p>
		<p class="lead">
			{{content}}
		</p>
		<app-author :article-name = "name"></app-author>
		<app-share @shared = "fooShare($event,10)"></app-share>
	</div>
</template>

<script>
	import moment from "moment"
	import Author from "./Author.vue"
	import Share from "./share.vue"
	export default{
		data(){
			return{ 
				title:'这是一个标题',
				date:new Date(),
				content:'还不够你吃的',
				name:"lucy",
				shareTime:0
			}
		},
		filters : {
			moment:function(value){
				return moment(value).format("MMMM Do")
			}
		},
		components:{
			'app-author' : Author,
			'app-share'	 : Share
		},
		methods:{
			fooShare(event,age){  //事件源对象
				console.log(event,age)
				this.shareTime++
//				alert("分享了"+this.shareTime++)
			}
		}
	}
</script>

<style scoped="">
	*{
		color: red;
	}
</style>

