<template>
  <div
    class="recipe-preview card card-bordered border-dashed bg-base-100 shadow-sm"
  >
    <div class="card-body prose">
      <h3 class="title font-display text-2xl font-light">
        {{ recipe.metadata?.title }}
      </h3>
      <p class="servings">Servings: {{ recipe.metadata?.servings ?? '??' }}</p>

      <div class="card-actions justify-end">
        <a :href="recipeUrl" class="btn btn-outline btn-primary btn-sm"
          >Read more</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@cooklang/cooklang-ts'
import { defineComponent, PropType } from 'vue'
import { buildRecipeUrl, LoadedRecipeData } from '../data/recipes'

export default defineComponent({
  props: {
    recipe: Object as PropType<LoadedRecipeData>,
  },
  setup({ recipe }) {
    const recipeUrl = buildRecipeUrl(recipe)

    return {
      // recipe
      recipeUrl,
    }
  },
})
</script>
