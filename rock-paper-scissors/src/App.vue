<template>
<div class="main-game">
  <choose-game v-if="isGameSelectVisible"></choose-game>
  <div v-else>
    <button @click="back">&#8592; <span>Back to game select</span></button>
    <score-bar></score-bar>
    <play-option v-if="!isGameResultsVisible"></play-option>
    <game-results v-else></game-results>
  </div>
</div>
</template>

<script>
import ChooseGame from './components/ChooseGame.vue';
import ScoreBar from './components/ScoreBar.vue';
import PlayOption from './components/PlayOption.vue';
import GameResults from './components/GameResults.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    ChooseGame,
    ScoreBar,
    PlayOption,
    GameResults
  },
  computed: {
    ...mapGetters(['isGameSelectVisible', 'isGameResultsVisible']),
  },
  methods: {
    ...mapMutations(['updateGameSelectScreen', 'updateGameResultsVisible']),
    back() {
      this.updateGameSelectScreen(true);
      this.updateGameResultsVisible(false);
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 100%;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  min-height: 100vh;
  padding: 2rem;
}

img {
  max-width: 100%;
  display: block;
}

.sr-only {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

.outer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.basic .outer-icon {
  width: 130px;
  height: 130px;
}

.extra .outer-icon {
  width: 90px;
  height: 90px;
}

.icon-image {
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  border-radius: 50%;
  border: 0;
  box-shadow: inset 0px 7px 3px rgba(0,0,0,0.3);
}

.basic .icon-image {
  width: 100px;
  height: 100px;
}

.extra .icon-image {
  width: 65px;
  height: 65px;
}
.paper .icon-image {
  background-image: url(./assets/icon-paper.svg);
}
.paper {
  background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  box-shadow: 0px 5px 0 hsl(230deg 89% 55%);
}
.rock .icon-image {
  background-image: url(./assets/icon-rock.svg);
}
.rock {
  background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  box-shadow: 0px 5px 0 hsl(349, 70%, 45%);
}
.scissors .icon-image {
  background-image: url(./assets/icon-scissors.svg);
}
.scissors {
  background: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  box-shadow: 0px 5px 0 hsl(40, 84%, 40%);
}
.lizard .icon-image {
  background-image: url(./assets/icon-lizard.svg);
}
.lizard {
  background: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
  box-shadow: 0px 5px 0 hsl(261, 72%, 55%);
}
.spock .icon-image {
  background-image: url(./assets/icon-spock.svg);
}
.spock {
  background: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
  box-shadow: 0px 5px 0 hsl(189, 58%, 46%);
}
.main-game {
  max-width: 600px;
  margin: auto;
}
</style>

<style scoped>
button {
  background: transparent;
  color: #fff;
  margin-bottom: 1.5rem;
  border: 0;
  padding: 0;
  font-family: 'Barlow Semi Condensed', sans-serif;
  letter-spacing: 0.5px;
}
button span {
  border-bottom: 1px solid #fff;
  padding-bottom: 0.2rem;
}


</style>