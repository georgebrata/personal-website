<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex flex-wrap justify-between mb-3 gap-4 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
          ><span class="sr-only">email</span>
          <img class="w-8 h-8" src="~assets/icon/mail.svg" /></a
        >
        <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" :href="i.href" v-for="i in items" :key="i.title">
            <span class="sr-only">{{i.title}}</span>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'facebook'" src="~assets/icon/facebook.svg"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'instagram'" src="~assets/icon/instagram.png"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'linkedin'" src="~assets/icon/linkeding.svg"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'twitter'" src="~assets/icon/twitter.png"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'youtube'" src="~assets/icon/youtube.svg"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'github'" src="~assets/icon/github_new.svg"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'codepen'" src="~assets/icon/codepen.png"/>
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'bitbucket'" src="~assets/icon/bitbucket.png"/>
        </a>
      </div>
      <div class="flex mb-2 mt-20 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }} • <a :href="siteMetadata.siteUrl">{{ siteMetadata.author }}</a
          ></div>       
        </div>
        <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"
          ></a>
        </div>
        <!-- <BuyMeACoffee></BuyMeACoffee> -->
      </div>
  </footer>
</template>

<script>
  import siteMetaInfo from "@/data/sitemetainfo";
  import BuyMeACoffee from "./BuyMeACoffee.vue";
  export default {
    data() {
      return {
        siteMetadata: siteMetaInfo,
        items: []
      };
    },
    components: {
      BuyMeACoffee
    },
    async fetch() {
      this.items = await fetch(
        'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/georgebrataRo/socials'
      ).then(res => res.json());
      let visibleItems = [];
      this.items.socials.forEach(i => {
        if(i.show === true) {
          visibleItems.push(i);
        }
      })
      this.items = visibleItems;
    },
  };
</script>
