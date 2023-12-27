<template>
  <Teleport to="body">
    <div class="photo-viewer" @click="() => emit('close')">
      <div class="photo-container" @click.stop>
        <img :src="PHOTOGRAPHY_IMAGE_URL(photo.filename)" />
      </div>

      <div class="description" @click.stop>
        {{ description }}
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { PHOTOGRAPHY_IMAGE_URL } from '@/constants';
import { Photo } from '@/types';

const props = defineProps<{
  photo: Photo;
}>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const description = computed(
  () => `${props.photo.location} - ${props.photo.year}/${props.photo.month}`,
);
</script>

<style lang="scss" scoped>
.photo-viewer {
  position: fixed;
  inset: 0;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  box-sizing: border-box;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.8);
}

.photo-container {
  flex-shrink: 1;
  overflow: hidden;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}

.description {
  color: $color-white;
}
</style>
