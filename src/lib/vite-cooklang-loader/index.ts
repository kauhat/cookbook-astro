import { Plugin, TransformResult } from 'vite'
// import { readFile, writeFile, realpath } from 'fs/promises'
// import { realpath, realpathSync } from 'fs'
import { createFilter, FilterPattern } from '@rollup/pluginutils'

import { Recipe } from '@cooklang/cooklang-ts'

export type ViteCooklangPluginOptions = {
  include?: FilterPattern
  exclude?: FilterPattern
}

export function ViteCooklangRecipeLoaderPlugin(
  options: ViteCooklangPluginOptions = {}
): Plugin {
  const fileRegex = /\.cook$/

  const filter = createFilter(options.include ?? fileRegex, options.exclude)

  const loadedRecipies: Map<string, Recipe> = new Map()

  return {
    name: 'cooklang-loader',
    // enforce: 'pre',

    transform(source: string, id: string): TransformResult | null {
      // Check the file name contains ".cook" extension.
      if (!filter(id)) {
        return null
      }

      // Resolve the imported path and load the file.
      const [path, _query] = id.split('?', 2)
      // const resolvedPath = realpathSync(path)

      // const source: string = await readFile(path, 'utf-8')
      // return

      // Parse the recipe...
      const recipe = new Recipe(source)
      loadedRecipies.set(path, recipe)

      // //
      return {
        code: `
            // import { Recipe } from '@cooklang/cooklang-ts'
            export default ${JSON.stringify(recipe)}
          `,
        map: null,
        // deps: ['@cooklang/cooklang-ts'],
        // dynamicDeps: ['@cooklang/cooklang-ts'],
      }
    },
  }
}

export default ViteCooklangRecipeLoaderPlugin
