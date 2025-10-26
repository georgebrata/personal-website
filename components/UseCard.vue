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
            <span v-if="item.since" class="hidden xl:block pt-2 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300 ml-4">
              {{ item.since }}
            </span>
          </div>
        </div>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ item.description }}
        </p>
        <div class="flex flex-row justify-between">
          <div class="text-gray-400 text-sm font-extralight">
            <span v-for="(tag, index) in item.tags" :key="tag">
              {{ tag }}{{ index < item.tags.length - 1 ? ' • ' : '' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UseCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
