<template>
  <article class="small-article">
    <img :src="postImage" class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" />
    <p class="bg-indigo-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
    rounded-full uppercase inline-block">{{ postCategories }}</p>
    <NuxtLink class="text-lg font-bold sm:text-xl md:text-2xl" :to="{ name: 'blog-slug', params: { slug: postSlug } }">
      {{ postTitle }}</NuxtLink>
    <p class="text-sm text-black">{{ postDescription }}</p>
    <div class="pt-2 pr-0 pb-0 pl-0">
      <!-- <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{{ postAuthor }}</a>
      <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1"> · </p> -->
      <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">{{ postDate }}</p>
      <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1" v-if="postReadingTime"> · </p>
      <p class="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">{{ postReadingTime }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      postTitle: this.item?.title,
      postDescription: this.item?.description,
      postSlug: this.item?.slug,
      postDate: this.formatDate(this.item?.date),
      postCategories: this.item?.categories,
      postAuthor: this.item?.author,
      postImage: this.item?.image,
      postReadingTime: this.item?.readingTime,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped>
article {
  max-width: 40%;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
