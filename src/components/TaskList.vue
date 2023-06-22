<template>
  <div class="task-list">
    <transition-group name="list">
      <task-item
        :task="task"
        v-for="task in tasks"
        :key="task.id"
        @remove="$emit('remove', task)"
        @toggleStatus="$emit('toggleStatus', task)"
      />
    </transition-group>
    <task-control
      @clearCompleted="$emit('clearCompleted')"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import TaskControl from '@/components/TaskControl.vue';

export default {
  components: { TaskItem, TaskControl },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

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
