import { createStore }  from 'vuex';

const store = createStore({
  state() {
    return {
      toDos: [],
      filter: 'All'
    }
  },
  getters: {
    toDosList(state) {
      return state.toDos;
    },
    tasksToFilter(state) {
      return state.filter;
    }
  },
  actions: {
    addToDo(context, payload) {
      context.commit('addToDo',  payload );
    },
    removeToDo(context, payload) {
      context.commit('removeToDo', payload);
    },
    updateToDo(context, payload) {
      context.commit('updateToDo', payload);
    },
    updateFilter(context, payload) {
      context.commit('updateFilter', payload);
    },
    clearCompletedTodos(context, payload) {
      context.commit('clearCompleted', payload);
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
    }
  }
});

export default store;