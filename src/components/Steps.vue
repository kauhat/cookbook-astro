<template>
  <div class="recipe-steps">
    <ul class="list-disc">
      <li v-for="step in steps">
        {{ step }}
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
  computed: {
    steps: ({ recipe }) => {
      return recipe.steps.map((parts) => {
        return parts.reduce((total, value) => {
          if (value.type === 'text') {
            return total + value.value
          }

          if (value.type === 'ingredient') {
            return (
              total +
              `${value.name} (${value.quantity ?? ''} ${value.units ?? ''})`
            )
          }

          if (value.type === 'cookware') {
            return (
              total +
              `${value.name} (${value.quantity ?? ''} ${value.units ?? ''})`
            )
          }

          if (value.type === 'timer') {
            return (
              total +
              `${value.quantity ?? ''} ${value.units ?? ''} (${value.name})`
            )
          }

          console.log(value)

          return total
        }, '')
      })
    },
  },
})
</script>
