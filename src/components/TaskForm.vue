<template>
  <form @submit="createTask" class="add-form">
    <label for="add-input">
      <input
        ref="addInput"
        v-model.trim="task.title"
        class="add-input"
        type="text"
        placeholder="What needs to be done?"
        id="add-input"
      >
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
      },
    };
  },
  methods: {
    createTask(event) {
      event.preventDefault();
      if (this.task.title) {
        const newTask = {
          id: Date.now(),
          task: this.task.title,
          isCompleted: false,
        };
        this.$emit('create', newTask);
        this.task = {
          title: '',
        };
      }
    },
    focusInput() {
      this.$refs.addInput.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
};
</script>

<style scoped>
.add-form {
  width: 100%;
}

.add-input {
  padding: 25px 15px;
  width: 100%;
  font-size: 24px;
  outline: none;
  border-top: 2px solid lightgrey;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid lightgrey;
}

.add-input::placeholder {
    opacity: 0.3;
}
</style>
