<template>
  <div class="max-w-3xl px-5 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Portfolio
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400 block md:hidden">
        Some of the projects I've built 
      </p>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400 typing hidden md:block">
        Some of the projects I've built 
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container pt-4 pb-12">
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
    name: "Portfolio",
    data() {
      return {
        items: []
      };
    },
    head: {
      title: "George Brata | Portfolio",
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
          content: "George Brata's Portfolio as a Web Developer",
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
<style>
.typing {
  width: 48ch;
  animation: typing 2s steps(48), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
