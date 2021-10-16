<template>
  <div class="form-control">
    <label for="newtodo" class="circle" aria-label="Add new to do"><div class="circle-inner"></div></label>
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
import { mapMutations } from 'vuex';
export default {
  emits: ["added-todos"],
  data() {
    return {
      todoval: "",
    };
  },
  computed: {
    taskNumber() {
      return this.$store.getters.taskNumber;
    }
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
    },
    ...mapMutations(['replaceTaskNumber'])
  },
  mounted() {
    if(localStorage.getItem('taskCounter')) {
      try {
        const counter = parseInt(localStorage.getItem('taskCounter'));
        // this.$store.dispatch("replaceTaskNumber", counter);
        this.replaceTaskNumber(counter);
      } catch(e) {
        localStorage.removeItem('taskCounter');
      }
    }
  },
};
</script>

<style scoped>
.form-control {
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

input {
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.7rem;
  width: calc(100% - (20px + 0.7rem));
  height: 20px;
  caret-color: hsl(220, 98%, 61%);
}

/* Dark mode */
.dark_mode input {
  color: hsl(234, 39%, 85%)
}

@media only screen and (min-width: 600px) {
  input {
    font-size: 0.8rem;
    font-weight: 700;
    height: 22px;
  }
}
</style>