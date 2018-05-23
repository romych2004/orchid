<template>
	<main-layout>
		<menu-left slot="left-menu"></menu-left>
		<router-view></router-view>
	</main-layout>
</template>

<script>
import MainLayout from '@layout/MainLayout';
import MenuLeft from '@layout/MenuLeft';
export default {
	name: 'Home',
	components: {
		MainLayout,
		MenuLeft
	}
};
</script>
