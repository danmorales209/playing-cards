<template>
  <div id='player-summary'></div>
</template>

<script>
export default {
    name: "PlayerSummary",
}
</script>

<style>
    #player-summary {
        background-color: blue;
        border: 5px solid black;
        border-radius: 15px;
        grid-column-start: col-players-start;
        grid-column-end: col-players-end;
        grid-row-start: row-nav-end;
        grid-row-end: row-player-start;
    }
</style>