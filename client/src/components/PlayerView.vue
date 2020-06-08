<template>
  <div id='player-view'></div>
</template>

<script>
export default {
    name: 'PlayerView',
}
</script>

<style>
    #player-view {
        background-color: red;
        border: 5px solid black;
        border-radius: 15px;
        grid-column-start: col-players-start;
        grid-column-end: col-main-end;
        grid-row-start: row-player-start;
        grid-row-end: row-player-end;
    }
</style>