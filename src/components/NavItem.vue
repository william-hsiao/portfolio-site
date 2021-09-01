<template lang="pug">
.nav-item(:class='{ current: isCurrentPanel}', @click='scrollToPanel()')
  .dot
  .label {{ panel.id }}
</template>

<script>
export default {
  name: 'navItem',

  props: {
    panel: {
      type: HTMLElement,
    },
    currentPanel: {
      type: HTMLElement,
    }
  },

  computed: {
    isCurrentPanel() {
      return this.panel === this.currentPanel;
    }
  },

  methods: {
    scrollToPanel() {
      window.scrollTo(0, this.panel.offsetTop);
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-item {
  display: flex;
  align-content: center;
  &:hover {
    cursor: pointer;
  }
  
  &:not(:last-child) {
    margin-bottom: 25px;
  }

  &.current .dot {
    background-color: #888888;
  }

  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    text-transform: capitalize;
    color: #888888;
  }
  .dot {
    height: 25px;
    width: 25px;
    border: 1px solid #888888;
    box-sizing: border-box;
    flex-shrink: 0;
  }
}
</style>
