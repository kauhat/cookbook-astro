<template>
  <div class="recipe__ingredients">
    <ul>
      <li v-for="ingredient in recipe.ingredients">
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Recipe } from '@cooklang/cooklang-ts'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { LoadedRecipeData } from '../data/recipes'

export default defineComponent({
  props: {
    recipe: Object as PropType<LoadedRecipeData>,
  },
})
</script>
