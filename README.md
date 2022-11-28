<!-- # cloak-modal

Vue component for triggering animations, adding classes, firing events, and syncing slot variables based on visibility in the viewport.

- [View demo](https://cloak-modal.netlify.app)
- [Edit CodeSandbox](https://githubbox.com/BKWLD/cloak-modal)

## Install

```sh
yarn add @cloak-app/modal
```

### Default

```js
import Modal from '@cloak-app/modal'
Vue.component 'modal', Modal
```

### Nuxt

```js
// nuxt.config.js
export default {
  buildModules: [ '@cloak-app/modal/nuxt' ]
}
```

## Usage

Use the `animate` prop to have `cloak-modal` reset CSS animations when the component does not mount within the viewport.  When the user scrolls far enough to reveal the component, the animations will begin from the start. This is the primary use case of `cloak-modal`.

```vue
<template>
  <modal></modal>
</template>
<style>
.menu {
  border 1px solid blue
}
</style>
```

For more examples, check out [the demo](https://cloak-modal.netlify.app).
 -->
