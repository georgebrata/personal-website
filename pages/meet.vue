<template>
    <div class="max-w-3xl px-5 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Let's meet
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400 block md:hidden">
          Schedule a short meeting with me 
        </p>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400 typing hidden md:block">
            Schedule a short meeting with me 
        </p>
      </div>
      <main class="relative mb-auto">
        <div class="">
          <div class="container pt-4 pb-12">
            <!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/bratageorge/15min?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
    // import projectsData from "../data/projects";
    export default {
      name: "Meet",
      data() {
        return {
          items: [],
          API_URL: process.env.apiUrl.concat('?path=projects')
        };
      },
      head: {
        title: "Let's meet | George Brata",
        meta: [{
            charset: "utf-8"
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          {
            hid: "description",
            name: "description",
            content: "George Brata's Portfolio as a Web Developer",
          },
        ],
        link: [{
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }],
      },
      async fetch() {
        let items = await fetch(this.API_URL).then(res => res.json());
        this.items = items.filter(i => i.visible)
      },
    };
  </script>
  <style>
  .typing {
    width: 33ch;
    animation: typing 2s steps(48), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
  }
  
  @keyframes typing {
    from {
      width: 0
    }
  }
      
  @keyframes blink {
    50% {
      border-color: transparent
    }
  }
  </style>
  