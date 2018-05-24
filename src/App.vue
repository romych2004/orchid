<template>
	<div id="app">
		<el-container>
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

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
