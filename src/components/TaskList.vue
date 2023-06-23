<template>
  <div class="task-list">
    <transition-group name="list">
      <task-item
        :task="task"
        v-for="task in tasks"
        :key="task.id"
      />
    </transition-group>
    <task-control />
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import TaskControl from '@/components/TaskControl.vue';
import { mapState } from 'vuex';

export default {
  components: { TaskItem, TaskControl },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
    }),
  },
};
</script>

<style scoped>
  .task-list {
    display: flex;
    flex-direction: column;
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
