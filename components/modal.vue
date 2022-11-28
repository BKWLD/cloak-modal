<template lang='pug'>

.cloak-modal

	transition(name='fade' v-if='overlay')
		shade(
			v-if='opened'
			@close='close'
			v-bind=`{
				closeable,
				overlayColor,
			}`)

	transition(name='fade')
		contents(
			v-show='opened'
			ref='contents'
			@close='close'
			v-bind=`{
				background,
				closeable,
				fill,
				margin,
				position,
				radius,
				scrollLock,
				transition,
			}`)

			slot

</template>

<script lang='coffee'>
import Shade from './shade'
import Contents from './contents'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default

	components: {
		Shade
		Contents
	}

	props:

		closeable:
			type: Boolean
			default: true

		background: String

		fill:
			type: Boolean
			default: false

		position:
			type: String,
			default: 'center'
			validator: (val) -> val in [
				'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left',
				'right', 'top', 'bottom', 'center'
			]

		radius:
			type: String
			default: '0'

		margin:
			type: Boolean
			default: true

		scrollLock:
			type: Boolean
			default: true

		overlay:
			type: Boolean
			default: true

		overlayColor:
			type: String
			default: 'dark'

		transition:
			type: String
			default: "fade"
			validator: (val) -> val in ['fade', 'slide', 'bounce']

		autoClose:
			type: String
			default: 'none'

	data: -> opened: false

	mounted: ->
		@open()
		if @autoClose != 'none'
			@$wait @autoCloseSeconds, =>
				@close()

	computed:

		autoCloseSeconds: ->
			parseInt(@autoClose) * 1000 if @autoClose != 'none'

	methods:
		open: ->
			@opened = true
			if @scrollLock then disableBodyScroll this.$refs.contents.$refs.scroller

		close: ->
			@opened = false
			@$wait 200, =>
				if @scrollLock then clearAllBodyScrollLocks()
				@$el.remove()
				@$destroy()



</script>

<style lang='stylus' scoped>

</style>
