<template>
  <ul v-if="todosList != ''" class="todo-items">
    <li
      class="drop-zone"
      v-for="(listItem, index) in todosList"
      :class="{ complete: listItem.complete === true }"
      :key="listItem.taskID"
      @drop="onDrop($event, index)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        class="drag-el form-control"
        draggable="true"
        @dragstart="startDrag($event, index)"
      >
        <label class="circle"
          :for="'checkbox-' + index"
          :aria-label="'Mark task ' + listItem.value + ' as completed'"
        ><img src="../assets/icon-check.svg"></label>
        <input
          type="checkbox"
          :id="'checkbox-' + index"
          @change="toggleCompleted(listItem.taskID)"
        />
        <!-- <input type="text" disabled :value="listItem.value" /> -->
        <span>{{ listItem.value }}</span>
        <img src="../assets/icon-cross.svg" @click="removeTask(index)" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todosList() {
      // return this.$store.getters.toDosList;
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
  //remember this: Props are reactive by default, but assigning props to your data obj on created is breaking the reactivity.
  // Basically, you’re telling the component “On created, set TodosList to the empty todos prop - and stay as this value until I tell you to update”
  // - but the data object doesn’t “watch” the prop value and update automatically when the prop value updates.
  // So rather than create a new data property either use props directly or create a computed function like below

  methods: {
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item);
      console.log('start drag');
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const movedData = this.todosList[itemID];
      this.todosList.splice(itemID, 1);
      this.todosList.splice(list, 0, movedData);
      console.log('on drop');
    },
    toggleCompleted(taskID) {
      this.$store.dispatch("updateToDo", taskID);
      console.log(this.$store.getters.toDosList);
    },
    removeTask(index) {
      this.$store.dispatch("removeToDo", index);
    },
  },
};
</script>

<style scoped>
input[type=checkbox] {
  display: none;
}

.form-control label img {
  display: none;
  width: 10px;
  height: auto;
}

.complete .form-control label img {
  display: block;
}

.complete label {
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.complete span {
  text-decoration: line-through;
  opacity: 0.5;
}

ul {
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  margin: 1rem 0 0;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

li span {
  width: calc(100% - ((20px + 0.7rem) + 12px) );
}

.form-control img {
  width: 12px;
  height: 12px;
}

/* dark mode */
.dark_mode li {
  border-bottom: 1px solid hsl(233, 14%, 35%);
}

/* light mode */
.light_mode li {
  border-bottom: 1px solid hsl(233, 11%, 84%);
}
</style>