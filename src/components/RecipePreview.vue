<template>
  <div class="recipe-preview card bg-base-100 shadow-sm">
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
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    recipe: Recipe,
  },
  setup({ recipe }) {
    console.log(recipe)

    const recipeUrl = `/recipes/${recipe.metadata.fileName}`

    return {
      // recipe
      recipeUrl,
    }
  },
})
</script>
