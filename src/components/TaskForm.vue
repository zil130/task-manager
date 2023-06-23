<template>
  <form @submit.prevent="createTask" class="add-form">
    <label for="add-input">
      <input
        ref="addInput"
        v-model="newTask"
        class="add-input"
        type="text"
        placeholder="What needs to be done?"
        id="add-input"
      >
    </label>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      createTask: 'createTask',
    }),
    focusInput() {
      this.$refs.addInput.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
  computed: {
    newTask: {
      get() {
        return this.$store.state.newTask;
      },
      set(value) {
        this.$store.commit('updateNewTask', value);
      },
    },
  },
};
</script>

<style scoped>
  .add-form {
    width: 100%;
  }

  .add-input {
    width: 100%;
    padding: 25px 15px;
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
