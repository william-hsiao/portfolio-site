<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
html {
  background-color: black;
  height: 100%;
  min-width: 350px;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Play', sans-serif;
  letter-spacing: 3px;
}
a:link, a:visited, a:hover, a:active {
  color: #ffffff;
  text-decoration: none;
}

/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltipContent {
    visibility: hidden;
    background-color: #555;
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 5px 0;
    width: 200px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 100;
    top: calc(100% + 8px);
    right: -25px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltipContent::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 32px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltipContent {
    visibility: visible;
    opacity: 1;
}

// Form
input, select, textarea {
  border: 1px solid #808080;
  box-sizing: border-box;
  padding: 0 3px;
  outline: none;
  vertical-align: center;
  &:focus {
    border-color: #000;
  }
  &::placeholder {
    color: #808080;
  }
  &[readonly] {
    background-color: #1b1b1b;
  }
  &[disabled] {
    background-color: #1b1b1b;
    border-color: #808080;
    color: #000;
  }
}
input, select {
  // height: $component-height-m;
}
textarea {
  resize: vertical;
  // min-height: $component-height-m;
  padding: 3px;
  font-family: inherit;
}

label {
  font-weight: 500;
  margin-right: 5px;
}

// Lists
ul {
  list-style-type: square;
  text-align: left;
  padding-left: 20px;
  width: max-content;
  margin: auto;
}
li {
  margin: 8px 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
