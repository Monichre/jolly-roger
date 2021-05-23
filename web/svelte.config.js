import preprocess from 'svelte-preprocess';
import static from '@sveltejs/adapter-static';
// import adapter_ipfs from 'sveltejs-adapter-ipfs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: static(),
    target: '#svelte',
    trailingSlash: 'ignore',
  },
};

export default config;
