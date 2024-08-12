<template>
  <span>
    <h3 class="title font-display text-2xl font-light">
      {{ title }}
    </h3>

    <p class="servings">Servings: {{ recipe.metadata?.servings ?? '??' }}</p>

    <div class="card-actions justify-end">
      <a :href="recipeUrl" class="btn btn-outline btn-primary btn-sm"
        >Read more</a
      >
    </div>
  </span>
</template>

<script lang="ts">
import { Recipe } from '@cooklang/cooklang-ts'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { buildRecipeUrl, LoadedRecipeData } from '../data/recipes'

export default defineComponent({
  props: {
    recipe: Object as PropType<LoadedRecipeData>,
  },
  setup({ recipe }) {
    const recipeUrl = buildRecipeUrl(recipe)

    console.log(recipe)

    const title = recipe.data.metadata?.title ?? ''

    return {
      // recipe
      title,
      recipeUrl,
    }
  },
})
</script>
