// import { readdirSync } from 'fs'
// import { resolve, dirname, basename } from 'path-browserify'
import { Recipe } from '@cooklang/cooklang-ts'

// export function listRecipies() {
//   const { VITE_RECIPIES_PATH } = import.meta.env

//   readdirSync(VITE_RECIPIES_PATH).forEach((file: unknown) => {
//     return console.log(file)
//   })
// }

export async function getCooklangRecipieSources() {
  const files = await import.meta.globEager('@recipies/**/*.cook', {
    // as: 'cook',
    // realpath: true,
    // ssr: false,
  })

  console.log({ files })

  return files
}

export async function getAllRecipies(): Promise<Recipe[]> {
  // Get source file paths and content as an object of keys and values.
  const files = await getCooklangRecipieSources()

  // Initialse recipe classes from the source files.
  const recipies = Object.entries(files).map(function (file): Recipe {
    const [path, content]: [string, unknown] = file

    // Initialse recipe class from the source file.
    const recipe = new Recipe(String(content))

    // TODO: Allow using original values.
    recipe.metadata.path = path
    recipe.metadata.title = recipe.metadata.path // basename(recipe.metadata.path, '.cook')

    return recipe
  })

  const { VITE_RECIPIES_PATH } = import.meta.env
  console.log({ VITE_RECIPIES_PATH, files, recipies })

  return recipies
}

export async function buildRecipePath(recipe: Recipe) {
  return {
    params: { recipe: recipe?.metadata?.title },
    props: { recipe: recipe },
  }
}
