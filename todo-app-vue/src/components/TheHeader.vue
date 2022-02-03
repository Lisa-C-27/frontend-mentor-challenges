<template>
  <header>
    <div class="header-container">
      <h1>Todo</h1>
      <div>
        <label for="toggle-mode" aria-label="Toggle light and dark mode"></label>
        <input type="checkbox" id="toggle-mode" @change="toggleMode" :checked="currentMode.light_mode"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["mode-toggled"],
  data() {
    return {
      toggleState: false,
      currentMode: []
    };
  },
  methods: {
    toggleMode() {
      this.toggleState = !this.toggleState;
      localStorage.setItem('toggleState', this.toggleState);
      this.$emit("mode-toggled", this.modeClasses);
    },
  },
  computed: {
    modeClasses() {
      return {
        dark_mode: !this.toggleState,
        light_mode: this.toggleState,
      };
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
    if(localStorage.getItem('toggleState')) {
      try {  
        this.toggleState = localStorage.getItem('toggleState');
      } catch(e) {
        localStorage.removeItem('toggleState');
      }
    }
  }
};
</script>

<style scoped>
header {
  padding: 2.5em 1.2em 7.5em;
  color: hsl(0, 0%, 98%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.header-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header-container div {
  position: relative;
}

h1 {
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.6rem;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 20px;
  height: 20px;
  top: 0;
  cursor: pointer;
}

label {
  width: 20px;
  height: 20px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
/* Dark Mode */
.dark_mode header {
  background-image: url(../assets/bg-mobile-dark.jpg);
}

.dark_mode label {
  background-image: url(../assets/icon-sun.svg);
}

/* Light Mode */
.light_mode header {
  background-image: url(../assets/bg-mobile-light.jpg);
}

.light_mode label {
  background-image: url(../assets/icon-moon.svg);
}

@media only screen and (min-width: 600px) {
  .dark_mode header {
    background-image: url(../assets/bg-desktop-dark.jpg);
  }
  .light_mode header {
    background-image: url(../assets/bg-desktop-light.jpg);
  }
}

@media only screen and (min-width: 1024px) {
  header {
    padding: 7em 1.2em;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>
