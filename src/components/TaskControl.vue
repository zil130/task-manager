<template>
  <div class="task-control">
    <div>{{ activeTasks }} items left</div>
    <button-secondary
      @click="$emit('clearCompleted')"
    >
      Clear completed
    </button-secondary>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    activeTasks() {
      const result = this.tasks.filter((task) => !task.isCompleted);
      return result.length;
    },
  },
};
</script>

<style scoped>
  .task-control {
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    width: 100%;
    padding: 15px;
    background: #ffffff;
  }

  .task-control .active {
    border: 1px solid green;
    color: green;
    cursor: default;
  }
  .task-control .active:hover {
    text-decoration: none;
  }
</style>
