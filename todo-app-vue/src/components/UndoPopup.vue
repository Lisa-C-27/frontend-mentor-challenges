<template>
  <div>
    <p>{{ numberOfTasks }} task<span v-if="numberOfTasks > 1">s</span> removed. <button @click="undoDelete">Undo</button></p>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfTasks() {
      return this.$store.getters.clearedTasks;
    }
  },
  methods: {
    undoDelete() {
      this.$store.dispatch('undoTaskDeletion');
    }
  }
}
</script>

<style scoped>
 div {
   position: fixed;
   bottom: 0;
   right: 0;
   padding: 1rem;
   border-radius: 5px;
   font-size: 0.8rem;
   box-shadow: 0 0 7px rgba(0,0,0,0.4);
   z-index: 9;
   width: 100%;
   text-align: right;
 }

 button {
   background-color: transparent;
   border: 0;
   color: hsl(220, 98%, 61%);
   text-decoration: underline;
   font-family: "Josefin Sans", sans-serif;
 }

 /* dark mode */
 .dark_mode div {
   background-color: hsl(235, 24%, 19%);
 }

 /*light mode */
 .light_mode div {
   background-color: hsl(0, 0%, 98%);
 }

 @media only screen and (min-width: 1024px) {
  div {
    padding: 0.5rem 1.5rem;
    margin: 1rem;
    width: auto;
  }
 }
</style>