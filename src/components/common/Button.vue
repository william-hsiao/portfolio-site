<template>
  <button type="button" :class="[variant]">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'base' | 'primary' | 'white' | 'black';
  }>(),
  {
    variant: 'base',
  },
);
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: $font-size-s;
  font-family: $font-family-headers;
  user-select: none;

  background-color: $color-transparent;

  &:hover {
    background-color: $color-transparent-semi;
  }

  &.base {
    border: 1px solid $color-background-base-contrast;
    color: $color-background-base-contrast;
  }

  &.primary {
    border: 1px solid $color-background-primary-contrast;
    color: $color-background-primary-contrast;
  }

  &.white {
    border: 1px solid $color-white;
    color: $color-white;
  }

  &.black {
    border: 1px solid $color-grey-90;
    color: $color-grey-90;
  }
}
</style>
