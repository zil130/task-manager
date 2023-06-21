<template>
  <div class="tasks">
    <task-form
      @create="createTask"
    />
    <task-list
      :tasks="tasks"
    />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TaskForm, TaskList,
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

.tasks {
  width: 100%;
  background: rgb(255, 255, 255);
}
</style>
