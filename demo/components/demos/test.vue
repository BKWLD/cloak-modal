<template lang='pug'>
  cloak-modal(v-bind='$props' background='#101010'): .modal
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
  width 400px
  max-width calc(100vw - 40px)
  padding 30px

button
  color white
  padding 10px 15px
  border-radius 5px
  border 1px solid white

</style>
