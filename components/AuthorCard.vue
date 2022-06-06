<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <nuxt-img
        :src="siteMetadata.author_image+'1.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 1"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'2.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 2"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'3.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 3"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'4.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 4"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'5.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 5"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'6.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 6"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'7.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 7"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'8.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full cursor-pointer"
        @click="incrementIndex"
        v-show="clickIndex === 8"
      />
      <nuxt-img
        :src="siteMetadata.author_image+'9.png'"
        loading="lazy"
        alt="me"
        class="md:h-60 md:w-60 h-40 w-40 rounded-full"
        @click="incrementIndex"
        v-show="clickIndex === 9"
      />
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
        <a class="ml-2" target="_blank" :href="`mailto:${siteMetadata.email}`"> {{ siteMetadata.email }}</a>
      </div>
      <HireMeBtn :fullwidth="true">Hire me</HireMeBtn>


      <!-- <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <Github />
        <a class="ml-2" :href="siteMetadata.github"> {{ siteMetadata.githubUser }}</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Mail from "../assets/icon/mail.svg?inline";
import Glob from "../assets/icon/glob.svg?inline";
import Github from "../assets/icon/github_new.svg?inline";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  components: { Mail, Glob, Github },
  data: () => {
    return {
      clickIndex: 1,
      siteMetadata: siteMetaInfo,
    };
  },
  methods: {
    incrementIndex() {
      const MAX = 9;
      if(this.clickIndex < MAX) {
        this.clickIndex = this.clickIndex + 1;
      } else {
        this.clickIndex = MAX;
      }
    }
  }
};
</script>