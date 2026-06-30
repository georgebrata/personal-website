<template>
  <footer>
    <div class="flex flex-col items-center mt-8">
      <div class="footer-socials flex flex-wrap justify-center mb-4 gap-4">
        <a
          class="footer-social-link text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="sanitizeHref(`mailto:${siteMetadata.email}`)"
          aria-label="Email"
          data-tooltip="Email"
        >
          <span class="sr-only">Email</span>
          <img class="footer-social-icon w-8 h-8" src="~assets/icon/mail.svg" alt="" />
        </a>

        <a
          v-for="i in socialItemsWithIcons"
          :key="i.title"
          class="footer-social-link text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="sanitizeHref(i.href)"
          :aria-label="formatPlatformTitle(i.title)"
          :data-tooltip="formatPlatformTitle(i.title)"
        >
          <span class="sr-only">{{ formatPlatformTitle(i.title) }}</span>
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'cursor'" src="~assets/icon/cursor.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'facebook'" src="~assets/icon/facebook.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'instagram'" src="~assets/icon/instagram.png" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'linkedin'" src="~assets/icon/linkeding.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'twitter'" src="~assets/icon/twitter.png" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'youtube'" src="~assets/icon/youtube.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'github'" src="~assets/icon/github_new.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && ['ko-fi', 'kofi'].includes(i.title.toLowerCase())" src="~assets/icon/kofi.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && ['buymeacoffee', 'buy-me-a-coffee', 'buy me a coffee'].includes(i.title.toLowerCase())" src="~assets/icon/buymeacoffee.svg" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'codepen'" src="~assets/icon/codepen.png" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'bitbucket'" src="~assets/icon/bitbucket.png" />
          <img class="footer-social-icon w-8 h-8" alt="" v-if="i.title && i.title.toLowerCase() === 'leetcode'" src="~assets/icon/leetcode.png" />
        </a>
      </div>

      <div class="flex mb-2 mt-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>
          Copyright © {{ new Date().getFullYear() }} •
          <a :href="sanitizeHref(siteMetadata.siteUrl)">{{ siteMetadata.author }}</a>
        </div>
      </div>

      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"
        ></a>
      </div>
      <!-- <BuyMeACoffee></BuyMeACoffee> -->
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";

/** Fetches social link items from the API. @returns {Promise<Array>} Resolves with an array of social link items. */
const fetchSocialItems = () => fetch(process.env.apiUrl.concat("?path=socials")).then(res => res.json());

export default {
  name: "TheFooter",
  data() {
    return {
      siteMetadata: siteMetaInfo,
      items: [],
    };
  },
  computed: {
    socialItemsWithIcons() {
      return this.items.filter(i => this.hasPlatformIcon(i.title));
    },
  },
  serverPrefetch() {
    return this.loadItems();
  },
  mounted() {
    if (!this.items.length) {
      this.loadItems();
    }
  },
  methods: {
    async loadItems() {
      const items = await fetchSocialItems();
      this.items = items.filter(i => i.visible);
    },
    /**
     * Sanitizes a given URL string to ensure it uses safe protocols or is a local path.
     * @param {string} href - The URL string to sanitize.
     * @returns {string} The sanitized URL or '#' if unsafe.
     */
    sanitizeHref(href) {
      if (!href) return "#";
      const allowedProtocols = ["http:", "https:", "mailto:"];

      try {
        const url = new URL(href, "http://local-base");
        if (allowedProtocols.includes(url.protocol)) {
          return href;
        }
        if (href.startsWith("/") || href.startsWith("#")) {
          return href;
        }
        return "#";
      } catch {
        if (href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:")) {
          return href;
        }
        return "#";
      }
    },
    hasPlatformIcon(title) {
      const supportedPlatforms = [
        "bitbucket",
        "buy me a coffee",
        "buy-me-a-coffee",
        "buymeacoffee",
        "codepen",
        "cursor",
        "facebook",
        "github",
        "instagram",
        "ko-fi",
        "kofi",
        "leetcode",
        "linkedin",
        "twitter",
        "youtube",
      ];

      return Boolean(title && supportedPlatforms.includes(title.toLowerCase()));
    },
    formatPlatformTitle(title) {
      const platformNames = {
        bitbucket: "Bitbucket",
        "buy me a coffee": "Buy Me a Coffee",
        "buy-me-a-coffee": "Buy Me a Coffee",
        buymeacoffee: "Buy Me a Coffee",
        codepen: "CodePen",
        cursor: "Cursor",
        facebook: "Facebook",
        github: "GitHub",
        instagram: "Instagram",
        "ko-fi": "Ko-fi",
        kofi: "Ko-fi",
        leetcode: "LeetCode",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        youtube: "YouTube",
      };

      if (!title) {
        return "";
      }

      const normalizedTitle = title.toLowerCase();
      return platformNames[normalizedTitle] || title;
    },
  },
};
</script>

<style scoped>
.footer-social-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}

.footer-social-link:hover,
.footer-social-link:focus {
  text-decoration: none;
}

.footer-social-link:hover,
.footer-social-link:focus-visible {
  background-color: rgba(243, 244, 246, 0.9);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
  transform: translateY(-2px);
}

.footer-social-link:focus-visible {
  outline: 2px solid #1e3a8a;
  outline-offset: 4px;
}

.footer-social-link::before,
.footer-social-link::after {
  position: absolute;
  left: 50%;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 0.35rem) scale(0.96);
  transform-origin: bottom center;
  transition: opacity 180ms ease, transform 180ms ease;
}

.footer-social-link::before {
  bottom: calc(100% + 0.75rem);
  padding: 0.4rem 0.65rem;
  border-radius: 0.375rem;
  background-color: rgba(17, 24, 39, 0.94);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
  color: #ffffff;
  content: attr(data-tooltip);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
}

.footer-social-link::after {
  bottom: calc(100% + 0.4rem);
  border: 0.35rem solid transparent;
  border-top-color: rgba(17, 24, 39, 0.94);
  content: "";
}

.footer-social-link:hover::before,
.footer-social-link:hover::after,
.footer-social-link:focus-visible::before,
.footer-social-link:focus-visible::after {
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}

.footer-social-icon {
  transition: opacity 180ms ease, transform 180ms ease;
}

.footer-social-link:hover .footer-social-icon,
.footer-social-link:focus-visible .footer-social-icon {
  opacity: 0.9;
  transform: scale(1.06);
}

.dark .footer-social-link:hover,
.dark .footer-social-link:focus-visible {
  background-color: rgba(31, 41, 55, 0.78);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
}

.dark .footer-social-link::before {
  background-color: rgba(243, 244, 246, 0.96);
  color: #111827;
}

.dark .footer-social-link::after {
  border-top-color: rgba(243, 244, 246, 0.96);
}

@media (prefers-reduced-motion: reduce) {
  .footer-social-link,
  .footer-social-link::before,
  .footer-social-link::after,
  .footer-social-icon {
    transition: none;
  }
}
</style>
