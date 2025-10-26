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
      {{ i.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "AuthorIntro",
  data: () => {
    return {
      items: [],
      API_URL: process.env.apiUrl.concat('?path=intro')
    };
  },
  async fetch() {
    this.items = await fetch(this.API_URL).then(res => res.json());
  },
};
</script>