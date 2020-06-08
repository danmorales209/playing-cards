<template>
  <nav id="app-menu"></nav>
</template>

<script>
export default {
    name: "GameMenu",

}
</script>

<style scoped>
    nav {
        background-color: green;
        border: 3px solid black;
        border-radius: 5px;
        grid-column-start: col-players-start;
        grid-column-end: col-main-end;
        grid-row-start: row-nav-start;
        grid-row-end: row-nav-end
    }
</style>