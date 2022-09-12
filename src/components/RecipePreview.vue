<template>
  <div class="recipe-preview">
    <header>
      <p class="title">{{recipe.metadata?.title}}</p>
      <p class="servings">Servings: {{recipe.metadata?.servings}}</p>
    </header>

    <ul>
      {
      <!-- recipe.steps.map((parts: unknown[]) => (
				<li>
					{ JSON.stringify(parts) }

					{
						parts
						// parts.reduce(
						// 	function (previous, current: unknown): string {
						// 		return (
						// 			{previous + String(current?.value)}
						// 		)
						// 	},
						// 	''
						// );
					}
				</li>
			)) -->
      }
    </ul>

    <p>{{JSON.stringify(recipe)}}</p>
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
    // console.log(recipe)

    const recipeUrl = `/recipes/${recipe.metadata.fileName}`

    return {
      // recipe
      recipeUrl,
    }
  },
})
</script>
