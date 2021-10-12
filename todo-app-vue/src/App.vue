<template>
  <div :class="currentMode" class="main-container">
    <the-header @mode-toggled="updateMode($event)"></the-header>
    <main>
      <todo-create></todo-create>
      <todo-list></todo-list>
      <todo-filter></todo-filter>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TodoCreate from "./components/TodoCreate.vue";
import TodoList from "./components/TodoList.vue";
import TodoFilter from "./components/TodoFilter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TodoCreate,
    TodoList,
    TodoFilter,
  },
  data() {
    return {
      currentMode: {
        dark_mode: true,
        light_mode: false,
      },
    };
  },
  methods: {
    updateMode(mode) {
      this.currentMode = mode;
    },
  },
};
</script>

<style>
:root {
  --primary-color: ;
}

html {
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
}

body,
ul,
li,
p,
div,
label,
input,
h1 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-weight: 400;
}

.main-container {
  min-height: 100vh;
}

main {
  padding: 0 1.2rem;
  margin: -5.5rem auto 0;
  max-width: 600px;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid hsl(237, 14%, 26%);
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  display: flex;
  padding: 1rem;
  font-size: 0.6rem;
  letter-spacing: 0.5px;
  align-items: center;
}

/* Dark mode */
.dark_mode {
  background-color: hsl(235, 21%, 11%);
  color: hsl(234, 39%, 85%);
}

.dark_mode .form-control {
  background-color: hsl(235, 24%, 19%);
}

.dark_mode .circle {
  border: 1px solid hsl(237, 14%, 26%);
}

/* Light Mode */
.light_mode {
  background-color: hsl(236, 33%, 95%);
}

.light_mode .form-control {
  background-color: hsl(0, 0%, 98%);
}

.light_mode .circle {
  border: 1px solid hsl(236, 33%, 92%);
}
</style>
