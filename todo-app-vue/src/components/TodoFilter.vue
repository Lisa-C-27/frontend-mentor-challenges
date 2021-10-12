<template>
  <div>
    <p>
      {{ activeItems.length }} item<span v-if="activeItems.length !== 1"
        >s</span
      >
      <span v-if="allItems.length !== 0"> left</span>
    </p>
    <ul>
      <li @click="filter('All')" :class="{ active: activeClass == 'All' }">
        All
      </li>
      <li
        @click="filter('Active')"
        :class="{ active: activeClass == 'Active' }"
      >
        Active
      </li>
      <li
        @click="filter('Completed')"
        :class="{ active: activeClass == 'Completed' }"
      >
        Completed
      </li>
    </ul>
    <p @click="clearCompleted">Clear Completed</p>
  </div>
</template>

<script>
export default {
  computed: {
    activeItems() {
      const todos = this.$store.getters.toDosList;
      return todos.filter((item) => item.complete === false);
    },
    allItems() {
      return this.$store.getters.toDosList;
    },
    activeClass() {
      return this.$store.getters.tasksToFilter;
    },
  },
  methods: {
    filter(items) {
      this.$store.dispatch("updateFilter", items);
    },
    clearCompleted() {
      const activeTodos = this.activeItems;
      this.$store.dispatch('clearCompletedTodos', activeTodos);
    }
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
}

div p {
  width: 50%;
  padding: 1.1rem;
  font-size: 0.7rem;
  color: hsl(233, 14%, 35%);
}

div p:first-child {
  border-radius: 0 0 0 5px;
}

div p:last-child {
  text-align: right;
  border-radius: 0 0 5px 0;
}

ul {
  width: 100%;
  display: flex;
  order: 3;
  justify-content: center;
  list-style-type: none;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 700; 
  border-radius: 5px;
}

ul li {
  padding: 0 0.5rem;
}

li.active {
  color: hsl(220, 98%, 61%);
}

/* dark mode */
.dark_mode div p {
  background-color: hsl(235, 24%, 19%);
}

.dark_mode ul {
  background-color: hsl(235, 24%, 19%);
  color: hsl(234, 11%, 52%);
}
</style>
