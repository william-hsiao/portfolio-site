<template>
  <div class="socials">
    <NuxtLink to="https://github.com/william-hsiao" target="_blank">
      <img src="@/assets/images/github.svg" class="icon" />
    </NuxtLink>

    <NuxtLink to="https://twitter.com/william_hsiao_" target="_blank">
      <img src="@/assets/images/twitter.svg" class="icon" />
    </NuxtLink>

    <NuxtLink to="https://www.linkedin.com/in/william-hsiao/" target="_blank">
      <img src="@/assets/images/linkedin.svg" class="icon" />
    </NuxtLink>


    <NuxtLink to="mailto:contact@william-hsiao.com">
      <img src="@/assets/images/email.svg" class="icon" />
    </NuxtLink>
  </div>
</template>
  
<style lang="scss" scoped>
.socials {
  display: flex;
  justify-content: space-evenly;

  .icon {
    &:hover {
      filter: invert(1);
    }
  }
}
</style>