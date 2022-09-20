<template>
  <div class="recipe-steps">
    <ul class="list-disc">
      <li v-for="step in stepParts">
        <component v-for="part in step" :is="part?.component" v-bind="part?.data" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Recipe, Ingredient as IngredientType, Cookware as CookwareType, Timer as TimerType } from '@cooklang/cooklang-ts'
import { defineComponent, createTextVNode } from 'vue'
import Ingredient from './step/Ingredient.vue'
import Cookware from './step/Cookware.vue'
import Timer from './step/Timer.vue'

export default defineComponent({
  props: {
    recipe: Recipe,
  },
  mounted() {
    console.log(this.stepParts)
  },
  computed: {
    stepParts: ({ recipe }) => {
      return recipe.steps.map((parts) => {
        return parts.map((part) => {
          if (part.type === 'text') {
            const { value } = part

            return {
              component: createTextVNode(value)
            }
          }

          if (part.type === 'ingredient') {
            const ingredient = part as IngredientType

            return {
              component: Ingredient,
              data: {
                ingredient
              }
            }
          }

          if (part.type === 'cookware') {
            const cookware = part as CookwareType

            return {
              component: Cookware,
              data: {
                cookware
              }
            }
          }

          if (part.type === 'timer') {
            const timer = part as TimerType

            return {
              component: Timer,
              data: {
                timer
              }
            }
          }
        })
      })
    },

    steps: ({ recipe }) => {

      console.log(...recipe.steps)

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


          return total
        }, '')
      })
    },
  },
})
</script>
