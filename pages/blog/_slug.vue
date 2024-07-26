<template>
  
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <nav aria-label="breadcrumb">
      <section class="flex w-full flex-wrap items-center justify-between ">
    <ol class="flex items-center rounded-md bg-blue-gray-50 bg-opacity-60">
      <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300">
        <a class="opacity-60" href="#">
          <NuxtLink to="." class="text-dark-200">
            Blog
            </NuxtLink> 
        </a>
        <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
          /
        </span>
      </li>
      <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300">
        <a href="" class="text-dark-500">
          {{ shorten(article.title) }}
        </a>
      </li>
    </ol>
    <p class="w-sm-full text-center font-bold my-5 text-indigo-500">
      {{ formatDate(article.date) }}
    </p>
    </section>

  </nav>
    <h1 class="text-4xl mt-10 text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>
    <div v-if="article.readingTime" class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      Reading time: {{ article.readingTime }}
    </div>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="siteMetadata.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-11 h-11 rounded-full bg-indigo-600 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ siteMetadata.author }}
        </div>
        <a
          target="_blank"
          :href="siteMetadata.siteUrl"
          class="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
        >
          @{{ siteMetadata.username }}
        </a>
      </div>
    </div>
    <img
      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
      :src="article.image"
    />

    <nuxt-content class="prose min-w-full mx-auto" :document="article" />
  </div>
</template>
<script>
import Prism from "~/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return {
      article: article,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    shorten(text, maxLen = 25) {
      return text.length > maxLen ? text.slice(0, maxLen) + "..." : text;
    },
  },
  mounted() {
    Prism.highlightAll();
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
<style scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
