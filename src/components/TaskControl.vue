<template>
  <div class="task-control">
    <div>{{ activeTasksCount }} items left</div>
    <button-secondary
      @click="removeAllCompleted"
    >
      Clear completed
    </button-secondary>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeAllCompleted: 'removeAllCompleted',
    }),
  },
  computed: {
    ...mapGetters([
      'activeTasksCount',
    ]),
  },
};
</script>

<style scoped>
  .task-control {
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    width: 100%;
    padding: 15px;
    background: #ffffff;
  }

  .task-control .active {
    border: 1px solid green;
    color: green;
    cursor: default;
  }
  .task-control .active:hover {
    text-decoration: none;
  }
</style>
