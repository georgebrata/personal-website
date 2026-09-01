/**
 * Content that components used to load through `serverPrefetch` lives here
 * instead. Component-local `serverPrefetch` state is never serialized into the
 * static payload, so those components discarded the prerendered markup on
 * hydration and re-fetched from the API. Vuex state *is* serialized by
 * `nuxt generate`, so reading it keeps the prerendered content and drops the
 * runtime request.
 *
 * Each key is both the state key and the `path` it is fetched from.
 */
const CONTENT_COLLECTIONS = ["intro", "expertise", "experience", "socials"];

// `nuxtServerInit` runs once per rendered route, but a full static build renders
// every route in one process, so each collection is only requested once per build.
const responseCache = new Map();

/**
 * Fetches a content collection, reusing the in-flight or completed request for
 * the same collection within a single build.
 * @param {string} collection - The API `path` query value to request.
 * @returns {Promise<Array>} Resolves with the collection, or an empty array on failure.
 */
const fetchCollection = (collection) => {
  if (!responseCache.has(collection)) {
    const request = fetch(`${process.env.apiUrl}?path=${collection}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((items) => (Array.isArray(items) ? items : []))
      .catch((error) => {
        // Let a later route retry rather than caching a transient failure. Pages
        // still render, and the components fall back to fetching on the client.
        responseCache.delete(collection);
        console.warn(`Could not prerender "${collection}" content: ${error.message}`);
        return [];
      });

    responseCache.set(collection, request);
  }

  return responseCache.get(collection);
};

export const state = () => ({
  intro: [],
  expertise: [],
  experience: [],
  socials: [],
});

export const mutations = {
  setCollection(state, { collection, items }) {
    state[collection] = items;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const results = await Promise.all(CONTENT_COLLECTIONS.map(fetchCollection));

    CONTENT_COLLECTIONS.forEach((collection, index) => {
      commit("setCollection", { collection, items: results[index] });
    });
  },
};
