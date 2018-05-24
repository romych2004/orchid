<template>
	<el-menu-item @click="go" :index="toString(id)">
        <i class="el-icon-document"></i>
        <span>{{label}}</span>
    </el-menu-item>
</template>

<script>
export default {
	name: 'MenuItem',
	props: ['id', 'href', 'label'],
	methods: {
		toString(value) {
			return '' + value;
		},
		go(el) {
			this.$router.push({ path: this.href })
		}
	}
};
</script>

<style lang="scss">

</style>
