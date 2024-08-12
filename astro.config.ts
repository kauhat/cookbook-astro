import { defineConfig } from 'astro/config'
import eslintPlugin from 'vite-plugin-eslint'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import inject from '@rollup/plugin-inject'
import stdLibBrowser from 'node-stdlib-browser'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import cooklang from 'astro-cooklang'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    cooklang(),
    // {
    //   name: 'pinia',
    //   hooks: {
    //     'astro:config:setup': ({ injectScript }) => {
    //       // injectScript("page-ssr", "const pinia = createPinia(); app.use(pinia); console.log(pinea)")
    //     },
    //   },
    // }
  ],
})
