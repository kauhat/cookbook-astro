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
import { defineComponent, PropType } from 'vue'
import { LoadedRecipeData } from '../data/recipes';

export default defineComponent({
  props: {
    recipe: Object as PropType<LoadedRecipeData>
  },
})
</script>
