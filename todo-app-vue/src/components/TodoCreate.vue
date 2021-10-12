<template>
  <div class="form-control">
    <label for="newtodo" class="circle" aria-label="Add new to do"></label>
    <input autocomplete="off"
      type="text"
      id="newtodo"
      placeholder="Create a new todo..."
      v-model="todoval"
      v-on:keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  emits: ["added-todos"],
  data() {
    return {
      todoval: "",
      taskNumber: 0,
    };
  },
  methods: {
    addTodo() {
      const val = this.todoval;
      const taskNumber = this.taskNumber;
      this.$store.dispatch("addToDo", {
        taskID: taskNumber,
        value: val,
        complete: false,
      });
      this.todoval = "";
      this.taskNumber++;
      console.log(this.$store.getters.toDosList);
    },
  },
};
</script>

<style scoped>
.form-control {
  border-radius: 5px;
}

input {
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.6rem;
}

/* Dark mode */
.dark_mode input {
  color: hsl(234, 39%, 85%)
}
</style>