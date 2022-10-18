<template lang='pug'>

	//- TODO: better naming conventions
	.wrapper(:class='classes' :style='styles')

		//- TODO: X icon
		.close(v-if='closeable == "true"' @click='close()') Close

		.scroller(ref='scroller')
			slot

</template>

<script lang='coffee'>

export default

	# props should be passed as a group...

	props:

		# TODO: make bookean
		closeable:
			type: String
			default: 'true'

		fill:
			type: Boolean
			default: false

		position:
			type: String,
			default: 'center'
			validator: (val) -> val in ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom', 'center']

		radius:
			type: String
			default: '0'

		margin:
			type: String
			default: '0'

		scrollLock:
			type: Boolean
			deafult: true

		transition:
			type: String
			default: "fade"
			validator: (val) -> val in ['fade', 'slide', 'bounce']

	computed:
		classes: -> [
			@position
			'fill' if @fill
		]

		styles: ->
			margin: "#{@margin}px"
			borderRadius: "#{@radius}px"

	methods:
		close: ->
			if @closeable then @$emit 'close'

</script>

<style lang='stylus' scoped>

// TODO: vars.styl
gutter = 40px

.wrapper
	position fixed
	background #101010
	z-index 2
	width calc(100% - 40px)
	max-width 400px
	box-shadow 0 0 30px rgba(0, 0, 0, .2)
	overflow hidden

	&.top-left
		top 0
		left 0

	&.top-right
		top 0
		right 0

	&.bottom-left
		bottom 0
		left 0

	&.bottom-right
		bottom 0
		right 0

	&.left
		top 50%
		left 0
		transform translateY(-50%)

		&.fill
			left 0
			top 0
			bottom 0
			transform translateY(0)
			height 100vh

	&.right
		top 50%
		right 0
		transform translateY(-50%)

		// TODO: convert to variable gutter
		&.fill
			right 0
			top 0
			bottom 0
			transform translateY(0)
			height 100vh

	&.top
		top 0
		left 50%
		transform translateX(-50%)

		// TODO: convert to variable gutter
		&.fill
			right 0
			left 0
			transform translateX(0)
			width 100vw
			max-width 100vw

	&.bottom
		bottom 0
		left 50%
		transform: translateX(-50%)

		// TODO: convert to variable gutter
		&.fill
			right 0
			left 0
			transform translateX(0)
			width 100vw
			max-width 100vw

	&.center
		top 50%
		left 50%
		transform translate(-50%, -50%)

		&.fill
			width 100vw
			max-width 100vw
			height 100vh

.full .wrapper
	height 100vh

.close
	position absolute
	top 20px
	right 20px
	cursor pointer

.scroller
	height 100%
	padding 30px


</style>
