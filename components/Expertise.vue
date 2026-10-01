<template>
  <div class="mt-8">
    <div class="mt-4" v-if="get('javascript') || get('html') || get('css') || get('typescript') || get('vue.js') || get('react.js') || get('next.js') || get('redux') || get('tailwindcss') || get('bootstrap') || get('nuxt.js') || get('nx') || get('ionic') || get('socket.io') || get('storybook') || get('tanstack')">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Frontend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('javascript')">
          <Javascript class="h-9 w-11" alt="Javascript title" title="Javascript logo"></Javascript>
          <span>Javascript</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('typescript')">
          <Typescript class="h-9 w-11" alt="Typescript title" title="Typescript logo"></Typescript>
          <span>Typescript</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('html')">
          <HtmlIcon class="h-9 w-11" alt="HTML title" title="HTML logo"></HtmlIcon>
          <span>HTML5</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('css')">
          <Css class="h-9 w-11" alt="CSS title" title="CSS logo"></Css>
          <span>CSS3</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('vue.js')">
          <Vuejs class="h-9 w-11" alt="Vuejs title" title="Vuejs logo"></Vuejs>
          <span>Vue.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('react.js')">
          <React class="h-9 w-11" alt="React title" title="React logo"></React>
          <span>React.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('next.js')">
          <Nextjs class="h-9 w-11" alt="Nextjs title" title="Next.js logo"></Nextjs>
          <span>Next.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('redux')">
          <Redux class="h-9 w-11" alt="Redux title" title="Redux logo"></Redux>
          <span>Redux</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('ionic')">
          <Ionic class="h-9 w-11" alt="Ionic title" title="Ionic logo"></Ionic>
          <span>Ionic</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('tailwindcss')">
          <TailwindCss class="h-9 w-11" alt="TailwindCss title" title="TailwindCss logo"></TailwindCss>
          <span>Tailwind</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('bootstrap')">
          <Bootstrap class="h-9 w-11" alt="Bootstrap title" title="Bootstrap logo"></Bootstrap>
          <span>Bootstrap</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('nuxt.js')">
          <Nuxt class="h-9 w-11" alt="Nuxt title" title="Nuxt logo"></Nuxt>
          <span>Nuxt.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('nx')">
          <Nx class="h-9 w-11" alt="Nx title" title="Nx logo"></Nx>
          <span>Nx</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('socket.io')">
          <Socketio class="h-10 w-12" alt="Socket.io title" title="Socket.io logo"></Socketio>
          <span>Socket.io</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('storybook')">
          <Storybook class="h-10 w-12" alt="Storybook title" title="Storybook logo"></Storybook>
          <span>Storybook</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('tanstack')">
          <Tanstack class="h-10 w-12" alt="TanStack title" title="TanStack logo"></Tanstack>
          <span>TanStack</span>
        </li>
      </ul>
    </div>
    <div class="mt-4" v-if="get('node.js') || get('laravel') || get('docker') || get('php') || get('python') || get('flask') || get('express') || get('sequalize')">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Backend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('python')">
          <Python class="h-9 w-11" title="Python logo" alt="Python logo"></Python>
          <span>Python</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('flask')">
          <Flask class="h-9 w-11" title="Flask logo" alt="Flask logo"></Flask>
          <span>Flask</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('node.js')">
          <Node class="h-9 w-11" alt="Node title" title="Node logo"></Node>
          <span>Node.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('express')">
          <Express class="h-9 w-11" title="Express logo" alt="Express logo"></Express>
          <span>Express.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('sequalize')">
          <Sequalize class="h-9 w-11" title="Sequalize logo" alt="Sequalize logo"></Sequalize>
          <span>Sequalize</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('laravel')">
          <Laravel class="h-9 w-11" alt="Laravel title" title="Laravel logo"></Laravel>
          <span>Laravel</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('docker')">
          <Docker class="h-9 w-11" title="Docker logo" alt="Docker logo"></Docker>
          <span>Docker</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('php')">
          <Php class="h-9 w-11" alt="PHP title" title="PHP logo"></Php>
          <span>PHP</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Design
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('figma')">
          <Figma class="h-9 w-11" title="Figma logo" alt="Figma logo"></Figma>
          <span>Figma</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('invision')">
          <Invision class="h-9 w-11" alt="InVision title" title="InVision logo"></Invision>
          <span>InVision</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('canva')">
          <Canva class="h-9 w-11" alt="Canva logo" title="Canva title"></Canva>
          <span>Canva</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Other tools
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('wordpress')">
          <Wordpress class="h-9 w-11" title="Wordpress logo" alt="Wordpress logo"></Wordpress>
          <span>Wordpress</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('woocommerce')">
          <Woocommerce class="h-9 w-11" title="WooCommerce logo" alt="WooCommerce logo"></Woocommerce>
          <span>WooCommerce</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('glide')">
          <Glide class="h-9 w-11" title="GlideApps logo" alt="GlideApps logo"></Glide>
          <span>Glide</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('manychat')">
          <Manychat class="h-9 w-11" title="Manychat logo" alt="Manychat logo"></Manychat>
          <span>Manychat</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('analytics')">
          <Analytics class="h-9 w-11" title="Google Analytics logo" alt="Google Analytics logo"></Analytics>
          <span>Analytics</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('stripe')">
          <Stripe class="h-9 w-11" title="Stripe logo" alt="Stripe logo"></Stripe>
          <span>Stripe</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('vercel')">
          <Vercel class="h-9 w-11" alt="Vercel title" title="Vercel logo"></Vercel>
          <span>Vercel</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('firebase')">
          <Firebase class="h-9 w-11" alt="Firebase title" title="Firebase logo"></Firebase>
          <span>Firebase</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('supabase')">
          <Supabase class="h-9 w-11" alt="Supabase title" title="Supabase logo"></Supabase>
          <span>Supabase</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('pocketbase')">
          <Pocketbase class="h-9 w-11" alt="Pocketbase title" title="Pocketbase logo"></Pocketbase>
          <span>Pocketbase</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('jira')">
          <Jira class="h-9 w-11" alt="Jira title" title="Jira logo"></Jira>
          <span>Jira</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Javascript from "../assets/devicon/javascript.svg?inline";
  import HtmlIcon from "../assets/devicon/html.svg?inline";
  import Css from "../assets/devicon/css.svg?inline";
  import Vuejs from "../assets/devicon/vuejs.svg?inline";
  import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
  import Nuxt from "../assets/devicon/nuxt.svg?inline";
  import Bootstrap from "../assets/devicon/bootstrap.svg?inline";
  import Laravel from "../assets/devicon/laravel.svg?inline";
  import Node from "../assets/devicon/node.svg?inline";
  import Invision from "../assets/devicon/invision.svg?inline";
  import React from "../assets/devicon/react.svg?inline";
  import Redux from "../assets/devicon/redux.svg?inline";
  import Nextjs from "../assets/devicon/nextjs.svg?inline";
  import Nx from "../assets/devicon/nx.svg?inline";
  import Socketio from "../assets/devicon/socketio.svg?inline";
  import Storybook from "../assets/devicon/storybook.svg?inline";
  import Tanstack from "../assets/devicon/tanstack.svg?inline";
  import Php from "../assets/devicon/php.svg?inline";
  import Vercel from "../assets/devicon/vercel.svg?inline";
  import Firebase from "../assets/devicon/firebase.svg?inline";
  import Supabase from "../assets/devicon/supabase.svg?inline";
  import Pocketbase from "../assets/devicon/pocketbase.svg?inline";
  import Jira from "../assets/devicon/jira.svg?inline";
  import Typescript from "../assets/devicon/typescript.svg?inline";
  import Ionic from "../assets/devicon/ionic.svg?inline";
  import Python from "../assets/devicon/python.svg?inline";
  import Flask from "../assets/devicon/flask.svg?inline";
  import Express from "../assets/devicon/express.svg?inline";
  import Sequalize from "../assets/devicon/sequalize.svg?inline";
  import Docker from "../assets/devicon/docker.svg?inline";
  import Figma from "../assets/devicon/figma.svg?inline";
  import Canva from "../assets/devicon/canva.svg?inline";
  import Wordpress from "../assets/devicon/wordpress.svg?inline";
  import Woocommerce from "../assets/devicon/woocommerce.svg?inline";
  import Glide from "../assets/devicon/glide.svg?inline";
  import Manychat from "../assets/devicon/manychat.svg?inline";
  import Analytics from "../assets/devicon/google-analytics.svg?inline";
  import Stripe from "../assets/devicon/stripe.svg?inline";

  /** Fetches expertise items from the API. @returns {Promise<Array>} Resolves with an array of expertise items. */
  const fetchExpertiseItems = () => fetch(`${process.env.apiUrl}?path=expertise`).then(res => res.json());

  export default {
    name: "Expertise",
    components: {
      Javascript,
      HtmlIcon,
      Css,
      Bootstrap,
      Vuejs,
      TailwindCss,
      Nuxt,
      Laravel,
      Node,
      Invision,
      React,
      Redux,
      Nextjs,
      Nx,
      Socketio,
      Storybook,
      Tanstack,
      Php,
      Vercel,
      Firebase,
      Supabase,
      Pocketbase,
      Jira,
      Typescript,
      Ionic,
      Python,
      Flask,
      Express,
      Sequalize,
      Docker,
      Figma,
      Canva,
      Wordpress,
      Woocommerce,
      Glide,
      Manychat,
      Analytics,
      Stripe
    },
    data() {
      return {
        items: this.$store.state.expertise,
      };
    },
    mounted() {
      if (!this.items.length) {
        this.loadItems();
      }
    },
    methods: {
      async loadItems() {
        this.items = await fetchExpertiseItems();
      },
      /**
       * Retrieves a skill item from the items list if it matches the name and is marked as visible.
       * @param {string} skill - The name of the skill to find.
       * @returns {Object|null} The skill object if found and visible, otherwise null.
       */
      get(skill) {
        const sIndex = this.items.findIndex(i => i.title.toLowerCase() === skill.toLowerCase());
        if(sIndex > -1 && this.items[sIndex].visible) {
          return this.items[sIndex];
        } else {
          return null;
        }
      }
    },
  };
</script>
