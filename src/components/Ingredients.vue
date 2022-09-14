<template>
  <div class="recipe-steps prose prose-lg">
    <ul>
      <li v-for="ingredient in recipe.ingredients">
        {{ JSON.stringify(ingredient) }}
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
})
</script>
