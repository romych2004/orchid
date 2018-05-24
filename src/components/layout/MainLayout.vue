<template>
	<div class="main-layout-wrapper">
		<div class="main-layout">
			<div class="left-menu">
				<slot name="left-menu"></slot>
			</div>
			<slot></slot>
		</div>
	</div>
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
