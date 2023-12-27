<template>
  <div>
    <h1>Photography</h1>

    <div class="photo-grid">
      <div
        v-for="photo in photos"
        :key="photo.filename"
        class="photo"
        :class="[photo.orientation]"
        @click="() => setViewPhoto(photo)"
      >
        <img :src="PHOTOGRAPHY_THUMBNAIL_URL(photo.filename)" />
      </div>
    </div>

    <PhotoViewer
      v-if="viewPhoto"
      :photo="viewPhoto"
      @close="() => setViewPhoto()"
    />
  </div>
</template>

<script setup lang="ts">
import PhotoViewer from '@/components/pages/photography/PhotoViewer.vue';
import { PHOTOGRAPHY_THUMBNAIL_URL } from '@/constants';
import { Photo } from '@/types';

definePageMeta({
  title: 'Photography',
});

const photos = ref<Photo[]>([]);
const viewPhoto = ref<Photo | null>(null);

const setViewPhoto = (photo?: Photo) => {
  viewPhoto.value = photo || null;
};

onMounted(async () => {
  await nextTick();
  const { data } = await useFetch<Photo[]>('/images/photography/list.json');

  if (data.value) {
    photos.value = data.value;
  }
});
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(100px, 200px);
  grid-gap: 0.25rem;

  .photo {
    cursor: pointer;

    &.landscape {
      grid-column: span 2;
    }
    &.portrait {
      grid-column: span 2;
      grid-row: span 2;
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
