<template>
  <div class="mt-8">
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Frontend
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('html')">
          <Html class="h-9 w-11 rounded-sm drop-shadow-sm">
          </Html>
          <span>HTML</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('css')">
          <Css class="h-9 w-11 rounded-sm drop-shadow-sm"></Css>
          <span>CSS</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('bootstrap')">
          <Bootstrap class="h-9 w-11"></Bootstrap>
          <span>Bootstrap</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('tailwind')">
          <TailwindCss class="h-9 w-11"></TailwindCss>
          <span>Tailwind</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('javascript')">
          <Javascript class="h-9 w-11"></Javascript>
          <span>Javascript</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('typescript')">
          <img class="w-9 h-9" src="~assets/devicon/typescript.png" alt="Typescript logo" title="Typescript title" />
          <span>Typescript</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('vue.js')">
          <Vuejs class="h-10 w-12"></Vuejs>
          <span>Vue.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('nuxt.js')">
          <Nuxt class="h-10 w-12"></Nuxt>
          <span>Nuxt.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('ionic')">
          <img class="w-9 h-9" src="~assets/devicon/ionic.png" alt="Ionic logo" title="Ionic title" />
          <span>Ionic</span>
        </li>
      </ul>
    </div>
    <div class="mt-4" v-if="get('node.js') || get('laravel') || get('docker')">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Backend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('node.js')">
          <Node class="h-9 w-11" alt="Node title" title="Node logo"></Node>
          <span>Node.js</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12" v-if="get('laravel')">
          <Laravel class="h-9 w-11" alt="Laravel title" title="Laravel logo"></Laravel>
          <span>Laravel</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-10 h-8 my-1" src="~assets/devicon/docker.png" title="Docker logo" alt="Docker logo" v-if="get('docker')"/>
          <span>Docker</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Design
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-10" src="~assets/devicon/figma.png" title="Figma logo" alt="Figma logo" />
          <span>Figma</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <Invision class="h-9 w-11" alt="InVision title" title="InVision logo"></Invision>
          <span>InVision</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="h-9 w-10" src="~assets/devicon/canva.png" alt="Canva logo" title="Canva title" />
          <span>Canva</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Other tools
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-8 mt-2 mb-2" src="~assets/devicon/wordpress.png" title="Wordpress logo" alt="Wordpress logo" />
          <span>Wordpress</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-8 mt-2 mb-2" src="~assets/devicon/woocommerce.png" title="WooCommerce logo" alt="WooCommerce logo" />
          <span>WooCommerce</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-8 mt-2 mb-2" src="~assets/devicon/glide.png" title="GlideApps logo" alt="GlideApps logo" />
          <span>Glide</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-10 mb-2" src="~assets/devicon/google-analytics.png" title="Google Analytics logo" alt="Google Analytics logo" />
          <span>Analytics</span>
        </li>
        <li class="flex flex-col text-transparent hover:text-black items-center w-12">
          <img class="w-8 h-8 mt-2 mb-2" src="~assets/devicon/stripe.png" title="Stripe logo" alt="Stripe logo" />
          <span>Stripe</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Javascript from "../assets/devicon/javascript.svg?inline";
  import Html from "../assets/devicon/html.svg?inline";
  import Css from "../assets/devicon/css.svg?inline";
  import Vuejs from "../assets/devicon/vuejs.svg?inline";
  import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
  import Nuxt from "../assets/devicon/nuxt.svg?inline";
  import Bootstrap from "../assets/devicon/bootstrap.svg?inline";
  import Laravel from "../assets/devicon/laravel.svg?inline";
  import Node from "../assets/devicon/node.svg?inline";
  import Invision from "../assets/devicon/invision.svg?inline";
  export default {
    components: {
      Javascript,
      Html,
      Css,
      Bootstrap,
      Vuejs,
      TailwindCss,
      Nuxt,
      Laravel,
      Node,
      Invision
    },
    data() {
      return {
        items: []
      };
    },
    methods: {
      get(skill) {
        let sIndex = this.items.findIndex(i => i.title.toLowerCase() === skill.toLowerCase());
        if(sIndex > -1 && this.items[sIndex].show === true) {
          return this.items[sIndex];
        } else {
          return null;
        }
      }
    },
    async fetch() {
      this.items = await fetch(
        'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/georgebrataRo/expertise'
      ).then(res => res.json());
      this.items = this.items.expertise;
    },
  };
</script>
