<template>
	<div class="menu-item">
		<router-link :to="href">{{label}}</router-link>
	</div>
</template>

<script>
export default {
	name: 'MenuItem',
	props: ['id', 'href', 'label']
};
</script>

<style lang="scss">
	.menu-item {
		color: $red;
	}
</style>
