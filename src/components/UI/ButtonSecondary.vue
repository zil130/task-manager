<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-secondary',
};
</script>

<style scoped>
  .btn {
    padding: 6px;
    border: none;
    background: transparent;
    text-decoration: underline;
    color: green;
    cursor: pointer;
  }
</style>
