<template>
<section>
  <div class="filter" v-if="allItems != ''">
    <p>
      {{ activeItems.length }} item<span v-if="activeItems.length !== 1"
        >s</span
      >
      <span v-if="allItems.length !== 0"> left</span>
    </p>
    <transition>
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
        :class="{ active: activeClass == 'Completed', disabled : completedItems == ''}"
      >
        Completed
      </li>
    </ul>
    </transition>
    <p><span v-if="completedItems != ''" @click="clearCompleted">Clear Completed</span></p>
  </div>
</section>
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
    completedItems() {
      const todos = this.$store.getters.toDosList;
      return todos.filter((item) => item.complete === true);
    },
  },
  methods: {
    filter(items) {
      this.$store.dispatch("updateFilter", items);
    },
    clearCompleted() {
      const activeTodos = this.activeItems;
      this.$store.dispatch('clearCompletedTodos', activeTodos);
      this.$store.dispatch("updateFilter", 'All');
    }
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
}

.filter p {
  width: 50%;
  padding: 1.1rem;
  font-size: 0.7rem;
  color: hsl(233, 14%, 35%);
}

.filter p:first-child {
  border-radius: 0 0 0 5px;
}

.filter p:last-child {
  text-align: right;
  border-radius: 0 0 5px 0;
}

ul {
  position: absolute;
  bottom: -4rem;
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

ul li {
  padding: 0 0.5rem;
}

li.active {
  color: hsl(220, 98%, 61%);
}

li.disabled {
  cursor: default;
  color: hsl(233, 14%, 35%);
}

/* dark mode */
.dark_mode .filter p {
  background-color: hsl(235, 24%, 19%);
}

.dark_mode ul {
  background-color: hsl(235, 24%, 19%);
  color: hsl(234, 11%, 52%);
}

/* light mode */
.light_mode .filter p {
  background-color: hsl(0, 0%, 98%);
}
.light_mode ul {
  background-color: hsl(0, 0%, 98%);
}

.light_mode li.disabled {
  color: hsl(233, 11%, 84%);
}

.light_mode li:not(.active):not(.disabled) {
  color: hsl(236, 9%, 61%);
}

@media only screen and (min-width: 600px) {
  .filter {
    width: 100%;
    justify-content: space-between;
    border-radius: 0 0 5px 5px;
  }

  ul {
    position: initial;
    order: initial;
    width: 50%;
    box-shadow: none;
    margin: 0;
    align-items: center;
  }

  li {
    color: hsl(236, 9%, 61%);
  }

  ul li {
    padding: 0.1rem 0.5rem 0;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  ul li:not(.disabled):not(.active):hover,
  .filter p:last-child:hover {
    color: hsl(234, 39%, 85%);
  }

  .filter p {
    transition: color 0.3s ease-in-out;
    width: 25%;
  }

  .filter p:last-child {
    cursor: pointer;
  }

  /* dark mode */
  .dark_mode .filter {
    background-color: hsl(235, 24%, 19%);
  }

  /* light mode */

  .light_mode .filter {
    background-color: hsl(0, 0%, 98%);
  }

  .light_mode .filter p {
    color: hsl(236, 9%, 61%);
  }

  .light_mode ul li:hover:not(.disabled):not(.active),
  .light_mode .filter p:last-child:hover {
    color: hsl(235, 19%, 35%);
  }
}
</style>
