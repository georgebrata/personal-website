<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <picture v-for="index in 9" :key="index" v-show="clickIndex === index">
        <source
          type="image/avif"
          :srcset="`/author/${index}-240.avif 240w, /author/${index}-480.avif 480w`"
          sizes="(max-width: 768px) 160px, 240px"
        />
        <source
          type="image/webp"
          :srcset="`/author/${index}-240.webp 240w, /author/${index}-480.webp 480w`"
          sizes="(max-width: 768px) 160px, 240px"
        />
        <img
          :src="`/author/${index}-240.png`"
          :srcset="`/author/${index}-240.png 240w, /author/${index}-480.png 480w`"
          sizes="(max-width: 768px) 160px, 240px"
          :loading="index === 1 ? 'eager' : 'lazy'"
          :fetchpriority="index === 1 ? 'high' : 'auto'"
          alt="me"
          class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
          @click="incrementIndex"
        />
      </picture>
      <div class="sm:mx-7 ml-2 justify-center items-center">
        <h1
          class="md:text-2xl text-xl text-gray-800 font-bold dark:text-blue-100"
        >
          {{ siteMetadata.author }}
        </h1>
        <div class="text-sm md:text-lg text-gray-600 dark:text-blue-100">
          {{ siteMetadata.position }}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
          class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
        >
          {{ siteMetadata.email }}
        </a>
      </div>
    </div>

    <div class="mx-7 hidden md:block">
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Glob />
        <p class="ml-2">{{ siteMetadata.location }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-100 mb-4">
        <Mail />
        <a class="ml-2" target="_blank" rel="noopener noreferrer" :href="`mailto:${siteMetadata.email}`"> {{ siteMetadata.email }}</a>
      </div>
      <HireMeBtn :fullwidth="true">Contact me</HireMeBtn>
    </div>
  </div>
</template>

<script>
import Mail from "../assets/icon/mail.svg?inline";
import Glob from "../assets/icon/glob.svg?inline";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  name: "AuthorCard",
  components: { Mail, Glob },
  data: () => {
    return {
      clickIndex: 1,
      siteMetadata: siteMetaInfo,
    };
  },
  methods: {
    /**
     * Increments the clickIndex up to a maximum of 9, used for cycling through author images.
     */
    incrementIndex() {
      const maxIndex = 9;
      if (this.clickIndex < maxIndex) {
        this.clickIndex = this.clickIndex + 1;
      } else {
        this.clickIndex = maxIndex;
      }
    }
  }
};
</script>
