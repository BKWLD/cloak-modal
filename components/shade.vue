<template lang='pug'>

.shade(@click='close()')

</template>

<script lang='coffee'>

export default

	props:
		bkgd:
			type: String
			default: '#999999'

		closeable:
			type: Boolean
			default: true

	methods:
		close: -> if(@closeable) then @$emit 'close'

</script>

<style lang='stylus' scoped>

.shade
	position fixed
	z-index 1
	background #333333
	opacity .5
	top 0
	left 0
	width 100vw
	height 100vh

</style>
