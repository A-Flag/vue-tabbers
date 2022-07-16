
<template>
  <div class="gen-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GenCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

