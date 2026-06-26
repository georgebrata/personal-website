<template>
  <div class="max-w-3xl px-5 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Strava
      </h1>
      <p
        class="text-lg leading-7 text-gray-500 dark:text-gray-400 block md:hidden"
      >
        My latest activities on Strava
      </p>
      <p
        class="text-lg leading-7 text-gray-500 dark:text-gray-400 typing hidden md:block"
      >
        My latest activities on Strava
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="container pt-4 pb-12">
        <div class="flex flex-col items-center space-y-8">
          <iframe
            height="454"
            width="300"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/20945324/latest-rides/987494c9888a120ae1064dd316ef2ad31e304f34"
          ></iframe>
          <iframe
            height="160"
            width="300"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/athletes/20945324/activity-summary/987494c9888a120ae1064dd316ef2ad31e304f34"
          ></iframe>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Strava",
  head() {
    return {
      title: "Strava | George Brata",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "George Brata's latest activities on Strava",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    };
  },
};
</script>

<style scoped>
.typing {
  width: 30ch;
  animation: typing 2s steps(48), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
