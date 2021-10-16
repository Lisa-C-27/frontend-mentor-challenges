<template>
<div v-if="todosList != ''">
  <ul class="todo-items">
    <draggable
      :list="filteredTodosList"
      item-key="taskID"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{element, index}">
        <li :class="{ complete: element.complete === true }">
          <div class="form-control">
            <label
              class="circle"
              :for="'checkbox-' + index"
              :aria-label="'Mark task ' + element.value + ' as completed'"
            ><div class="circle-inner">
              <img src="../assets/icon-check.svg"/>
              </div>
            </label>
            <input
              type="checkbox"
              :id="'checkbox-' + index"
              @change="toggleCompleted(element.taskID)"
            />
            <span>{{ element.value }}</span>
            <div class="complete-task"  @click="removeTask(element.taskID)">
              <img src="../assets/icon-cross.svg"/>
            </div>
          </div>
        </li>
      </template>
    </draggable>
    <todo-filter></todo-filter>
  </ul>
  <div class="drag-text" v-if="todosList.length > 1">
    <p>Drag and drop to reorder list</p>
  </div>
</div>
<div v-else>
  <p class="list-empty">There are currently no todo's. Add some!</p>
</div>
</template>

<script>
import draggable from "vuedraggable";
import TodoFilter from './TodoFilter.vue';
import { mapMutations } from 'vuex';
export default {
  components: {
    draggable,
    TodoFilter
  },
  data() {
    return {
      dragging: false,
    };
  },
  computed: {
    todosList() {
      return this.$store.getters.toDosList;
    },
    filteredTodosList() {
      const todos = this.$store.getters.toDosList;
      const filter = this.$store.getters.tasksToFilter;
      if (filter === "Active") {
        return todos.filter((item) => item.complete === false);
      } else if (filter === "Completed") {
        return todos.filter((item) => item.complete === true);
      } else {
        return todos;
      }
    },
  },
  mounted() {
    if(localStorage.getItem('tasks')) {
      try {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        this.addSavedToDoList(savedTasks);
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },

  methods: {
    toggleCompleted(taskID) {
      this.$store.dispatch("updateToDo", taskID);
    },
    removeTask(taskId) {
      const todos = this.todosList;
      this.savePreviousTasks(todos);
      this.$store.dispatch("removeToDo", taskId);
      this.updateUndoVisible(true);
    },
    ...mapMutations(['updateUndoVisible', 'addSavedToDoList', 'savePreviousTasks']),
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}

.form-control label img {
  visibility: hidden;
  width: 10px;
  height: auto;
}

.complete .form-control label img {
  visibility: visible;
}

.complete label div {
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.complete span {
  text-decoration: line-through;
  opacity: 0.5;
}

ul {
  border-radius: 5px;
  margin: 1rem 0 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  position: relative;
}

li span {
  width: calc(100% - ((20px + 0.7rem) + 25px));
}

.form-control img {
  width: 12px;
  height: 12px;
}

.ghost {
  opacity: 0.7;
}

.todo-items li {
  cursor: grab;
}

.todo-items label,
.todo-items img {
  cursor: pointer;
}

.todo-items .sortable-chosen {
  cursor: grabbing;
}

.todo-items li:first-child > div {
  border-radius: 5px 5px 0 0;
}

.drag-text {
  margin-top: 6rem;
  text-align: center;
  font-size: 0.8rem;
  color: hsl(233, 14%, 35%);
}

.list-empty {
  margin-top: 10rem;
  text-align: center;
  color: hsl(236, 9%, 61%);
}

.complete-task {
  padding: 5px;
  cursor: pointer;
}
/* dark mode */
.dark_mode li {
  border-bottom: 1px solid hsl(233, 14%, 35%);
}

.dark_mode .sortable-chosen .form-control {
  transition: border 0.1s ease-in 0.1s;
  border: 2px solid hsl(233, 14%, 35%);
}

/* light mode */
.light_mode li {
  border-bottom: 1px solid hsl(233, 11%, 84%);
}

.light_mode .sortable-chosen .form-control {
  transition: border 0.1s ease-in 0.1s;
  border: 2px solid hsl(233, 11%, 84%);
}

.light_mode .form-control {
  color: hsl(235, 19%, 35%);
}

.complete .circle {
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

@media only screen and (min-width: 600px) {
  .drag-text {
    margin-top: 2rem;
  }
}
@media only screen and (min-width: 1024px) {
  .complete-task img {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .todo-items li:hover .complete-task img {
    opacity: 1;
    visibility: visible;
  }
  .circle:hover {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
}
</style>
