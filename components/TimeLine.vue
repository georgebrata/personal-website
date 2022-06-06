<template>
  <div class="opacity-100 mt-10">

    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6" v-for="i in items" :key="i.title">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/academy.svg"
            v-if="i.icon === 'academy'"
          />
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/code-1.png"
            v-if="i.icon === 'code1'"
          />
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/code-2.png"
            v-if="i.icon === 'code2'"
          />
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/teach.png"
            v-if="i.icon === 'teach'"
          />
        </span>
        <h3
          class="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white"
        >
          {{i.title}}
          <span v-if="i.period && i.period.indexOf('urrent') > -1"
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-900 ml-3"
            >Current</span
          >
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >{{i.period}}</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{i.description}}
        </p>
      </li>
    </ol>
    <DownloadCvBtn file="/BrataGeorgeCV.pdf" name="BrataGeorgeCV.pdf">Download complete CV as .pdf</DownloadCvBtn>
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
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/georgebrataRo/experience'
    ).then(res => res.json());
    this.items = this.items.experience;
  },
};
</script>