<template lang='pug'>

.cloak-modal

	transition(name='fade' v-if='overlay == "true"')
		shade(
			v-if='shade && opened'
			@close='close()'
			:closeable='closeable'
			:overlayColor='overlayColor')

	transition(name='fade')
		contents(
			v-show='opened'
			ref='contents'
			@close='close()'
			:fill='fillStyle'
			:closeable='closeable'
			:position='position'
			:radius='radius'
			:margin='margin'
			:scrollLock='scrollLock'
			:transition='transition')

			//- TODO: convert this to a slot
			//- slot
			test-data

</template>

<script lang='coffee'>
import Shade from './shade'
import Contents from './contents'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default

	components: {
		Shade,
		Contents
	}

	props:
		closeable:
			type: String
			default: 'true'

		bkgd:
			type: String
			default: '#999999'

		# TODO: convert to boolean
		fill:
			type: String
			default: 'false'

		position:
			type: String,
			default: 'center'
			validator: (val) -> val in ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom', 'center']

		shade:
			type: Boolean
			default: true

		radius:
			type: String
			default: '0'

		margin:
			type: String
			default: 'true'

		scrollLock:
			type: String
			default: 'true'

		overlay:
			type: String
			default: 'true'

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
		fillStyle: ->
			if @fill == 'true' then return true
			else return false

		autoCloseSeconds: ->
			if @autoClose != 'none'
				return parseInt(@autoClose)*1000

	methods:
		open: ->
			@opened = true
			if @scrollLock == 'true' then disableBodyScroll this.$refs.contents.$refs.scroller

		close: ->
			@opened = false
			@$wait 200, =>
				if @scrollLock == 'true' then clearAllBodyScrollLocks()
				@$el.remove()
				@$destroy()



</script>

<style lang='stylus' scoped>

</style>
