import { createStore }  from 'vuex';

const store = createStore({
  state() {
    return {
      toDos: [],
      filter: 'All',
      currentTaskNumber: 0
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
    }
  },
  actions: {
    addToDo(context, payload) {
      context.commit('addToDo',  payload );
      context.commit('updateTaskNumber');
      context.commit('updateSaved');
    },
    removeToDo(context, payload) {
      context.commit('removeToDo', payload);
      context.commit('updateSaved');
    },
    updateToDo(context, payload) {
      context.commit('updateToDo', payload);
      context.commit('updateSaved');
    },
    updateFilter(context, payload) {
      context.commit('updateFilter', payload);
    },
    clearCompletedTodos(context, payload) {
      context.commit('clearCompleted', payload);
      context.commit('updateSaved');
    },
    addSavedToDos(context, payload) {
      context.commit('addSavedToDoList',  payload );
    },
    replaceTaskNumber(context, payload) {
      context.commit('replaceTaskNumber', payload);
    }
  },
  mutations: {
    addToDo(state, payload) {
      state.toDos.push(payload);
    },
    removeToDo(state, payload) {
      state.toDos.splice(payload, 1);
    },
    updateToDo(state, payload) {
      const todo = state.toDos.findIndex(item => item.taskID === payload);
      state.toDos[todo].complete = !state.toDos[todo].complete;
    },
    updateFilter(state, payload) {
      state.filter = payload;
    },
    clearCompleted(state, payload) {
      state.toDos = payload;
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
    }
  }
});

export default store;