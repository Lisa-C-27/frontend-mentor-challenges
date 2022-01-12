<template>
  <section>
    <h1>Choose your game</h1>
    <div>
      <button @click="gameChosen('basic')">Rock, Paper, Scissors</button>
      <button @click="gameChosen('extra')">Rock, Paper, Scissors, Lizard, Spock</button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    gameChosen(game) {
      this.updateChosenGame(game);
      this.updateGameSelectScreen(false);
    },
    ...mapMutations(['updateChosenGame', 'updateGameSelectScreen', 'updateCurrentOptions']),
  }
}
</script>

<style scoped>
section {
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
}
h1 {
  font-size: 700;
  color: #fff;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
}
button {
  width: 100%;
  background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  color: #fff;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 0;
  font-family: 'Barlow Semi Condensed', sans-serif;
  letter-spacing: 0.5px;
}
button:last-child {
  background: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
}
</style>