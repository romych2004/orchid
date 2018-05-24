<template>
	<el-container>
		<el-aside width="200px">
			<slot name="left-menu"></slot>
		</el-aside>
		<el-main><slot></slot></el-main>
	</el-container>
</template>

<script>
export default {
	name: 'MainLayout',
	components: {

	}
};
</script>

<style>

</style>
