<template>
  <span>
    <h3 class="title font-display text-2xl font-light">
      {{ title }}
    </h3>

    <p class="servings">Servings: {{ recipe?.data.servings ?? "?" }}</p>

    <div class="card-actions justify-end">
      <a :href="recipeUrl" class="btn btn-outline btn-primary btn-sm"
        >Read more</a
      >
    </div>
  </span>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type { CollectionEntry } from "astro:content";

export default defineComponent({
  props: {
    recipe: Object as PropType<CollectionEntry<"recipes">>,
  },
  setup({ recipe }) {
    const recipeUrl = `/recipes/${recipe?.slug}`;
    const title = recipe?.data?.title ?? recipe?.id;

    return {
      title,
      recipeUrl,
    };
  },
});
</script>
