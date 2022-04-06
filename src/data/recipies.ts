import { readdirSync } from 'fs'
import { basename } from 'path'
import { Recipe } from '@cooklang/cooklang-ts'

// export function listRecipies() {
//   const { RECIPIES_PATH } = import.meta.env

//   readdirSync(RECIPIES_PATH).forEach((file: unknown) => {
//     return console.log(file)
//   })

//   console.log(`${RECIPIES_PATH}/**/*.cook`)
// }

export async function getAllRecipies(): Promise<Recipe[]> {
  //
  const globberArgs = { as: 'raw' }

  const files = await import.meta.glob('./recipies/**/*.cook', globberArgs)

  // Initialse recipe classes from the source files.
  const recipies = Object.entries(files).map(function (file): Recipe {
    const [path, content]: [string, unknown] = file

    // Initialse recipe class from the source file.
    const recipe = new Recipe(String(content))

    // TODO: Allow using original values.
    recipe.metadata.path = path
    recipe.metadata.title = basename(recipe.metadata.path, '.cook')

    return recipe
  })

  // console.log({ RECIPIES_PATH, files, recipies })

  return recipies
}

export async function buildRecipePaths(): Promise<unknown[]> {
  const allRecipies = (await getAllRecipies()).map(function (recipe: Recipe) {
    console.log(recipe)

    return {
      params: { recipe: recipe.metadata.title },
      props: { recipe: recipe },
    }
  })

  return allRecipies
}
