import { defineConfig } from 'astro/config'
import eslintPlugin from 'vite-plugin-eslint'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

import inject from '@rollup/plugin-inject'

import stdLibBrowser from 'node-stdlib-browser'

import vue from '@astrojs/vue'

import {
  ViteCooklangRecipeLoaderPlugin,
  getRecipesPath,
} from './src/lib/vite-cooklang-loader'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    // {
    //   name: 'pinia',
    //   hooks: {
    //     'astro:config:setup': ({ injectScript }) => {
    //       // injectScript("page-ssr", "const pinia = createPinia(); app.use(pinia); console.log(pinea)")
    //     },
    //   },
    // }
  ],

  vite: {
    plugins: [
      // browserifyPlugin(resolve),
      ViteCooklangRecipeLoaderPlugin(),
      // eslintPlugin(),
    ],

    resolve: {
      alias: {
        '@recipes': getRecipesPath(),
        // ...stdLibBrowser,
      },
    },

    optimizeDeps: {
      include: [
        // 'buffer', 'process', '@cooklang/cooklang-ts'
      ],
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
