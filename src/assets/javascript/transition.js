export const transitions = {
  methods: {
    viewTemplate(from, to, transition = 'random') {
      if (to === 'repro-web-sdk') window.reproio.track('view-web-sdk');
      return new Promise((resolve) => {
        const frame = this.$el.getElementsByClassName('frame')[0];
        const fromTemplate = this.$el.getElementsByClassName(from)[0];
        const toTemplate = this.$el.getElementsByClassName(to)[0];
        const windowViewportHeight = window.innerHeight - 200;
        let effect, paddingHeight;

        const transitionEffects = ['fade-up', 'fade-down', 'fade-left', 'fade-right'];
        if (transition === 'random') {
          effect = transitionEffects[Math.floor(Math.random() * Math.floor(transitionEffects.length))];
        } else {
          effect = transition;
        }

        fromTemplate.style.width = `${fromTemplate.offsetWidth}px`;
        if (window.innerWidth < 1000) {
          fromTemplate.style.marginLeft = `${(window.innerWidth - fromTemplate.offsetWidth) / 2}px`;
        } else {
          fromTemplate.style.marginLeft = `${(1000 - fromTemplate.offsetWidth) / 2}px`;
        }

        fromTemplate.classList.add('standby', `${effect}-out`);
        fromTemplate.classList.remove('active');
        toTemplate.classList.add('active', `${effect}-in`);

        if (fromTemplate.offsetHeight > toTemplate.offsetHeight) {
          frame.style.height = `${fromTemplate.offsetHeight}px`;
        }

        // If FROM is greater than window, TO is smaller than window
        if (fromTemplate.offsetHeight > windowViewportHeight && toTemplate.offsetHeight < windowViewportHeight) {
          paddingHeight = (windowViewportHeight - toTemplate.offsetHeight) / 2;
          toTemplate.style.paddingTop = `${paddingHeight}px`;
          toTemplate.style.paddingBottom = `${paddingHeight}px`;
        }
        // If TO is greater than window, FROM is smaller than window
        else if (toTemplate.offsetHeight > windowViewportHeight && fromTemplate.offsetHeight < windowViewportHeight) {
          paddingHeight = (windowViewportHeight - fromTemplate.offsetHeight) / 2;
          fromTemplate.style.paddingTop = `${paddingHeight}px`;
          fromTemplate.style.paddingBottom = `${paddingHeight}px`;
        }
        // If FROM and TO are smaller than window
        else if (fromTemplate.offsetHeight <= windowViewportHeight && toTemplate.offsetHeight <= windowViewportHeight) {
          if (fromTemplate.offsetHeight > toTemplate.offsetHeight) {
            paddingHeight = (fromTemplate.offsetHeight - toTemplate.offsetHeight) / 2;
            toTemplate.style.paddingTop = `${paddingHeight}px`;
            toTemplate.style.paddingBottom = `${paddingHeight}px`;
          } else {
            paddingHeight = (toTemplate.offsetHeight - fromTemplate.offsetHeight) / 2
            fromTemplate.style.paddingTop = `${paddingHeight}px`;
            fromTemplate.style.paddingBottom = `${paddingHeight}px`;
          }
        }

        setTimeout(() => {
          frame.style.height = '';
          toTemplate.style.paddingBottom = '';
          toTemplate.style.paddingTop = '';
          fromTemplate.style.paddingBottom = '';
          fromTemplate.style.paddingTop = '';
          fromTemplate.style.width = '';
          fromTemplate.style.marginLeft = '';
          fromTemplate.classList.remove('standby', `${effect}-out`);
          toTemplate.classList.remove(`${effect}-in`);
        }, 2000);

        this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        resolve();
      });
    },
  }
}
