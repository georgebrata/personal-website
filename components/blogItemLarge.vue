<template>
      <article class="flex flex-col items-center sm:px-5 md:flex-row">
        <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: postSlug } }" class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
              md:space-y-5">
            <div class="bg-indigo-600 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                uppercase inline-block">
              <p class="inline">
                <svg class="w-6 h-6 mr-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                    00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                    1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                    0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </p>
              <p class="inline text-xl font-medium mt-1">New</p>
            </div>
            <h2 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              {{ postTitle }}
            </h2>
            <div class="pt-2 pr-0 pb-0 pl-0">
              <!-- <p class="text-sm font-medium inline">author:</p>
              <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">{{ postAuthor }}</a> -->
              <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1" v-if="postDate || postReadingTime"> · </p>
              <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">{{ postDate }}</p>
              <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1" v-if="postReadingTime"> · </p>
              <p class="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">{{ postReadingTime }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-full md:w-1/2">
          <div class="block">
            <img
              :src="postImage"
              class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full" />
          </div>
        </div>
      </article>
  </template>
  
  <script>
  export default {
    // props: ["title", "description", "date", "slug", "categories", "author", "image", "readingTime"],
    props: ["item"],
    data() {
      return {
        postTitle: this.item.title,
        postDescription: this.item.description,
        postSlug: this.item.slug,
        postDate: this.formatDate(this.item.date),
        postCategories: this.item.categories,
        postAuthor: this.item.author,
        postImage: this.item.image,
        postReadingTime: this.readingTime,
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
    