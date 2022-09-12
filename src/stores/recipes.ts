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
    const recipePaths = getAllRecipes()
      .then((recipes) => recipes.map((recipe) => buildRecipePath(recipe)))

      console.log({recipePaths})

    return { recipes, recipePaths }
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

interface RecipeSource {
  path: string,
  content: string,
}

async function getRecipeSources(): Promise<RecipeSource[]> {
  const files = await import.meta.glob('@recipes/**/*.cook', {
    eager: true,
    as: 'raw'
  })

  return Object.entries(files).map((file): RecipeSource => {
    const [path, content] = file;

    return {
      path,
      content
    }
  });
}

async function getAllRecipes(): Promise<Recipe[]> {
  const { VITE_RECIPES_PATH } = import.meta.env

  // Get source file paths and content as an object of keys and values.
  const sources = await getRecipeSources()

  //
  const recipes = sources.map(({path, content}): Recipe => {

    // Initialise a recipe class from the source file.
    const recipe = new Recipe(content)

    // Get the file name from path...
    const fileName = path.substring( path.lastIndexOf('/') + 1)
    .toLowerCase()
    .replace(/\.cook/g, '') // Trim extension...
    .replace(/[\s]/g, '-') // Add hyphens...
    .replace(/[!'()*]/g, '') // Remove other special characters.

    // Add extra details to metadata...
    recipe.metadata.fileName = fileName
    recipe.metadata.title = recipe.metadata.title || fileName

    return recipe
  })

  return recipes
}

export function buildRecipePath(recipe: Recipe) {
  return {
    params: { recipe: recipe.metadata.fileName },
    props: { recipe },
  }
}
