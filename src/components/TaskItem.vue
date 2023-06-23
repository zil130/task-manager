<template>
  <div class="task">
    <label class="cb-label" :for=task.id>
      <input
        @click="() => toggleStatus(task.id)"
        class="task-checkbox"
        type="checkbox"
        :id=task.id
      />
      <span>{{ task.task }}</span>
    </label>
    <div>
      <button-primary
        @click="() => showModal(task)"
      >
        EDIT
      </button-primary>
      <button-primary
        class="remove-btn"
        @click="() => removeTask(task)"
      >
        DELETE
      </button-primary>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      removeTask: 'removeTask',
      toggleStatus: 'toggleStatus',
      showModal: 'showModal',
    }),
  },
};
</script>

<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
    min-height: 50px;
    padding: 15px;
    font-size: 24px;
    border-bottom: 1px solid lightgrey;
  }

  .cb-label {
    cursor: pointer;
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
    background-image: url('@/icons/check.svg');
    background-size: 80%;
  }

  .remove-btn {
    margin-left: 10px;
  }
</style>
