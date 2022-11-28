<template lang='pug'>
  cloak-modal(v-bind='$props'): .modal
    h3 Modal Contents
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia venenatis lectus, ac cursus ligula. Sed nec enim urna. Nullam congue eros elit, eget consectetur nunc accumsan quis.
    button Button
</template>

<script lang='coffee'>
import CloakModal from '../../../components/modal'
export default

  # Support all props
  props: { ...CloakModal.props }

</script>

<style lang='stylus' scoped>

.modal
  background #101010
  width 400px
  max-width calc(100vw - 40px)
  box-shadow 0 0 30px rgba(0, 0, 0, .2)
  padding 30px

button
  color white
  padding 10px 15px
  border-radius 5px
  border 1px solid white

</style>
