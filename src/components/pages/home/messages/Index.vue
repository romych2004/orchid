<template>
	<div>
		Messages
		{{msg}}
	</div>
</template>

<script>
export default {
	name: 'Messages',
	data() {
		return {
			msg: ''
		};
	},
	created() {
		setTimeout(() => {
			this.msg = 'test';
		}, 1500);
	}
};
</script>
