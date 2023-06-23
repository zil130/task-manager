<template>
  <div>
    <modal-window v-model:show="modalVisible">
      <label for="edit-input">
        <input
          v-model.trim="editedTask.task"
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
    <task-form
      @create="createTask"
    />
    <task-list
      v-if=tasks.length
      :tasks="tasks"
      @showModal="showModal"
      @remove="removeTask"
      @toggleStatus="toggleStatus"
      @clearCompleted="clearCompleted"
    />
    <task-list-empty v-else />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
import TaskListEmpty from '@/components/TaskListEmpty.vue';

export default {
  components: {
    TaskForm, TaskList, TaskListEmpty,
  },
  data() {
    return {
      tasks: [],
      modalVisible: false,
      editedTask: {},
    };
  },
  methods: {
    createTask(task) {
      this.tasks.push(task);
    },
    removeTask({ id }) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleStatus({ id }) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
      });
    },
    clearCompleted() {
      this.tasks = this.tasks.filter((task) => !task.isCompleted);
    },
    showModal(task) {
      this.modalVisible = true;
      this.editedTask = {
        id: task.id,
        task: task.task,
        isCompleted: task.isCompleted,
      };
    },
    editTask() {
      this.tasks = this.tasks.map((task) => {
        if (task.id === this.editedTask.id) {
          return { ...this.editedTask };
        }

        return task;
      });
      this.editedTask = {};
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
  .edit-input {
    height: 30px;
  }
</style>
