import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (!config.public.gtag) {
    console.info('GTAG ID not found');
    return;
  }

  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: config.public.gtag,
      },
    },
    useRouter(),
  );
});
