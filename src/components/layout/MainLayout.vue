<template>
	<div>
		<slot name="header"></slot>
		<slot name="left-menu"></slot>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'MainLayout',
	components: {

	}
};
</script>
