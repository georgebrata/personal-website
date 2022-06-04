<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Portfolio
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build as a freelancer
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container py-12">
          <div class="flex flex-wrap -m-4">
            <project-card v-for="item in items" :key="item.title" :item="item"></project-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  // import projectsData from "../data/projects";
  export default {
    data() {
      return {
        items: []
      };
    },
    head: {
      title: "George Brata | Projects",
      meta: [{
          charset: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          hid: "description",
          name: "description",
          content: "Some of Projects developed by George Brata",
        },
      ],
      link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }],
    },
    async fetch() {
      this.items = await fetch(
        'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/georgebrataRo/projects'
      ).then(res => res.json());
      this.items = this.items.projects;
    },
  };
</script>
