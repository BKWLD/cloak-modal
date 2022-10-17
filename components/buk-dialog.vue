<template lang='pug'>

.dialog

	transition(name='fade')
		shade(
			v-if='shade && opened'
			@close='close()'
			:closeable='closeable'
			:bkgd='bkgd')

	transition(name='fade')
		contents(
			v-show='opened'
			ref='contents'
			@close='close()'
			:fill='fillStyle'
			:closeable='closeable'
			:position='position'
			:radius='radius'
			:gutter='gutter'
			:scrollLock='scrollLock'
			:transition='transition')

			//- TODO: convert this to a slot
			//- slot
			test-data

</template>

<script lang='coffee'>
import Shade from './shade'
import Contents from './contents'
import TestData from '~/components/demos/test'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default

	components: {
		Shade,
		Contents
		TestData
	}

	props:
		closeable:
			type: Boolean
			default: true

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
			type: Number
			default: 0

		gutter:
			type: Number
			default: 0

		scrollLock:
			type: Boolean
			deafult: true

		transition:
			type: String
			default: "fade"
			validator: (val) -> val in ['fade', 'slide', 'bounce']

	data: -> opened: false

	mounted: -> @open()

	computed:
		fillStyle: ->
			if @fill == 'true' then return true
			else return false

	methods:
		open: ->
			@opened = true
			disableBodyScroll this.$refs.contents.$refs.scroller

		close: ->
			@opened = false
			@$wait 200, =>
				clearAllBodyScrollLocks()
				@$el.remove()
				@$destroy()



</script>

<style lang='stylus' scoped>

</style>
