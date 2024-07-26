<template>
  <article class="small-article">
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: postSlug } }">

      <img :src="postImage" class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" />


      <h3 class="text-lg font-bold sm:text-xl md:text-2xl" :to="{ name: 'blog-slug', params: { slug: postSlug } }">
        {{ postTitle }}</h3>

     
      <p class="text-sm text-black mb-2">{{ postDescription }}</p>

      <span v-for="category in postCategories.split(',')" :key="category"
        class="text-sm font-medium py-1 px-2 mr-2 rounded align-middle bg-red-100 text-red-500">
        {{ category }}
      </span>

      <div class="mt-2 pr-0 pb-0 pl-0">

        <!-- <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{{ postAuthor }}</a>
      <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1"> · </p> -->
        <p class="inline text-xs font-medium mt-0 mr-1 mb-0">{{ postDate }}</p>
        <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1" v-if="postReadingTime"> · </p>
        <p class="inline text-xs font-medium text-gray-600 mt-0 mr-1 mb-0 ml-1">{{ postReadingTime }}</p>
      </div>
    </NuxtLink>
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
      postCategories: this.item?.tags,
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
.small-article {
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
}

.small-article:hover a {
  text-decoration: none;
}
.big-article:hover a {
  text-decoration: none;
}
</style>
