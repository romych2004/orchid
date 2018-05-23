<template>
	<input
		v-on="inputListeners"
		v-bind="$attrs"

		:value="value"
		:placeholder="placeholder"

		class="test-class"
	>
</template>

<script>
export default {
	name: 'InputText',
	inheritAttrs: false,
	props: ['value', 'placeholder'],
	computed: {
		inputListeners: function() {
			var vm = this;
			// `Object.assign` объединяет объекты вместе, чтобы получить новый объект
			return Object.assign(
				{},
				// Мы добавляем все слушатели из родителя
				this.$listeners,
				// Затем мы можем добавить собственные слушатели или
				// перезаписать поведение некоторых существующих.
				{
					// Это обеспечит, что будет работать v-model на компоненте
					input: function(event) {
						vm.$emit('input', event.target.value);
					}
				}
			);
		}
	}
};
</script>
