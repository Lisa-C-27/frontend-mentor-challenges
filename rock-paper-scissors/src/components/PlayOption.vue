<template>
<div :class="chosenGame">
  <ul>
    <li v-for="option in currentOptions" :key="option" :class="option" class="outer-icon"><button @click="chosenOption(option)" class="icon-image"><span class="sr-only">{{ option }}</span></button></li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      options: {
        basic: ['paper', 'scissors', 'rock'],
        extra: ['scissors', 'spock', 'paper', 'lizard', 'rock']
      }
    }
  },
  computed: {
    ...mapGetters(['chosenGame']),
    currentOptions() {
      const current = this.chosenGame;
      return this.options[current];
    }
  },
  methods: {
    ...mapMutations(['updatePlayerChose', 'updateGameResultsVisible', 'updateCurrentOptions']),
    chosenOption(option) {
      this.updatePlayerChose(option);
      this.updateGameResultsVisible(true);
    }
  },
  mounted() {
    this.updateCurrentOptions(this.currentOptions);
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

.basic ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

div {
  position: relative;
}

div.basic::before {
  content: '';
  background-image: url(/img/bg-triangle.1fd44bdf.svg);
  background-position: center;
  position: absolute;
  top: 1em;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 80%;
  z-index: -1;
}

div.extra ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

/* li {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.basic li {
  width: 130px;
  height: 130px;
}

.extra li {
  width: 90px;
  height: 90px;
} */

</style>