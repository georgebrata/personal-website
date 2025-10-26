<template>
    <a target="_blank" :href="`mailto:${siteMetadata.email}`"><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"  :class="{'w-full':fullwidth}">
        <slot></slot>
      </button>
    </a>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";

export default {
  name: "HireMeBtn",
  props: {
    fullwidth: {
      type: Boolean,
      default: false,
    },
  },
    data: () => {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
  methods: {
    downloadFile() {},
  },
};
</script>
