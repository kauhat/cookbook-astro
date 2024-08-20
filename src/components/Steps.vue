<template>
  <div class="recipe__steps prose prose-lg">
    <ol>
      <li v-for="step in stepParts">
        <component
          v-for="part in step"
          :is="part?.component"
          v-bind="part?.data"
        />
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import type {
  Cookware as CookwareType,
  Ingredient as IngredientType,
  Timer as TimerType,
} from "@cooklang/cooklang-ts";
import { createTextVNode, defineComponent } from "vue";
import type { PropType } from "vue";
import type { CollectionEntry } from "astro:content";
import Cookware from "./step/Cookware.vue";
import Ingredient from "./step/Ingredient.vue";
import Timer from "./step/Timer.vue";

export default defineComponent({
  props: {
    recipe: Object as PropType<CollectionEntry<"recipes">>,
  },
  setup({ recipe }) {
    /**
     * For every step of the recipe, transform all parts (text/ingredient/etc.)
     * into their respective renderable components.
     */
    const stepParts = recipe?.data.steps.map((parts) => {
      return parts.map((part) => {
        if (part.type === "text") {
          const { value } = part;

          return {
            component: createTextVNode(value),
          };
        }

        if (part.type === "ingredient") {
          const ingredient = part as IngredientType;

          return {
            component: Ingredient,
            data: {
              ingredient,
            },
          };
        }

        if (part.type === "cookware") {
          const cookware = part as CookwareType;

          return {
            component: Cookware,
            data: {
              cookware,
            },
          };
        }

        if (part.type === "timer") {
          const timer = part as TimerType;

          return {
            component: Timer,
            data: {
              timer,
            },
          };
        }
      });
    });

    return { stepParts };
  },
});
</script>
