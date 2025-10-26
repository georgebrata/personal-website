<template>
  <!-- Section 1 -->
  <section class="w-full px-6 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "DefaultLayout",
  component: {
    TheHeader,
    TheFooter,
  },
};
</script>
