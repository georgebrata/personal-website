<template>
  <footer>
    <div class="flex flex-col items-center mt-8">
      <div class="flex flex-wrap justify-between mb-4 gap-4 space-x-4">
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
            <img class="w-8 h-8" v-if="i.title && i.title.toLowerCase() === 'leetcode'" src="~assets/icon/leetcode.png"/>
        </a>
      </div>
      <div class="flex mb-2 mt-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
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
    name: "TheFooter",
    data() {
      return {
        siteMetadata: siteMetaInfo,
        items: [],
        API_URL: process.env.apiUrl.concat('?path=socials')
      };
    },
    components: {
      BuyMeACoffee
    },
    async fetch() {
      this.items = await fetch(this.API_URL).then(res => res.json());
      let visibleItems = [];
      this.items.forEach(i => {
        if(i.visible) {
          visibleItems.push(i);
        }
      })
      this.items = visibleItems;
    },
  };
</script>
