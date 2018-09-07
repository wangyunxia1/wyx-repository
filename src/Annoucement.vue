<template>
	<div class="alert alert-info">
		<slot name="one">{{msg}}</slot>
		<slot name="two">{{msg1}}</slot>
	</div>
</template>

<script>
	export default{
		data(){   //函数形式，es6新语法， 等于data():function(){}
			return{
				msg:'hello world',
				msg1:'hello '
			}
		}
	}
</script>

