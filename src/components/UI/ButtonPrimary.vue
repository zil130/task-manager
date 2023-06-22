<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-primary',
};
</script>

<style scoped>
  .btn {
    padding: 6px;
    background: transparent;
    border: 1px solid green;
    color: green;
    cursor: pointer;
  }
</style>
