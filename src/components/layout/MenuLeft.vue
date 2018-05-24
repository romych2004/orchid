<template>
	<div class="menu">
		<menu-item v-for="item in items" :key="item.id" v-bind="item"></menu-item>
	</div>
</template>

<script>
import MenuItem from '@layout/MenuItem';
export default {
	name: 'MenuLeft',
	props: {
		url: {
			type: String,
			default: '/menu'
		}
	},
	data() {
		return {
			items: []
		};
	},
	created() {
		this.$http.get(this.url).then(response => {
			this.items = response.data;
		}).catch(err => {
			this.$toasted.error('???Error');
			console.error(err);
		});
	},
	components: {
		MenuItem
	}
};
</script>
