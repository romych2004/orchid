<template>
	<div>
		<menu-item v-for="item in items" :key="item.id" v-bind="item"></menu-item>
	</div>
</template>

<script>
import MenuItem from '@layout/MenuItem';
export default {
	name: 'MenuLeft',
	data() {
		return {
			items: []
		};
	},
	created() {
		this.$http.get('/menu1').then(response => {
			this.items = response.data;
		}).catch(err => {
			this.$toasted.error('???Error');
		});
	},
	components: {
		MenuItem
	}
};
</script>
