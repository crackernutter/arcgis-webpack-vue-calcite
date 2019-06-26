<template><li><a role="menuitem" tabindex="0" href="#" aria-haspopup="true"><span :class="glyphicon"></span> {{name}}</a></li></template>
<script>
export default {
  props: ["datatarget", "name", "glyphicon"],
  data() {
    return {};
  }
};
</script>