<template>
  <div id="app">
    <game-menu/>
    <summary-view/>
    <playfield></playfield>
    <player-view />
  </div>
</template>

<script>
import Playfield from "./components/Playfield.vue";
import GameMenu from "./components/Menu.vue";
import SummaryView from "./components/SummaryView.vue";
import PlayerView from "./components/PlayerView.vue";

export default {
  name: "App",
  components: {
    Playfield,
    GameMenu,
    SummaryView,
    PlayerView
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: [row-nav-start] 5% [row-nav-end row-main-start] auto [row-main-end row-player-start] 30% [row-player-end];
  grid-template-columns: [col-players-start] 20% [col-players-end col-main-start] auto [col-main-end];
  align-items: stretch;
}
</style>
