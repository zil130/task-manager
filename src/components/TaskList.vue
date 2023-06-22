<template>
  <transition-group name="list">
    <task-item
      :task="task"
      v-for="task in tasks"
      :key="task.id"
      @remove="$emit('remove', task)"
    />
  </transition-group>
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
