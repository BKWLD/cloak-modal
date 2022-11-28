<template lang='pug'>

	//- TODO: better naming conventions
	.contents(:class='classes' :style='styles')

		//- Content pane
		.scroller(ref='scroller'): slot

		//- Make close icon slot-able
		.close(v-if='closeable == "true"' @click='close()')
			slot(name='close')

				//- Default close icon
				| <svg class="close-icon" enable-background="new 0 0 16.7 16.7" viewBox="0 0 16.7 16.7" xmlns="http://www.w3.org/2000/svg"><path d="m7.9-3h1v22.6h-1z" transform="matrix(.7071 -.7071 .7071 .7071 -3.4602 8.3532)"/><path d="m-3 7.9h22.6v1h-22.6z" transform="matrix(.7071 -.7071 .7071 .7071 -3.4602 8.3533)"/></svg>


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
			default: 'true'

		transition:
			type: String
			default: "fade"
			validator: (val) -> val in ['fade', 'slide', 'bounce']

	computed:
		classes: -> [
			@position
			'fill' if @fill
			'margin' if @margin == 'true'
		]

		styles: ->
			borderRadius: "#{@radius}px"

	methods:
		close: ->
			if @closeable then @$emit 'close'

</script>

<style lang='stylus' scoped>

// TODO: vars.styl
gutter = 20px

.contents
	position fixed
	z-index 2
	overflow hidden

	&.top-left
		top 0
		left 0

		&.margin
			top gutter
			left gutter

	&.top-right
		top 0
		right 0

		&.margin
			right gutter
			top gutter

	&.bottom-left
		bottom 0
		left 0

		&.margin
			left gutter
			bottom gutter

	&.bottom-right
		bottom 0
		right 0

		&.margin
			right gutter
			bottom gutter

	&.left
		top 50%
		left 0
		transform translateY(-50%)

		&.margin
			left gutter

		&.fill
			left 0
			top 0
			bottom 0
			transform translateY(0)
			height 100vh

			&.margin
				top gutter
				bottom gutter
				height calc(100vh - 40px)

	&.right
		top 50%
		right 0
		transform translateY(-50%)

		&.margin
			right gutter

		// TODO: convert to variable gutter
		&.fill
			right 0
			top 0
			bottom 0
			transform translateY(0)
			height 100vh

			&.margin
				top gutter
				bottom gutter
				height calc(100vh - 40px)

	&.top
		top 0
		left 50%
		transform translateX(-50%)

		&.margin
			top gutter

		// TODO: convert to variable gutter
		&.fill
			right 0
			left 0
			transform translateX(0)
			width 100vw
			max-width 100vw

			&.margin
				right gutter
				left gutter
				width calc(100vw - 40px)
				max-width calc(100vw - 40px)

	&.bottom
		bottom 0
		left 50%
		transform: translateX(-50%)

		&.margin
			bottom gutter

		// TODO: convert to variable gutter
		&.fill
			right 0
			left 0
			transform translateX(0)
			width 100vw
			max-width 100vw

			&.margin
				right gutter
				left gutter
				width calc(100vw - 40px)
				max-width calc(100vw - 40px)

	&.center
		top 50%
		left 50%
		transform translate(-50%, -50%)

		&.margin
			margin 20px

		&.fill
			width 100vw
			height 100vh

			&.margin
				width calc(100vw - 40px)
				height calc(100vh - 40px)

.full .contents
	height 100vh

.close
	position absolute
	top 20px
	right 20px
	cursor pointer

// Size the close and icon and make it inherit the color
.close-icon
	width 20px
.close-icon path
	fill currentColor

.scroller
	height 100%


</style>
