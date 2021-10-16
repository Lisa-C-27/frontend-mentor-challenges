import { createStore }  from 'vuex';

const store = createStore({
  state() {
    return {
      toDos: [],
      filter: 'All',
      currentTaskNumber: 0,
      previousTaskList: [],
      undoVisible: false,
      clearedTasks: 0
    }
  },
  getters: {
    toDosList(state) {
      return state.toDos;
    },
    tasksToFilter(state) {
      return state.filter;
    },
    taskNumber(state) {
      return state.currentTaskNumber;
    },
    previousTasks(state) {
      return state.previousTaskList;
    },
    undoVisible(state) {
      return state.undoVisible;
    },
    clearedTasks(state) {
      return state.clearedTasks;
    }
  },
  actions: {
    addToDo(context, payload) {
      context.commit('addToDo',  payload );
      context.commit('updateTaskNumber');
      context.commit('updateSaved');
    },
    removeToDo(context, payload) {
      const tasks = context.getters.toDosList;
      context.commit('savePreviousTasks', tasks);
      context.commit('removeToDo', payload);
      context.commit('updateSaved');
    },
    updateToDo(context, payload) {
      context.commit('updateToDo', payload);
      context.commit('updateSaved');
    },
    clearCompletedTodos(context, payload) {
      context.commit('clearCompleted', payload);
      context.commit('updateSaved');
    },
    undoTaskDeletion(context) {
      const tasks = context.getters.previousTasks;
      console.log('context.getters');
      console.log(tasks);
      context.commit('undoTaskDeletion', tasks);
    }
  },
  mutations: {
    addToDo(state, payload) {
      state.toDos.push(payload);
    },
    removeToDo(state, payload) {
      const filterList = state.toDos.filter(item => item.taskID !== payload);
      state.toDos = filterList;
      state.clearedTasks = 1;
    },
    updateToDo(state, payload) {
      const todo = state.toDos.findIndex(item => item.taskID === payload);
      state.toDos[todo].complete = !state.toDos[todo].complete;
    },
    updateFilter(state, payload) {
      state.filter = payload;
    },
    clearCompleted(state, payload) {
      const tasks = state.toDos;
      state.toDos = payload;
      state.clearedTasks = tasks.length - payload.length;
    },
    updateSaved(state) {
      const data = state.toDos;
      const jsonData = JSON.stringify(data);
      localStorage.setItem('tasks', jsonData);
      localStorage.setItem('taskCounter', state.currentTaskNumber);
    },
    addSavedToDoList(state, payload) {
      state.toDos = payload;
    },
    updateTaskNumber(state) {
      state.currentTaskNumber++
    },
    replaceTaskNumber(state, payload) {
      state.currentTaskNumber = payload;
    },
    savePreviousTasks(state, payload) {
      state.previousTaskList = payload;
      console.log('savePreviousTasks payload');
      console.log(payload);
    },
    undoTaskDeletion(state, payload) {
      state.toDos = payload;
      const data = state.toDos;
      const jsonData = JSON.stringify(data);
      localStorage.setItem('tasks', jsonData);
      state.previousTaskList = [];
      state.clearedTasks = 0;
      state.undoVisible = false;
    },
    updateUndoVisible(state, payload) {
      state.undoVisible = payload;
      setTimeout(function() {
          state.undoVisible = false;
      }, 8000);
    }
  },
});

export default store;