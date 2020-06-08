<template>
  <div id="playfield">
    <market-row columns=5></market-row>
    <market-row columns=3></market-row>
    <market-row columns=5></market-row>
  </div>
</template>

<script>
import marketRow from "./marketRow";
export default {
  name: "Playfield",
  components: {
    marketRow,
  },
  data: function() {
    return {};
  },
};
</script>

<style scoped >
#playfield {
  background-color: #aaaaaa;
  border: solid 5px black;
  grid-row-start: row-main-start;
  grid-row-end: row-main-end;
  grid-column-start: col-main-start;
  grid-column-end: col-main-end;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns:1fr;
  grid-template-areas: 
    "top"
    "middle"
    "bottom";
}
</style>