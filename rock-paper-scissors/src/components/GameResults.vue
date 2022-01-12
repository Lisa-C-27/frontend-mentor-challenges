<template>
  <div class="game-results" :class="chosenGame">
    <div class="choice choice_player">
      <h2>You picked</h2>
      <div :class="playerChose" class="outer-icon">
        <div class="icon-image"><span class="sr-only">{{ playerChose }}</span></div>
      </div>  
    </div>
    <div class="choice choice_computer">
      <h2>The house picked</h2>
      <div :class="computerChose" class="outer-icon">
        <div class="icon-image"><span class="sr-only">{{ computerChose }}</span></div>
      </div>
    </div>
  </div>
  <div class="game-status">
    <h3>{{ didPlayerWin }}</h3>
    <button @click="startNewGame">Play again</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      computerChose: '',
      didPlayerWin: ''
    }
  },
  computed: {
    currentOptions() {
      return this.$store.getters.currentOptions;
    },
    ...mapGetters(['playerChose', 'chosenGame']),
  },
  methods: {
    ...mapMutations(['updateGameResultsVisible', 'updateGamesWon', 'updateGamesPlayed']),
    runComputerChoice() {
      const random = Math.floor(Math.random() * this.currentOptions.length)
      this.computerChose = this.currentOptions[random];
      this.checkIfWon();
    },
    startNewGame() {
      this.updateGameResultsVisible(false);
    },
    checkIfWon() {
      const player = this.$store.getters.playerChose;
      const comp = this.computerChose;
      const rules = {
        rock: ['lizard', 'scissors'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
      }
      if(player === comp) {
        this.didPlayerWin = 'You tied';
      } else {
        const results = rules[player].includes(comp);
        if(results == true) {
          this.didPlayerWin = 'You Won';
          this.updateGamesWon();
        } else {
          this.didPlayerWin = 'You Lose';
        }
      }
      this.updateGamesPlayed();
    }
  },
  mounted() {
    this.runComputerChoice();
  },
}
</script>

<style scoped>
.game-results {
  display: flex;
  justify-content: space-between;
}
h2 {
  text-transform: uppercase;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
}

h3 {
  text-transform: uppercase;
  color: #fff;
  font-size: 3.5rem;
}
.choice {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}

.choice_player:before {
  content: '';
  background: radial-gradient(
    hsla(237, 49%, 15%, 1) 0%,hsla(237, 49%, 15%,1) 39%,
    hsla(237, 49%, 15%, 0.75) 40%,hsla(237, 49%, 15%, 0.75) 50%, 
    hsla(237, 49%, 15%, 0.5) 51%, hsla(237, 49%, 15%, 0.5) 80%,
    hsla(237, 49%, 15%, 0.25) 80%, hsla(237, 49%, 15%, 0.25) 100%);
  border-radius: 50%;
  position: absolute;
  top: -80px;
  left: -85px;
  width: 300px;
  height: 300px;
  z-index: -1;
}

</style>