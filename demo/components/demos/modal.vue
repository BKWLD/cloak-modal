<template lang='pug'>

div
  .examples
    .example-wrap
      h3.style-h3 Position
      select(v-model='position')
        option(value='center') Center (default)
        option(value='top') Top
        option(value='bottom') Bottom
        option(value='left') Left
        option(value='right') Right
        option(value='top-right') Top-Right
        option(value='top-left') Top-Left
        option(value='bottom-right') Bottom-Right
        option(value='bottom-left') Bottom-Left

    .example-wrap
      h3.style-h3 Fill
      select(v-model='fill')
        option(:value='false') False (default)
        option(:value='true') True

    .example-wrap
      h3.style-h3 Closeable
      select(v-model='closeable')
        option(:value='true') True (default)
        option(:value='false') False

    .example-wrap
      h3.style-h3 Radius
      select(v-model='radius')
        option(value='0') 0px (default)
        option(value='10') 10px
        option(value='30') 30px

    .example-wrap
      h3.style-h3 Margin
      select(v-model='margin')
        option(:value='true') True (default)
        option(:value='false') False

  hr

  .examples
    //- .example-wrap
    //-   h3.style-h3 Transition Type

    .example-wrap
      h3.style-h3 Scroll Lock
      select(v-model='scrollLock')
        option(:value='true') True (default)
        option(:value='false') False

    .example-wrap
      h3.style-h3 Has Overlay
      select(v-model='overlay')
        option(:value='true') True (default)
        option(:value='false') False

    .example-wrap
      h3.style-h3 Overlay Color
      select(v-model='overlayColor')
        option(value='dark') Dark (default)
        option(value='light') Light

    .example-wrap
      h3.style-h3 Timer to Remove
      select(v-model='autoClose')
        option(value='none') None (default)
        option(value='1') 1s
        option(value='5') 5s
        option(value='10') 10s

  h3.style-h3 Mount Modal
  br
  button(@click='open()') Open

</template>

<script lang='coffee'>
import TestModal from './test'
export default

  data: ->
    opened: false
    position: 'center'
    fill: false
    closeable: true
    radius: '0'
    margin: true
    overlay: true
    overlayColor: 'dark'
    scrollLock: true
    autoClose: 'none'

  methods:
    open: () ->
      await @$mountOnBody TestModal,
        parent: @
        propsData:
          position: @position
          fill: @fill
          closeable: @closeable
          radius: @radius
          margin: @margin
          overlay: @overlay
          overlayColor: @overlayColor
          scrollLock: @scrollLock
          autoClose: @autoClose

</script>

<style lang='stylus' scoped>

button, select
  color white
  padding 10px 15px
  border-radius 5px
  border 1px solid white

.example-wrap
  background rgba(0,0,0,.2)
  padding 20px
  margin 0 20px 20px 0
  width calc(50% - 40px)
  border-radius 10px

.examples
  display flex
  align-items stretch
  flex-wrap wrap
  margin-top 30px

.container
  margin 50px 0

.container .style-h3
  margin-bottom 15px

</style>
