<template>
	<el-menu :router="true">
		<menu-item v-for="item in items" :key="item.id" v-bind="item"></menu-item>
	</el-menu>
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
			console.error(err);
		});
	},
	components: {
		MenuItem
	}
};
</script>
