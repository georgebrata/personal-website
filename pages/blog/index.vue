<template>
  <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
    <div class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
      <blog-item-large :item="latestArticle" />

      <section v-if="showArticlesCarousel" class="sm:px-5">
        <vue-horizontal class="horizontal-articles" :displacement="0.5" :button-between="false" ref="articles">
          <blog-item v-for="article in visibleArticles" :item="article" :key="article.title"/>
        </vue-horizontal>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "image",
        "slug",
        "tags",
        "author",
        "date",
        "draft",
        "readingTime"
      ])
      .sortBy("date", "asc")
      .fetch();
      
      const visibleArticles = articles.filter((article) => !article.draft);
      const latestArticle = visibleArticles.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    const categories = [
      { name: 'VueJS' }, { name: 'Nuxt' }, { name: 'Gridsome' }, { name: 'VuePress' },
    ]

    return {
      visibleArticles,
      latestArticle,
      categories
    };


  },
  computed: {
    showArticlesCarousel() {
      return this.visibleArticles && this.visibleArticles.length >= 1;
    },
  },
  methods: {
    scrollToCategory(i) {
      this.$refs.categories.scrollToIndex(i)
    },
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
