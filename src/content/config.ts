import { recipeSchema } from "astro-cooklang";
import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  schema: z.object({
    // Add recipe properties.
    ...recipeSchema,

    title: z.string().optional(),
    category: z.string().optional(),
    source: z.string().optional(),
    servings: z.optional(z.coerce.string()), // z.optional(z.coerce.number()),
    time: z.optional(z.coerce.string()), // z.optional(z.coerce.number()),

    // TODO: How should metadata property object/array output work?
    // tags: z
    //   .array(z.string())
    //   // .any()
    //   .default([]),
  }),
});

export const collections = {
  recipes,
};
