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
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    recipe: Recipe,
  },
  setup({recipe}) {
    // console.log(recipe)
  }
})
</script>
