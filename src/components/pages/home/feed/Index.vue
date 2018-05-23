<template>
	<div>
		Feed1
		<button @click="test">Toaster</button>
	</div>
</template>

<script>
export default {
	name: 'Feed',
	methods: {
		test: function() {
			this.$toasted.success('Holla !!');
		}
	},
	created() {

	}
};
</script>
