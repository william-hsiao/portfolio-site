<template lang="pug">
.nav
  nav-item(v-for='panel in panels', :panel='panel', :currentPanel='currentPanel' :key='panel.id')
</template>

<script>
import NavItem from '@/components/NavItem.vue'

export default {
  name: 'navMenu',

  components: {
    NavItem,
  },

  data() {
    return {
      panels: [],
      currentPanel: undefined,
    }
  },

  methods: {
    scrollHander() {
      const currentPanel = this.panels.find((panel, idx) => {
        if (window.scrollY < panel.offsetTop) return false;
        if (idx === this.panels.length - 1) return true;
        return window.scrollY < this.panels[idx+1].offsetTop;
      })

      if (currentPanel && currentPanel !== this.currentPanel) {
        history.replaceState(null, null, `#${currentPanel.id}`);
        this.currentPanel = currentPanel;
      }
    }
  },

  mounted() {
    setTimeout(() => {
      const panels = document.querySelectorAll('section.panel');
      this.panels = [...panels];
    }, 1000);

    window.addEventListener('scroll', this.scrollHander);
  }
}
</script>

<style lang='scss'>
.nav {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  margin-left: 25px;
  width: 25px;
  overflow: hidden;
  &:hover {
    width: auto;
  }

  @media only screen and (max-width: 1080px) {
    display: none;
  }
}
</style>
