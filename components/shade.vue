<template lang='pug'>

.shade(:class='classes' @click='close()')

</template>

<script lang='coffee'>

export default

	props:
		overlayColor:
			type: String
			default: 'dark'

		closeable:
			type: Boolean
			default: true

	computed:
		classes: -> [
			"overlay-color-#{@overlayColor}"
		]

	methods:

		close: -> if @closeable then @$emit 'close'

</script>

<style lang='stylus' scoped>

.shade
	position fixed
	z-index 1
	opacity .5
	top 0
	left 0
	width 100vw
	height 100vh

	&.overlay-color-dark
		background #303030

	&.overlay-color-light
		background #f0f0f0

</style>
