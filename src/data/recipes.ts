
import { Recipe as CookRecipe } from '@cooklang/cooklang-ts'
import { ref } from 'vue'

export interface RecipeSource {
    path: string
    content: string
}

export interface LoadedRecipeData {
    instance: CookRecipe
    slug: string,
    meta: {
        path: string
    }
}

class LoadedRecipe implements LoadedRecipeData {

}

function buildRecipeData(source: RecipeSource, instance: CookRecipe): LoadedRecipeData {
    const { path, content } = source

    // Get the file name from path...
    const fileName = path
        .substring(path.lastIndexOf('/') + 1)
        .toLowerCase()
        .replace(/\.cook/g, '') // Trim extension...
        .replace(/[\s]/g, '-') // Add hyphens...
        .replace(/[!'()*]/g, '') // Remove other special characters.

    // Add extra details to metadata...
    // instance.metadata.fileName = fileName
    // instance.metadata.title = instance.metadata.title || fileName

    return {
        instance,
        slug: fileName,
        meta: {
            path
        }
    }
}

export function buildRecipeUrl(recipeData: LoadedRecipeData) {
    return `/recipes/${recipeData?.slug}`
}

export function buildRecipePath(recipeData: LoadedRecipeData) {
    const { instance, slug } = recipeData

    return {
        params: { recipe: slug },
        props: { recipe: ref(instance) },
    }
}

async function getRecipeSources(): Promise<RecipeSource[]> {
    const files = await import.meta.glob('@recipes/**/*.cook', {
        eager: true,
        as: 'raw',
    })

    return Object.entries(files).map((file): RecipeSource => {
        const [path, content] = file

        return {
            path,
            content,
        }
    })
}

export async function loadRecipe(source): Promise<LoadedRecipeData> {
    const { path, content } = source

    // Initialise a recipe class from the source file.
    const instance = new CookRecipe(content)

    //
    return buildRecipeData(source, instance)
}

export async function getAllRecipes(): Promise<LoadedRecipeData[]> {
    // Get source file paths and content as an object of keys and values.
    const sources = await getRecipeSources()

    return Promise.all(
        sources.map((source) => loadRecipe(source))
    )
}
