import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

import inject from '@rollup/plugin-inject'

import stdLibBrowser from 'node-stdlib-browser'

import vue from '@astrojs/vue'
import { cwd } from 'process'
import { resolve } from 'path'

import cooklangPlugin from './src/lib/vite-cooklang-loader'

function getRecipesPath() {
  const { VITE_RECIPIES_PATH } = loadEnv('', cwd())

  return resolve(VITE_RECIPIES_PATH)
}

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  vite: {
    plugins: [
      eslintPlugin(),
      // browserifyPlugin(resolve),
      cooklangPlugin(),
      {
        ...inject({
          // global: [
          //   import('node-stdlib-browser/helpers/esbuild/shim'),
          //   'global',
          // ],
          // process: [
          //   import('node-stdlib-browser/helpers/esbuild/shim'),
          //   'process',
          // ],
          // Buffer: [
          //   import('node-stdlib-browser/helpers/esbuild/shim'),
          //   'Buffer',
          // ],
        }),
        enforce: 'post',
      },
    ],

    resolve: {
      alias: {
        '@recipes': getRecipesPath(),
        ...stdLibBrowser,
      },
    },

    optimizeDeps: {
      include: ['buffer', 'process', '@cooklang/cooklang-ts'],
    },

    build: {
      // rollupOptions: {
      //   plugins: [
      //     // Enable rollup polyfills plugin
      //     // used during production bundling
      //     rollupNodePolyFill(),
      //   ],
      // },
    },
  },
})
