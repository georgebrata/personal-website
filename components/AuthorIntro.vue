<template>
  <div class="mb-6">
    <div class="mt-4 flex justify-between content-center	">
      <h2 class="mt-2 text-4xl text-gray-700 font-bold dark:text-blue-200">
        {{items[0] && items[0].title}}
      </h2>
      <div>
        <DownloadCvBtn file="/BrataGeorgeCV.pdf" name="BrataGeorgeCV.pdf" class="hidden md:block">Download CV</DownloadCvBtn>
        <HireMeBtn class="block md:hidden">Contact me</HireMeBtn>
      </div>
    </div>
    <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify" v-for="i in items" :key="i.id">
      <span v-html="i.description"></span>
    </p>
  </div>
</template>
<script>
const fetchIntroItems = () => fetch(process.env.apiUrl.concat('?path=intro')).then(res => res.json());

export default {
  name: "AuthorIntro",
  data: () => {
    return {
      items: [],
    };
  },
  serverPrefetch() {
    return this.loadItems();
  },
  mounted() {
    if (!this.items.length) {
      this.loadItems();
    }
  },
  methods: {
    async loadItems() {
      this.items = await fetchIntroItems();
    },
  },
};
</script>
