<template>
  <button type="button">
    <slot />
  </button>
</template>


<style lang="scss" scoped>
button {
  cursor: pointer;
  padding: .5rem 1rem;
  font-size: $font-size-s;
  font-family: $font-family-headers;

  background-color: $color-transparent;
  border: 1px solid $color-background-primary-contrast;
  color: $color-background-primary-contrast;

  &:hover {
    background-color: $color-transparent-semi;
  }
}
</style>


