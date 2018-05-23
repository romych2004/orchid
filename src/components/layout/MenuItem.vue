<template>
	<router-link :to="href">{{label}}</router-link>
</template>

<script>
export default {
	name: 'MenuItem',
	props: ['id', 'href', 'label']
};
</script>
