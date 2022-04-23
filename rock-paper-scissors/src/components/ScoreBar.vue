<template>
  <section>
    <div class="main-container">
      <h2 v-if="chosenGame === 'basic'"><span class="sr-only">Rock Paper Scissors</span><img src="../assets/logo.svg" alt="Rock Paper Scissors"></h2>
      <h2 v-else><span class="sr-only">Rock Paper Scissors Lizard Spock</span><img src="../assets/logo-bonus.svg" alt="Rock Paper Scissors Lizard Spock"></h2>
      <div><p><span>Score </span><span class="score">{{ currentScore }}</span></p></div>
    </div>
    <dl>
      <div>
        <dt>Games Played: </dt>
        <dd v-if="gamesPlayed >= 0">{{ gamesPlayed }}</dd>
        <dd v-else>0</dd>
      </div>
      <div>
        <dt>Win rate: </dt>
        <dd v-if="winRate >= 0">{{ winRate }}%</dd>
        <dd v-else>0<span>%</span></dd>
      </div>
    </dl>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    chosenGame() {
      return this.$store.getters.chosenGame;
    },
    currentScore() {
      return this.$store.getters.gamesWon[this.chosenGame];
    },
    gamesPlayed() {
      return this.$store.getters.gamesPlayed[this.chosenGame];
    },
    winRate() {
      const gamesPlayed = this.gamesPlayed;
      const score = this.currentScore;
      const rate = Math.round((score / gamesPlayed) * 100);
      console.log(score + ' ' + gamesPlayed);
      return rate;
    }
  }
}
</script>

<style scoped>
section {
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 5px; 
  padding: 0.8rem;
  margin-bottom: 6rem;
}
img {
  max-height: 60px;
}
.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.main-container div {
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}
h2 {
  width: 35%;
}
p {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  line-height: 1
}
p span {
  width: 100%;
}
p span:first-child {
  text-transform: uppercase;
  color: hsl(229, 64%, 46%);
  font-size: 0.7rem;
  letter-spacing: 0.5px;
}
p .score {
  font-size: 2.5rem;
  color: hsl(229, 25%, 31%);
  font-weight: 700;
}
dl {
  display: flex;
  border-top: 1px solid hsl(217, 16%, 45%);
  padding-top: 0.7rem;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
}
dt {
  padding-right: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
dl div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5rem;
}
dl div:not(:last-child) {
  padding-right: 0.57rem;
}
dl span {
  font-size: 0.7rem;
}
</style>