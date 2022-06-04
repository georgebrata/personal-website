
You need a component to download any file from any URL, so, for this case, we can create a component to accomplish this objective, we can use fetch API (https://developer.mozilla.org/es/docs/Web/API/Fetch_API):

<template>
      <button @mousedown="downloadFile" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-900 to-purple-900 group-hover:from-blue-900 group-hover:to-purple-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" :class="{'w-full':fullwidth}">
        <span class="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" :class="{'w-full':fullwidth}">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span><slot></slot></span>  </span>
      </button>
</template>

<script>
export default {
  props: ["file", "name", "fullwidth"],
  methods: {
    downloadFile() {
      const me = this;
      fetch(me.file)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename you want
          a.download = me.name || "BrataGeorgeCV.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(() => alert("oh no!"));
    },
  },
};
</script>