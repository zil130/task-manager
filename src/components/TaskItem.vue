<template>
  <div class="task">
    <label class="task-label" :for=task.id>
      <input class="task-checkbox" type="checkbox" :id=task.id />
      <span>{{ task.task }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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
  background-image: url('@/icons/check.svg');
  background-size: 80%;
}
</style>
