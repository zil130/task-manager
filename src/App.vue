<template>
  <div class="tasks">
    <h1 class="title">Task Manager</h1>
    <task-form
      @create="createTask"
    />
    <task-list
      v-if=tasks.length
      :tasks="tasks"
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
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  max-width: 800px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  padding-bottom: 15px;
  font-size: 70px;
  font-weight: 100;
  color: rgb(233, 217, 216);
  text-align: center;
}

.tasks {
  width: 100%;
  background: rgb(255, 255, 255);
}
</style>
