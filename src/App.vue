<template>
	<div id="app">
		<el-container class="is-vertical">
			<page-header></page-header>
			<router-view/>
		</el-container>
	</div>
</template>

<script>
import PageHeader from '@layout/PageHeader';
export default {
	name: 'App',
	components: {
		PageHeader
	}
};
</script>

<style lang="scss">
	#app {
		max-width: $max-width;
		margin: 0 auto;
	}
</style>
