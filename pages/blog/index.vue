<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center mb-20">
      <h1
        class="mb-24 mt-24 text-4xl sm:text-2xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"
      >
        George's Blog
      </h1>
      <p class="text-lg px-2 text-slate-700 dark:text-slate-400 mb-24">
        coming soon ...
      </p>
    </header>
    <!-- <div class="space-y-16 mx-auto max-w-7xl">
      <blog-item
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :description="article.description"
        :date="article.date"
        :slug="article.slug"
      ></blog-item>
    </div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tag",
        "author",
        "date",
        "draft",
      ])
      .sortBy("date", "asc")
      .fetch();

    return {
      articles,
    };
  },
  head: {
    title: "George Brata | Blogs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Its Solaiman's Pen and Paper to write ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style></style>
