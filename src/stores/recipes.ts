import { defineStore, createPinia } from 'pinia'
import { createApp } from 'vue'
// import { readdirSync } from 'fs'
// import { resolve, dirname, basename } from 'path-browserify'
import { Recipe } from '@cooklang/cooklang-ts'

const pinia = createPinia()

// Create a Vue instance for Pinia...
// TODO: Is this weird?
createApp({}).use(pinia)

export const useRecipesStore = defineStore('recipes', {
  state: () => {
    const recipes = getAllRecipes()

    return { recipes }
  },

  actions: {
    async getAllRecipes() {
      return await this.recipes
    },
  },
})

// export function listRecipes() {
//   const { VITE_RECIPES_PATH } = import.meta.env

//   readdirSync(VITE_RECIPES_PATH).forEach((file: unknown) => {
//     return console.log(file)
//   })
// }

async function getRecipeSources(): Promise<[string, unknown][]> {
  const files = await import.meta.globEager('@recipes/**/*.cook', {})

  console.log({ files })

  return files
}

async function getAllRecipes(): Promise<Recipe[]> {
  // Get source file paths and content as an object of keys and values.
  const files = await getRecipeSources()

  //
  const recipes = Object.entries(files).map(function (file): Recipe {
    const [path, content]: [string, unknown] = file

    // Initialise a recipe class from the source file.
    const recipe = new Recipe(String(content))

    // TODO: Allow using original values.
    recipe.metadata.path = path
      .toLowerCase()
      .replace(/\.cook/g, '') // Trim extension...
      .replace(/[\s]/g, '-') // Add hyphens...
      .replace(/[!'()*]/g, '') // Remove other special characters.

    recipe.metadata.title = recipe.metadata.path // basename(recipe.metadata.path, '.cook')

    // console.log(recipe)

    return recipe
  })

  const { VITE_RECIPES_PATH } = import.meta.env

  // console.log({ VITE_RECIPES_PATH, files, recipes })

  return recipes
}

export async function buildRecipePath(recipe: Recipe) {
  return {
    params: { recipe: recipe?.metadata?.path },
    props: { recipe: recipe },
  }
}
