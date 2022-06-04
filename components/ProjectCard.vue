<template>
  <div class="p-4 w-full">
    <div
      class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between">
          <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
            {{ item.title }}
          </h2>
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
          </div>
        </div>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ item.description }}
        </p>
        <div class="flex flex-row justify-between">
          <div class="text-gray-400 text-sm font-extralight">
            {{ item.stack && item.stack.split(',')[0] }} {{ item.stack && item.stack.split(',')[1] ? " • " + item.stack.split(',')[1] : '' }} {{ item.stack && item.stack.split(',')[2] ? " • " + item.stack.split(',')[2] : '' }}
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
};
</script>

<style></style>
