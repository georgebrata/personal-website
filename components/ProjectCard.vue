<template>
  <div class="p-4 w-full">
    <div
      class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row justify-between mb-3">
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              {{ item.title }}
            </h2>
            <!-- <span class="bg-blue-50 text-yellow-900 text-sm font-medium mr-2 px-2.5 pt-2 rounded ml-3" v-if="item.url">Personal</span>
            <span class="bg-blue-50 text-blue-900 text-sm font-medium mr-2 px-2.5 pt-2 rounded ml-3" v-else>Client Work</span> -->
            <span v-if="item.year" class="hidden xl:block pt-2 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300 ml-4">  
              {{ item.year }}
            </span>
          </div>
          <div class="flex flex-row justify-between min-w-fit">
            <div class="mx-1" v-if="item.url">
              <a
                class="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="item.url"
                ><span class="sr-only"></span
                ><img class="w-6 h-6" src="~assets/icon/external.svg"
              /></a>
            </div>
            <div class="mx-1" v-if="item.githubUrl">
              <a
                class="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="item.githubUrl"
                ><span class="sr-only">github</span
                ><img class="w-6 h-6" src="~assets/icon/github_new.svg"
              /></a>
            </div>
            <div class="mx-1" v-if="item.extraUrl">
              <a
                class="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="item.extraUrl"
                ><span class="sr-only">github</span
                ><img class="w-6 h-6" src="~assets/icon/github_new.svg"
              /></a>
            </div>
          </div>
        </div>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3" v-html="item.description">
          
        </p>
        <div class="flex flex-row justify-between">
          <div class="text-gray-400 text-sm font-extralight">
            {{ item.stack && item.stack.split(',')[0] }} 
            {{ getStackItemAtIndex(item, 1) }} 
            {{ getStackItemAtIndex(item, 2) }} 
            {{ getStackItemAtIndex(item, 3) }} 
            {{ getStackItemAtIndex(item, 4) }} 
            {{ getStackItemAtIndex(item, 5) }} 
            {{ getStackItemAtIndex(item, 6) }} 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Folder from "../assets/icon/folder.svg?inline";
import External from "../assets/icon/external.svg?inline";
import Github from "../assets/icon/github.svg?inline";
export default {
  props: ["item"],
  components: { Folder, External, Github },
  data() {
    return {

    };
  },
  methods: {
    getStackItemAtIndex(item, index) {
      return item.stack && item.stack.split(',')[index] ? " • " + item.stack.split(',')[index] : '';
    }
  }
};
</script>

<style></style>
