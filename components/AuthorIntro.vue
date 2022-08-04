<template>
  <div class="mb-6">
    <div class="mt-4 flex justify-between content-center	">
      <h2 class="mt-2 text-4xl text-gray-700 font-bold dark:text-blue-200">
        {{items[0] && items[0].title}}
      </h2>
      <div>
        <DownloadCvBtn file="/BrataGeorgeCV.pdf" name="BrataGeorgeCV.pdf" class="hidden md:block">Download CV</DownloadCvBtn>
        <HireMeBtn class="block md:hidden">Hire me</HireMeBtn>

      </div>
    </div>
    <p class="mt-8 mb-4 px-2 dark:bg-gray-800 dark:text-blue-200 text-justify" v-for="i in items" :key="i.id">
      <span v-html="i.description"></span>
    </p>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: [],
    };
  },
  async fetch() {
    this.items = await fetch(
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/georgebrataRo/intro'
    ).then(res => res.json());
    this.items = this.items.intro;
  },
};
</script>
<style scoped>
a:hover {
  font-weight: bold;
}
</style>