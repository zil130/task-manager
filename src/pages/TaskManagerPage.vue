<template>
  <div>
    <modal-window v-model:show="modalVisible">
      <label for="edit-input">
        <input
          v-model="editedTask.task"
          class="edit-input"
          type="text"
          id="edit-input"
        >
      </label>
      <button-primary
        @click="editTask"
      >
        SAVE
      </button-primary>
    </modal-window>
    <task-form />
    <task-list
      v-if=tasks.length
      :tasks="tasks"
    />
    <task-list-empty v-else />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
import TaskListEmpty from '@/components/TaskListEmpty.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    TaskForm, TaskList, TaskListEmpty,
  },
  methods: {
    ...mapMutations({
      editTask: 'editTask',
    }),
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
      modalVisible: (state) => state.modalVisible,
      editedTask: (state) => state.editedTask,
    }),
  },
};
</script>

<style scoped>
  .edit-input {
    height: 30px;
  }
</style>
