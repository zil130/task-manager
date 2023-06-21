<template>
  <div class="tasks">
    <form @submit="createTask" class="add-form">
      <label for="add-input">
        <input
          v-bind:value="task"
          @input="task = $event.target.value"
          class="add-input"
          type="text"
          placeholder="What needs to be done?"
          id="add-input"
        >
      </label>
    </form>
    <div class="task" v-for="task in tasks" :key="task.id">
      <label class="task-label" :for=task.id>
        <input class="task-checkbox" type="checkbox" :id=task.id />
        <span>{{ task.task }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      task: '',
    };
  },
  methods: {
    createTask(event) {
      event.preventDefault();
      const newTask = {
        id: Date.now(),
        task: this.task,
        isCompleted: false,
      };
      if (this.task) {
        this.tasks.push(newTask);
        this.task = '';
      }
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

.add-form {
  width: 100%;
}

.add-input {
  padding: 25px 15px;
  width: 100%;
  font-size: 24px;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 2px solid lightgrey;
}

.task {
  padding: 15px;
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid lightgrey;
  font-size: 24px;
}

.task-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.task-checkbox + span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.task-checkbox + span::before {
  content: "";
  display: inline-block;
  margin-right: 0.5em;
  width: 1.1em;
  height: 1.1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid lightgrey;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.task-checkbox:checked + span {
  text-decoration: line-through;
  color: grey;
}

.task-checkbox:checked + span::before {
  border: 1px solid green;
  background-image: url('./icons/check.svg');
  background-size: 80%;
}
</style>
