import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      gameSelectScreen: true,
      chosenGame: '',
      playerChose: '',
      gameResultsVisible: false,
      currentOptions: [],
      gamesWon: { 
          basic: 0,
          extra: 0
      },
      gamesPlayed: {
        basic: 0,
        extra: 0
      }
    }
  },
  getters: {
    isGameSelectVisible(state) {
      return state.gameSelectScreen;
    },
    chosenGame(state) {
      return state.chosenGame;
    },
    playerChose(state) {
      return state.playerChose;
    },
    isGameResultsVisible(state) {
      return state.gameResultsVisible;
    },
    currentOptions(state) {
      return state.currentOptions;
    },
    gamesWon(state) {
      return state.gamesWon;
    },
    gamesPlayed(state) {
      return state.gamesPlayed;
    }
  },
  actions: {

  },
  mutations: {
    updateGameSelectScreen(state, payload) {
      state.gameSelectScreen = payload;
    },
    updateChosenGame(state, payload) {
      state.chosenGame = payload;
    },
    updatePlayerChose(state, payload) {
      state.playerChose = payload;
    },
    updateGameResultsVisible(state, payload) {
      state.gameResultsVisible = payload;
    },
    updateCurrentOptions(state, payload) {
      state.currentOptions = payload;
    },
    updateGamesWon(state) {
      const game = state.chosenGame;
      state.gamesWon[game]++;
    },
    updateGamesPlayed(state) {
      const game = state.chosenGame;
      state.gamesPlayed[game]++;
    }
  }
});

export default store;