<template>
  <task-item
    :task="task"
    v-for="task in tasks"
    :key="task.id"
  />
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
