# React + Vite + SWR Progressive Web App

This project is an example of how to cache and serve data and videos in a PWA.
It is built with React, Vite, and SWR.

It caches data using a custom cache provider ([swr-idb-cache](https://github.com/piotr-cz/swr-idb-cache)) written by [piotr-cz](https://github.com/piotr-cz). It fetches data from the cache when the user is offline, by using a custom fetcher that fetches from [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) instead of the API. The data being used here is fetched from the [Star Wars API](https://swapi.dev/).

For caching static assets and pages for offline use, it uses [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa).

For caching videos for offline use, we download the videos using and [axios](https://axios-http.com/) get request, then we store the raw buffer data in IndexedDB. Currently we are limited by the size of videos. Larger videos can be implemented by using chunking as in [this](https://web.dev/articles/pwa-with-offline-streaming#downloading_media_files_using_the_fetch_api) example.

## Technologies

- [**React**](https://react.dev/): A JavaScript library for building user interfaces.
- [**Vite**](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [**SWR**](https://swr.vercel.app/): A React Hooks library for remote data fetching.
- [**Axios**](https://axios-http.com/): A simple promise based HTTP client for the browser and node.js.
- [**idb**](https://github.com/jakearchibald/idb#readme): Mostly mirrors the [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) API, but with small improvements that make a big difference to usability.
- [**swr-idb-cache**](https://github.com/piotr-cz/swr-idb-cache): Synchronize SWR Cache with IndexedDB to get offline cache.

## Getting Started

1. Clone the repository
2. Install dependencies with `yarn`
3. Start the PWA with `yarn pwa` (The normal development server can also be started with `yarn dev`, but some PWA features will not be available)

## Demo

<https://pwa-with-swr-idb-cache-and-offline-video.onrender.com/>

Enjoy exploring and building upon this project!
