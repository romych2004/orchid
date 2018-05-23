<template>
	<component :is="inline ? 'span' : 'div'">
		<slot></slot>
	</component>
</template>

<script>
export default {
	name: 'OutputText',
	props: ['inline'],

	data() {
		return {

		};
	}
};
</script>
