<template>
  <div class="recipe-steps">
    <ul>
      <li v-for="ingredient in recipe.shoppingList">
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
