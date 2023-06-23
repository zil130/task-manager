import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    tasks: [],
    newTask: '',
    modalVisible: false,
    editedTask: {},
  }),
  getters: {
    activeTasksCount(state) {
      const activeTasks = state.tasks.filter((task) => !task.isCompleted);
      return activeTasks.length;
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    updateNewTask(state, newTask) {
      state.newTask = newTask;
    },
    removeTask(state, task) {
      state.tasks = state.tasks.filter(({ id }) => task.id !== id);
    },
    toggleStatus(state, id) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
      });
    },
    removeAllCompleted(state) {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
    },
    showModal(state, task) {
      state.modalVisible = true;
      state.editedTask = {
        id: task.id,
        task: task.task,
        isCompleted: task.isCompleted,
      };
    },
    hideModal(state) {
      state.modalVisible = false;
    },
    editTask(state) {
      if (state.editedTask.task) {
        state.tasks = state.tasks.map((task) => {
          if (task.id === state.editedTask.id) {
            return { ...state.editedTask };
          }

          return task;
        });
      }
      state.editedTask = {};
      state.modalVisible = false;
    },
  },
  actions: {
    createTask({ state, commit }) {
      if (state.newTask) {
        const task = {
          id: Date.now(),
          task: state.newTask,
          isCompleted: false,
        };
        commit('addTask', task);
        commit('updateNewTask', '');
      }
    },
  },
});

const savedState = localStorage.getItem('state');

if (savedState) {
  store.replaceState(JSON.parse(savedState));
}

store.subscribe((_mutation, state) => {
  localStorage.setItem('state', JSON.stringify(state));
});

export default store;
