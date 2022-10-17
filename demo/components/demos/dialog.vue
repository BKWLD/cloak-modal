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
        option(value='false') False (default)
        option(value='true') True

  h3.style-h3 Mount Dialog
  br
  button(@click='open("dialog")') Open

</template>

<script lang='coffee'>
import Dialog from '/components/buk-dialog'

export default

  components: { Dialog }

  data: ->
    opened: false
    position: 'center'
    fill: 'false'

  methods:
    open: () ->
      await @$mountOnBody Dialog,
        parent: @
        propsData:
          position: @position
          fill: @fill

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
