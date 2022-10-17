<!-- # cloak-dialog

Vue component for triggering animations, adding classes, firing events, and syncing slot variables based on visibility in the viewport.

- [View demo](https://cloak-dialog.netlify.app)
- [Edit CodeSandbox](https://githubbox.com/BKWLD/cloak-dialog)

## Install

```sh
yarn add @bkwld/cloak-dialog
```

### Default

```js
import Dialog from '@bkwld/cloak-dialog'
Vue.component 'dialog', Dialog
```

### Nuxt

```js
// nuxt.config.js
export default {
  buildModules: [ '@bkwld/cloak-dialog/nuxt' ]
}
```

## Usage

Use the `animate` prop to have `cloak-dialog` reset CSS animations when the component does not mount within the viewport.  When the user scrolls far enough to reveal the component, the animations will begin from the start. This is the primary use case of `cloak-dialog`.

```vue
<template>
  <dialog></dialog>
</template>
<style>
.menu {
  border 1px solid blue
}
</style>
```

For more examples, check out [the demo](https://cloak-dialog.netlify.app).
 -->
