import { z, defineCollection } from 'astro:content'
import { recipeSchema } from 'astro-cooklang'

const recipes = defineCollection({
  schema: z.object({
    // Add recipe properties.
    ...recipeSchema,

    title: z.string().optional(),
    category: z.string().optional(),

    // TODO: How should metadata property object/array output work?
    // tags: z
    //   .array(z.string())
    //   // .any()
    //   .default([]),
  }),
})

export const collections = {
  recipes,
}
