<template>
  <div class="market" v-bind:class="rowClass"></div>
</template>

<script>
export default {
  name: "marketRow",
  props: {
    columns: {
      default: 5,
      computed: function() {
        return parseInt(this.number);
      }
    }
  },
  computed: {
    rowClass: function() {
      switch (true) {
        case this.columns == 5:
          return "establishments-market";
          break;
        case this.columns == 3:
          return "major-establishments-market";
          break;
        default:
          return "unknown";
          break;
      }
    }
  }
};
</script>

<style scoped>
.market {
  display: grid;
  gap: 1%;
}
.establishments-market {
  background-color: white;
  border: 1px solid black;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "deck card1 card2 card3 card4 card5";
}
.major-establishments-market {
  background-color: purple;
  border: 1px solid black;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  grid-template-areas: ". deck card1 card2 .";
}
</style>