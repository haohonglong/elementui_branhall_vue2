<template>
<li class="L ml10">
    <span v-if="warning" class="warning">*</span> <label> {{ label }} : </label>
    <input :type="type" :name="name" :style="input_style" :class="'text name ' + input_class" v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)">
      <span class="font-14 font-bold" v-text="unit"></span>
    <span class="warning" v-text="error"></span>
</li>
</template>

<script>
	export default {
		props: {
			'name': String,
			'error': {
					type: String,
					default: ""
			},
			'unit': {
					type: String,
					default: ""
			},
			'type': {
					type: String,
					default: "text"
			},
			'label': String, 
			'warning': {
					type: Boolean,
					default: true
			}, 
			'value': [String, Number], 
			'input_style': {
					type: String,
					default: ''
			}, 
			'input_class': {
					type: String,
					default: ''
			}
		},
		data: function () {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>