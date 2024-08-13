<template>
  <div class="recipe__ingredients">
    <ul>
      <li v-for="ingredient in recipe?.data.ingredients">
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type { CollectionEntry } from "astro:content";

export default defineComponent({
  props: {
    recipe: Object as PropType<CollectionEntry<"recipes">>,
  },
});
</script>
