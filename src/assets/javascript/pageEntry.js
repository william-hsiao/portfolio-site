export const pageEntry = {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    setVisibility(status) {
      this.visible = status;
    },
    transition(element, transition) {
      return new Promise((resolve) => {
        element.classList.add(transition);
        setTimeout(() => {
          element.classList.remove(transition);
          resolve();
        }, 2000);
      });
    },
  },
  mounted() {
    const page = document.getElementById('home');
    const component = this;
    const frame = this.$el.getElementsByClassName('frame')[0];
    let effect = 'fade';
    frame.style.opacity = 0;
    
    if (component.containerTransition) effect = component.containerTransition;
    
    function animateOnView() {
      if (!component.visible && page.scrollTop >= component.$el.offsetTop - window.innerHeight / 2
        && page.scrollTop <= (component.$el.offsetTop + component.$el.offsetHeight) + window.innerHeight / 2) {
        // page.removeEventListener('scroll', animateOnView, { passive: true });
        component.setVisibility(true);
        component.transition(frame, `${effect}-in`).then(() => {
          frame.style.opacity = '';
        });
      } else if (component.visible) {
        if (page.scrollTop < component.$el.offsetTop - window.innerHeight / 2
          || page.scrollTop > (component.$el.offsetTop + component.$el.offsetHeight) + window.innerHeight / 2) {
          component.setVisibility(false);
          component.transition(frame, `${effect}-out`).then(() => {
            frame.style.opacity = 0;
          });
        }
      }
    };
    page.addEventListener('scroll', animateOnView, { passive: true });
  },
}
