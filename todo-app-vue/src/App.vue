<template>
  <div :class="currentMode" class="main-container">
    <the-header @mode-toggled="updateMode($event)"></the-header>
    <main>
      <todo-create></todo-create>
      <todo-list></todo-list>
      <undo-popup v-if="undoVisible"></undo-popup>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TodoCreate from "./components/TodoCreate.vue";
import TodoList from "./components/TodoList.vue";
import UndoPopup from './components/UndoPopup.vue';

export default {
  name: "App",
  components: {
    TheHeader,
    TodoCreate,
    TodoList,
    UndoPopup,
  },
  data() {
    return {
      currentMode: {
        dark_mode: true,
        light_mode: false,
      },
    };
  },
  computed: {
    undoVisible() {
      return this.$store.getters.undoVisible;
    }
  },
  methods: {
    updateMode(mode) {
      this.currentMode = mode;
      const modeJson = JSON.stringify(mode);
      localStorage.setItem('mode', modeJson);
    },
  },
  mounted() {
    if(localStorage.getItem('mode')) {
      try {  
        const mode = JSON.parse(localStorage.getItem('mode'));
        this.currentMode = mode;
      } catch(e) {
        localStorage.removeItem('mode');
      }
    }
  }
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
  padding-bottom: 2rem;
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
  background: hsl(237, 14%, 26%);
  margin-right: 0.7rem;
  padding: 1px;
  transition: all 0.3s linear;
}

.circle-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  display: flex;
  padding: 1rem;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  align-items: center;
}

/* Dark mode */
.dark_mode {
  background-color: hsl(235, 21%, 11%);
  color: hsl(234, 39%, 85%);
}

.dark_mode .circle-inner {
  background-color: hsl(235, 24%, 19%);
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

.light_mode .circle-inner {
  background-color: hsl(0, 0%, 98%);
}

.light_mode .circle {
  background: hsl(236, 33%, 92%);
}

@media only screen and (min-width: 600px) {
  .form-control {
    font-size: 0.8rem;
    font-weight: 700;
  }
  .circle {
    width: 22px;
    height: 22px;
  }
}
</style>
