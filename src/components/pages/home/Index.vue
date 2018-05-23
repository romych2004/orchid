<template>
	<main-layout>
		<page-header slot="header"></page-header>
		<menu-left slot="left-menu"></menu-left>
		<router-view></router-view>
	</main-layout>
</template>

<script>
import MainLayout from '@layout/MainLayout';
import PageHeader from '@layout/PageHeader';
import MenuLeft from '@layout/MenuLeft';
export default {
	name: 'Home',
	components: {
		PageHeader,
		MainLayout,
		MenuLeft
	}
};
</script>
