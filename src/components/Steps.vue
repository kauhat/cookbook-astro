<template>
  <div class="recipe-steps">
    <ul>
      <li v-for="step in recipe.steps">
        {{ JSON.stringify(step) }}
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
