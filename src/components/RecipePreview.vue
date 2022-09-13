<template>
  <div class="recipe-preview prose">
    <header>
      <h3 class="title">{{recipe.metadata?.title}}</h3>
      <p class="servings">Servings: {{recipe.metadata?.servings ?? '??'}}</p>
    </header>

    <a :href="recipeUrl">Read more</a>
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
