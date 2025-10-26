<template>
  <div class="max-w-3xl px-5 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Uses
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        A list of hardware and software I personally use.
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container pt-4 pb-12">
          <div class="flex flex-wrap -m-4">
            <use-card v-for="item in items" :key="item.title" :item="item"></use-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import usesData from "@/data/uses";
import UseCard from "@/components/UseCard.vue";

export default {
  name: "Uses",
  components: {
    UseCard,
  },
  data() {
    return {
      items: usesData,
    };
  },
  head() {
    return {
      title: "Uses | George Brata",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "A list of hardware and software I personally use.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    };
  },
};
</script>
