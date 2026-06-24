<template>
  <footer>
    <div class="flex flex-col items-center mt-8">
      <div class="flex flex-wrap justify-between mb-4 gap-4 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="sanitizeHref(`mailto:${siteMetadata.email}`)"
          ><span class="sr-only">email</span>
          <img class="w-8 h-8" src="~assets/icon/mail.svg" /></a
        >
        <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" :href="sanitizeHref(item.href)" v-for="item in items" :key="item.title">
            <span class="sr-only">{{item.title}}</span>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'cursor'" src="~assets/icon/cursor.svg"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'facebook'" src="~assets/icon/facebook.svg"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'instagram'" src="~assets/icon/instagram.png"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'linkedin'" src="~assets/icon/linkeding.svg"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'twitter'" src="~assets/icon/twitter.png"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'youtube'" src="~assets/icon/youtube.svg"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'github'" src="~assets/icon/github_new.svg"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'codepen'" src="~assets/icon/codepen.png"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'bitbucket'" src="~assets/icon/bitbucket.png"/>
            <img class="w-8 h-8" v-if="item.title && item.title.toLowerCase() === 'leetcode'" src="~assets/icon/leetcode.png"/>
        </a>
      </div>
      <div class="flex mb-2 mt-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }} • <a :href="sanitizeHref(siteMetadata.siteUrl)">{{ siteMetadata.author }}</a
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
    },
    methods: {
      /**
       * Sanitizes a given URL string to ensure it uses safe protocols or is a local path.
       * @param {string} href - The URL string to sanitize.
       * @returns {string} The sanitized URL or '#' if unsafe.
       */
      sanitizeHref(href) {
        if (!href) return "#";
        const allowedProtocols = ["http:", "https:", "mailto:"];
        try {
          const url = new URL(href, "http://local-base");
          if (allowedProtocols.includes(url.protocol)) {
            return href;
          }
          if (href.startsWith("/") || href.startsWith("#")) {
            return href;
          }
          return "#";
        } catch {
          if (href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:")) {
            return href;
          }
          return "#";
        }
      }
    },
    async fetch() {
      this.items = await fetch(this.API_URL).then(response => response.json());
      let visibleItems = [];
      this.items.forEach(item => {
        if(item.visible) {
          visibleItems.push(item);
        }
      })
      this.items = visibleItems;
    },
  };
</script>
