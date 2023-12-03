<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tag {
  font-size: $font-size-s;
  background-color: $color-background-secondary;
  color: $color-background-primary-contrast;
  padding: 0.1rem 0.5rem;
}
</style>
