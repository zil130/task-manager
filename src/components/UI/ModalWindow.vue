<template>
  <div
    class="container"
    v-if="show"
    @click="hide"
    @keydown="handleKeyDown"
  >
    <div
      class="modal-window"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-window',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hide() {
      this.$emit('update:show', false);
    },
    handleKeyDown(e) {
      if (e.keyCode === 27) {
        this.hide();
      }
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal-window {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 250px;
    margin: auto;
    border-radius: 10px;
    background: white;
  }
</style>
