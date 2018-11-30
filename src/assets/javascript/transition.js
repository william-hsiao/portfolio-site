export const transition = {
  methods: {
    viewTemplate(from, to, effect) {
      const frame = this.$el.getElementsByClassName('frame')[0];
      const fromTemplate = this.$el.getElementsByClassName(from)[0];
      const toTemplate = this.$el.getElementsByClassName(to)[0];
      
      if (fromTemplate.offsetHeight > toTemplate.offsetHeight) {
        frame.style.height = `${frame.offsetHeight}px`;
        toTemplate.style.marginTop = `${(window.innerHeight - toTemplate.offsetHeight) / 2 - 100}px`;
      } else {
        fromTemplate.style.marginTop = `${(window.innerHeight - fromTemplate.offsetHeight) / 2 - 100}px`;
      }
      
      fromTemplate.classList.add('standby', `${effect}-out`);
      fromTemplate.classList.remove('active');
      toTemplate.classList.add('active', `${effect}-in`);

      setTimeout(() => {
        frame.style.height = '';
        toTemplate.style.marginTop = '';
        fromTemplate.classList.remove('standby', `${effect}-out`);
        toTemplate.classList.remove(`${effect}-in`);
      }, 2000);
      this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  }
}
