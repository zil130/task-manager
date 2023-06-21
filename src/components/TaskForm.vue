<template lang="">
  <form @submit="createTask" class="add-form">
    <label for="add-input">
      <input
        v-model="task.title"
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
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 2px solid lightgrey;
}
</style>
